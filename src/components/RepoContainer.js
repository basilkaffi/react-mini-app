import axios from "axios";
import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
function RepoContainer(props) {
  const { url } = props;
  const [datas, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          accept: "application/vnd.github.v3+json",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {datas && (
        <div className=" h-screen overflow-y-scroll hide-scrollbar px-4">
          {datas.map((data) => (
            <RepoCard data={data} />
          ))}
        </div>
      )}
    </>
  );
}

export default RepoContainer;
