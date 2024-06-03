export default function Heading({ children, as = "h1", className = "" }) {
  switch (as) {
    case "h1":
      return (
        <h1 className={`text-5xl/[1.4rem] font-semibold  ${className}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h1 className={`text-[2rem]/[1.4rem] font-semibold ${className}`}>
          {children}
        </h1>
      );

    case "h3":
      return (
        <h1 className={`mb-1 text-xl font-bold ${className}`}>{children}</h1>
      );

    case "h4":
    default:
      return (
        <h1
          className={`text-center text-5xl/[1.4rem] font-semibold  ${className}`}
        >
          {children}
        </h1>
      );
    case "h5":
      return (
        <h1 className={`mb-1 text-lg font-bold ${className}`}>{children}</h1>
      );
  }
}
