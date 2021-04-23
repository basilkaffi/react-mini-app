import { useEffect, useRef, useState } from "react";
import Card from "./Card";
function App(props) {
  const { total, users, changePage } = props;
  const [pages, setPages] = useState([]);
  const [fullPage, setFullPage] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const leftButton = useRef();
  const rightButton = useRef();
  useEffect(() => {
    if (users.length > 0 && start !== 0) {
      leftButton.current.classList.add(
        "text-blue-700",
        "cursor-pointer",
        "transform",
        "duration-300",
        "hover:-translate-x-1"
      );
    } else if (users.length > 0 && start === 0) {
      leftButton.current.classList.remove(
        "text-blue-700",
        "cursor-pointer",
        "transform",
        "duration-300",
        "hover:-translate-x-1"
      );
    }
    if (users.length > 0 && end !== Math.ceil(total / 12)) {
      rightButton.current.classList.add(
        "text-blue-700",
        "cursor-pointer",
        "transform",
        "duration-300",
        "hover:translate-x-1"
      );
    } else if (users.length > 0 && end === Math.ceil(total / 12)) {
      rightButton.current.classList.remove(
        "text-blue-700",
        "cursor-pointer",
        "transform",
        "duration-300",
        "hover:translate-x-1"
      );
    }
    let pages = [];
    for (let i = 1; i <= Math.ceil(total / 12); i++) {
      pages.push(i);
    }
    setFullPage(pages);
    let trimPages = pages.slice(start, end);
    setPages(trimPages);
  }, [users]);

  const sendId = (goto) => {
    if (users.length > 0) {
      changePage(goto);
      if (pages[pages.length - 1] === goto && goto < fullPage.length) {
        setStart(start + 1);
        setEnd(end + 1);
        let trimPages = fullPage.slice(start, end);
        setPages(trimPages);
      } else if (pages[0] === goto && goto > 1) {
        setStart(start - 1);
        setEnd(end - 1);
        let trimPages = fullPage.slice(start, end);
        setPages(trimPages);
      }
    }
    if (goto === 1) {
      setStart(0);
      setEnd(8);
      setCurrentPage(1);
    } else if (goto === fullPage.length) {
      setStart(fullPage.length - 8);
      setEnd(fullPage.length);
      setCurrentPage(fullPage.length);
    }
  };

  const activeStyle = (page) => {
    if (users.length > 0) {
      if (currentPage === page) {
        return {
          color: "#1D4ED8",
        };
      }
    }
  };

  return (
    <>
      {users.length === 0 && (
        <div className="w-full" style={{ height: "45vh" }}></div>
      )}
      {users.length > 0 && (
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 pt-12">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}
      <div className="w-full flex">
        <div className="m-auto w-max flex justify-evenly items-center text-gray-400">
          <div className="mr-4" ref={leftButton} onClick={() => sendId(1)}>
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
          {pages.map((page) => (
            <div
              key={page}
              onClick={() => {
                sendId(page);
                setCurrentPage(page);
              }}
              style={activeStyle(page)}
              className="py-2 px-2 xs:px-4 cursor-pointer transform duration-200 hover:text-blue-600 font-roboto-slab font-semibold text-lg"
            >
              {page}
            </div>
          ))}
          <div
            className="mr-4"
            ref={rightButton}
            onClick={() => sendId(fullPage.length)}
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
