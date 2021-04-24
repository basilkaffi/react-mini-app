import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import PaginationUser from "../components/PaginationUser";
import PaginationSearch from "../components/PaginationSearch";
import Footer from "../components/Footer";
import { errorMessage } from "../components/Sweetalert";
function ListPage() {
  const [users, setUsers] = useState([]);
  const [inputFromSearch, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
        setUsers(response.data);
      })
      .catch((error) => {
        setLoading(false);
        let msg = error.response.data.message.split("f")[0];
        errorMessage(msg);
      });
  }, []);
  const changePage = useCallback((nextId) => {
    setLoading(true);
    return new Promise((res, rej) => {
      axios
        .get(`https://api.github.com/users?since=${nextId}&per_page=96`, {
          headers: {
            accept: "application/vnd.github.v3+json",
          },
        })
        .then((response) => {
          setLoading(false);
          console.log(
            new Date(response.headers[`x-ratelimit-reset`] * 1000),
            response.headers[`x-ratelimit-remaining`]
          );
          setUsers(response.data);
          res();
        })
        .catch((error) => {
          setLoading(false);
          let msg = error.response.data.message.split("f")[0];
          errorMessage(msg);
          rej(error);
        });
    });
  }, []);
  const searchUser = (page) => {
    setLoading(true);
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
        setLoading(false);
        if (response.data.total_count <= 960) {
          setTotal(response.data.total_count);
        } else {
          setTotal(960);
        }
        setUsers(response.data.items);
      })
      .catch((error) => {
        setLoading(false);
        let msg = error.response.data.message.split("f")[0];
        errorMessage(msg);
      });
  };
  return (
    <div className="bg-indigo-100 flex flex-col w-full h-full min-h-screen">
      <Navbar reset={(idx) => changePage(idx)} />
      <div className="max-w-max m-auto">
        <Search
          getInput={(input) => setInput(input)}
          search={(e) => searchUser(e)}
        />
        {loading && (
          <div
            className="w-full flex justify-center items-center"
            style={{ height: "45vh" }}
          >
            <div className="animate-spin">
              <img src="https://img.icons8.com/color/48/000000/iphone-spinner--v1.png" />
            </div>
          </div>
        )}
        {inputFromSearch === "" && !loading && (
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

export default ListPage;
