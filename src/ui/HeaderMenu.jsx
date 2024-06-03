import DarkModeToggle from "./DarkModeToggle";
function HeaderMenu() {
  return (
    <ul className="flex gap-[0.4rem]">
      <li>
        <DarkModeToggle size="lg" />
      </li>
    </ul>
  );
}

export default HeaderMenu;
