import useDarkMode from "../hooks/useDarkMode";
export default function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/turbologonew-dark.png" : "/turbologonew.png";

  return (
    <div className="flex items-center justify-center">
      <img className="h-[6rem] w-auto" src={src} alt="Logo" />
    </div>
  );
}
