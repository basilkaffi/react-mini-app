import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import PaginationUser from "./components/PaginationUser";
import PaginationSearch from "./components/PaginationSearch";
import Footer from "./components/Footer";
function App() {
  const [users, setUsers] = useState([]);
  const [inputFromSearch, setInput] = useState("");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get("https://api.github.com/users?per_page=96", {
        headers: {
          accept: "application/vnd.github.v3+json",
        },
      })
      .then((response) => {
        console.log(
          new Date(response.headers[`x-ratelimit-reset`] * 1000),
          response.headers[`x-ratelimit-remaining`]
        );
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const changePage = useCallback((nextId) => {
    return new Promise((res, rej) => {
      axios
        .get(`https://api.github.com/users?since=${nextId}&per_page=96`, {
          headers: {
            accept: "application/vnd.github.v3+json",
          },
        })
        .then((response) => {
          console.log(
            new Date(response.headers[`x-ratelimit-reset`] * 1000),
            response.headers[`x-ratelimit-remaining`]
          );
          setUsers(response.data);
          res();
        })
        .catch((err) => {
          rej(err);
        });
    });
  }, []);
  const searchUser = (page) => {
    axios
      .get(
        `https://api.github.com/search/users?q=${inputFromSearch}&page=${page}&per_page=12`,
        {
          headers: {
            accept: "application/vnd.github.v3+json",
          },
        }
      )
      .then((response) => {
        if (response.data.total_count <= 960) {
          setTotal(response.data.total_count);
        } else {
          setTotal(960);
        }
        setUsers(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-indigo-100 flex flex-col w-full h-full min-h-screen">
      <Navbar />
      <div className="max-w-max m-auto">
        <Search
          getInput={(input) => setInput(input)}
          search={(e) => searchUser(e)}
        />
        {inputFromSearch === "" && (
          <PaginationUser users={users} changePage={(idx) => changePage(idx)} />
        )}
        {inputFromSearch !== "" && (
          <PaginationSearch
            total={total}
            users={users}
            changePage={(idx) => searchUser(idx)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
