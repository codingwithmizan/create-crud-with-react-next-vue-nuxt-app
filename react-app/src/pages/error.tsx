import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="m-14">
      <h1 className="text-2xl mb-2">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="my-2">Mohammd mizan</p>
      <p className="mt-4">
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
      <div className="mt-4">
        <button className="border p-2 rounded" onClick={goToHome}>
          Go to Home Page
        </button>
      </div>
    </div>
  );
}
