import Heading from "../ui/Heading";
import Button from "../ui/Button";
export default function PageNotFound() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-grey-50 p-[4.8rem] dark:bg-grey-50-dark dark:text-grey-700-dark">
      <div className="flex-[0_1_96rem] rounded-md border border-grey-100 bg-grey-0 p-[4.8rem] text-center  dark:border-grey-100-dark dark:bg-grey-0-dark">
        <Heading
          className="mb-[3.2rem] text-grey-800 dark:text-grey-700-dark"
          as="h1"
        >
          The page you are looking for could not be found 😢
        </Heading>
        <Button to="-1">&larr; Go back</Button>
      </div>
    </div>
  );
}
