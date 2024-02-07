import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-[400px] w-2/5 bg-slate-200 m-auto text-center">
      <h1 className="text-center text-5xl mb-10">
        <span className=" text-green-600">Green</span>Bin
      </h1>
      <Link to="/user" className="text-4xl p-3 bg-slate-400 rounded-md">
        continue with User
      </Link>
      <br /> <br /> <br />
      <Link to="/provider" className="text-4xl p-3 bg-slate-400 rounded-md">
        continue with Provider
      </Link>
    </div>
  );
}

export default App;
