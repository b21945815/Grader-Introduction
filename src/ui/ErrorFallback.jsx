import Button from "./Button";
import Heading from "./Heading";

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log(error);
  return (
    <main className="flex h-[100vh] items-center justify-center bg-grey-50 p-[4.8rem] dark:bg-grey-50-dark">
      <div className="flex-[0_1_96rem] rounded-[7px] border border-solid border-grey-100 bg-grey-0 text-center dark:border-grey-100-dark dark:bg-grey-0-dark">
        <Heading
          className="mb-[1.6rem] text-grey-800 dark:text-grey-700-dark"
          as="h1"
        >
          Something went wrong 😢
        </Heading>
        <p className="mb-[3.2rem] font-['Sono'] text-grey-500 dark:text-grey-500-dark">
          {error.data || error.message}
        </p>
        <Button
          color="text-grey-800 dark:text-grey-700-dark"
          onClick={resetErrorBoundary}
        >
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
