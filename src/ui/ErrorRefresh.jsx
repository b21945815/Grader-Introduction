import Heading from "./Heading";
export default function ErrorRefresh() {
  return (
    <div className="flex h-auto items-center justify-center ">
      <div className="flex-[0_1_96rem] p-[4.8rem] text-center  ">
        <Heading
          className="mb-[3.2rem] text-grey-800 dark:text-grey-700-dark"
          as="h1"
        >
          Please refresh the page
        </Heading>
        <Heading
          className="mb-[3.2rem] text-grey-800 dark:text-grey-700-dark"
          as="h2"
        >
          if the error is not corrected, please contact us.
        </Heading>
      </div>
    </div>
  );
}
