import { useHistory } from "react-router-dom";
function Navbar() {
  const history = useHistory();
  return (
    <div className="bg-gray-50 shadow h-12 w-full flex items-center">
      <div
        className="ml-8 mr-auto font-roboto-slab font-bold text-indigo-400 text-3xl cursor-pointer"
        onClick={() => history.push("/")}
      >
        userlist
      </div>
    </div>
  );
}

export default Navbar;
