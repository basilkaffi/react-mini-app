import { useState, useEffect } from "react";
function RepoCard(props) {
  const { data } = props;
  const [date, setDate] = useState();
  useEffect(() => {
    const tgl = new Date(data.created_at);
    const bulan = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    setDate(`${tgl.getDate()} ${bulan[tgl.getMonth()]} ${tgl.getFullYear()}`);
  }, []);
  return (
    <div
      className="my-4 w-full mx-auto bg-white rounded-md shadow-md px-4 py-2 font-roboto-slab text-gray-600"
      style={{ minWidth: "280px" }}
    >
      <div className="font-montserrat text-gray-700 text-lg font-semibold mb-2">
        {data.name}
      </div>
      <div className="my-2 text-sm w-3/4 ml-3">{data.description}</div>
      <div className="flex text-xs ml-3">
        <div>language: {data.language}</div>
        <div className="ml-auto">created at: {date}</div>
      </div>
    </div>
  );
}

export default RepoCard;
