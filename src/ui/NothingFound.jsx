export default function NothingFound({ children }) {
  return (
    <div className="my-10 h-screen px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl  font-semibold text-grey-500 dark:text-grey-500-dark md:text-3xl">
        {children}
      </h1>
    </div>
  );
}
