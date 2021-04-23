import axios from "axios";
import { useState, useEffect } from "react";

function Card(props) {
  const { user } = props;
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user.login}`, {
        headers: {
          accept: "application/vnd.github.v3+json",
        },
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [user]);
  return (
    <>
      {!data && (
        <div className="group m-auto h-56 w-56 shadow-lg rounded-lg hover:shadow-xl transform duration-200 flex flex-col items-center cursor-pointer overflow-y-hidden">
          <div className="w-full h-full rounded-lg">
            <img
              alt="profile picture"
              className="absolute rounded-lg w-full h-full object-contain transform duration-500 delay-200 group-hover:-translate-y-2"
              src={user.avatar_url}
            />
            <div className="absolute rounded-lg duration-500 group-hover:opacity-0 bg-gradient-to-b from-transparent to-gray-700 opacity-30 w-full h-full"></div>
            <div className="absolute rounded-lg duration-300 opacity-0 group-hover:opacity-40 bg-gray-800 w-full h-full"></div>
          </div>
          <div className="w-full text-center z-10 transform duration-200 delay-100 translate-y-10 group-hover:translate-y-14 group-hover:opacity-0">
            <div className="font-montserrat text-white font-semibold">
              {user.login}
            </div>
          </div>
          <div className="bg-white w-full z-10 py-2 text-center rounded-b-lg transform duration-700 delay-100 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="font-montserrat text text-gray-500 font-semibold text-sm">
              {user.login}
            </div>
            <div className="font-roboto-slab text-gray-400 text-xs">
              {user.login}
            </div>
          </div>
        </div>
      )}
      {data && (
        <div className="group m-auto h-56 w-56 shadow-lg rounded-lg hover:shadow-xl transform duration-200 flex flex-col items-center cursor-pointer overflow-y-hidden">
          <div className="w-full h-full rounded-lg">
            <img
              alt="profile picture"
              className="absolute rounded-lg w-full h-full object-contain transform duration-500 delay-200 group-hover:-translate-y-2"
              src={user.avatar_url}
            />
            <div className="absolute rounded-lg duration-500 group-hover:opacity-0 bg-gradient-to-b from-transparent to-gray-700 opacity-30 w-full h-full"></div>
            <div className="absolute rounded-lg duration-300 opacity-0 group-hover:opacity-40 bg-gray-800 w-full h-full"></div>
          </div>
          <div className="w-full text-center z-10 transform duration-200 delay-100 translate-y-10 group-hover:translate-y-14 group-hover:opacity-0">
            <div className="font-montserrat text-white font-semibold">
              {data.name ? `${data.name}` : `${user.login}`}
            </div>
          </div>
          <div className="bg-white w-full z-10 py-2 text-center rounded-b-lg transform duration-700 delay-100 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="font-montserrat text text-gray-500 font-semibold text-sm">
              {data.name ? `${data.name}` : `${user.login}`}
            </div>
            <div className="font-roboto-slab text-gray-400 text-xs">
              {user.login}
            </div>
          </div>
          <div className="absolute z-10 w-full flex justify-center top-1/2 transform delay-300 duration-500 -translate-y-1/3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2">
            <div className="grid grid-cols-3 w-11/12">
              <div className="flex-col justify-center text-center text-xs self-center">
                <div className="font-roboto-slab font-semibold text-white">
                  {data.following}
                </div>
                <div className="font-montserrat font-semibold text-white">
                  following
                </div>
              </div>
              <div className="flex-col justify-center text-center text-xs">
                <div className="font-roboto-slab font-semibold text-white">
                  {data.followers}
                </div>
                <div className="font-montserrat font-semibold  text-white">
                  followers
                </div>
              </div>
              <div className="flex-col justify-center text-center text-xs">
                <div className="font-roboto-slab font-semibold text-white">
                  {data.public_repos}
                </div>
                <div className="font-montserrat font-semibold text-white">
                  repos
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Card;
