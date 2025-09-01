import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        {/* <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-3">404</h1>
          <h2 className="text-5xl font-semibold text-gray-700 mb-4 capitalize">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div> */}
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 border-2 uppercase"
              >
                Go Home
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
};
