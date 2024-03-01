const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10 w-full">
      <h1 className="font-bold text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">
        <i>
          This page is not available. Please check the URL or try again later.
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
