import { useState, useEffect, useRef, useCallback } from "react";
import Card from "./Card";
function App(props) {
  const { users, changePage } = props;
  const [pagination, setPagination] = useState([]);
  const [realNextPage, setRealNextPage] = useState(0);
  const [prevIdx, setPrevIdx] = useState([0]);
  const [idx, setIdx] = useState(0);
  const leftButton = useRef();
  useEffect(() => {
    let startIdx = 0;
    let finishIdx = startIdx + 12;
    if (idx < 96) {
      startIdx = idx * 12;
      finishIdx = startIdx + 12;
    }
    setPagination(users.slice(startIdx, finishIdx));
    if (users.length > 0 && users[0].id !== 1) {
      leftButton.current.classList.add(
        "text-blue-700",
        "cursor-pointer",
        "transform",
        "duration-300",
        "hover:-translate-x-1"
      );
    } else if (users.length > 0 && users[0].id === 1) {
      leftButton.current.classList.remove(
        "text-blue-700",
        "cursor-pointer",
        "transform",
        "duration-300",
        "hover:-translate-x-1"
      );
    }
    let array = [...prevIdx];
    if (users.length > 0) {
      array.push(users[users.length - 1].id);
    }
    setPrevIdx(array);
  }, [users, idx]);

  const sendId = (goto) => {
    if (users.length > 0) {
      if (goto === "back") {
        changePage(prevIdx[realNextPage - 1])
          .then((res) => {
            if (realNextPage > 0) {
              setRealNextPage(realNextPage - 1);
            }
          })
          .catch((err) => console.log(err));
      }
      if (goto === "next") {
        changePage(users[users.length - 1].id)
          .then((res) => {
            setRealNextPage(realNextPage + 1);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const pages = () => {
    let pages = [];
    for (let i = 0; i < 8; i++) {
      pages.push(i);
    }
    return pages;
  };

  const activeStyle = useCallback(
    (currentPage) => {
      if (currentPage === idx) {
        return {
          color: "#1D4ED8",
        };
      }
    },
    [idx]
  );

  return (
    <>
      {users.length === 0 && (
        <div className="w-full" style={{ height: "45vh" }}></div>
      )}
      {users.length > 0 && (
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 pt-12">
          {pagination.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}
      <div className="w-full flex">
        <div className="m-auto w-max flex justify-evenly items-center text-gray-400">
          <div className="mr-4" ref={leftButton} onClick={() => sendId("back")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </div>
          {pages().map((page) => (
            <div
              key={page}
              onClick={() => setIdx(page)}
              style={activeStyle(page)}
              className="py-2 px-2 xs:px-4 cursor-pointer transform duration-200 hover:text-blue-600 font-roboto-slab font-semibold text-lg"
            >
              {page + 1 + realNextPage * 8}
            </div>
          ))}
          <div
            className="text-blue-700 cursor-pointer transform duration-300 hover:translate-x-1 ml-4"
            onClick={() => sendId("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
