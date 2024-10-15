import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <h2 className="text-4xl text-red-700">Nuxt Error page</h2>
        <div className="text-center mt-8">
          <Link
            to="/"
            className="border p-3 rounded-lg bg-orange-600 text-white"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
