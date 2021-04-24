import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import RepoContainer from "../components/RepoContainer";
import Footer from "../components/Footer";
function DetailPage(props) {
  const { history } = props;
  const [data, setData] = useState();
  useEffect(() => {
    setData(history.location.state.data || history.location.state.user);
  }, []);
  return (
    <>
      {data && (
        <div className="w-full bg-indigo-100 min-h-screen">
          <Navbar />
          <div className="w-full flex flex-col justify-center items-center md:flex-row mt-10 px-4">
            <Bio data={data} />
            <RepoContainer url={data.repos_url} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
export default DetailPage;
