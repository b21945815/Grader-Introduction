import { Link, useNavigate } from "react-router-dom";

function Button({
  children,
  color = "",
  type = "plain",
  disabled = false,
  to,
  onClick,
  extra_format = "",
  toggle_target,
  title,
}) {
  const navigate = useNavigate();
  const circle =
    "me-2 inline-flex items-center rounded-full bg-blue-700 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ";
  const square =
    "h-10 w-10 rounded-lg border text-center items-center justify-center flex ";
  const large =
    "rounded-lg shadow-sm mb-2 text-center border-none font-normal text-[1.8rem] py-2.5 px-28 ";
  const base =
    "rounded-lg shadow-sm mb-2 text-center border-none font-normal text-[1.6rem] py-2 px-16 ";
  const small_base = "rounded px-4 py-2 font-bold ";
  const small =
    "rounded-lg  text-center border-none font-normal text-[0.8rem] py-1 px-3 ";
  const plain = "";
  const link = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  const styles = {
    circle: circle + " " + extra_format,
    square: square + color + " " + extra_format,
    large: large + color + " " + extra_format,
    base: base + color + " " + extra_format,
    small_base: small_base + color + " " + extra_format,
    small: small + color + " " + extra_format,
    plain: plain + color + " " + extra_format,
    link: link + " " + extra_format,
  };
  if (toggle_target)
    return (
      <button
        title={title}
        className={styles[type]}
        disabled={disabled}
        onClick={() => toggle_target((toggle) => !toggle)}
      >
        {children}
      </button>
    );
  if (to === "-1")
    return (
      <button
        title={title}
        className={styles[type]}
        disabled={disabled}
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );
  if (to) {
    var className = styles[type] + " ";
    if (disabled) className = className + "pointer-events-none";
    return (
      <Link to={to} className={className} title={title}>
        {children}
      </Link>
    );
  }
  if (onClick)
    return (
      <button
        title={title}
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button title={title} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
