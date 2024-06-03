export default function ButtonIcon({ children, onClick }) {
  return (
    <button
      className="flex h-full w-full flex-shrink-0 items-center rounded-[5px] bg-transparent p-[0.6rem] text-brand-600 transition-all duration-[0.2s] hover:bg-grey-100 dark:hover:bg-grey-100-dark"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
