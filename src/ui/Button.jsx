import { Link } from "react-router-dom";

function Button({
  buttonType = "normal",
  type = "primary",
  to,
  disabled,
  children,
  onClick,
}) {
  const isDelete = buttonType === "delete";

  const base = `text-sm inline-block rounded-full ${
    isDelete ? `bg-red-400` : `bg-yellow-400`
  }   font-semibold 
  uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:${
    isDelete ? `bg-red-300` : `bg-yellow-300`
  }
  focus:${
    isDelete ? `bg-red-300` : `bg-yellow-300`
  } focus:outline-none focus:ring focus:ring-${
    isDelete ? `red-300` : `yellow-300`
  } focus:ring-offset-2 
  disabled:cursor-not-allowed`;

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary: `text-sm inline-block rounded-full border-2 border-stone-300 font-semibold 
    uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 
    focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 
    disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 focus:text-stone-800`,
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs ",
    round: base + " px-2.5 py-1  md:px-3.5 md:py-2 text-sm ",
  };

  const buttonStyle = {
    delete: `text-sm inline-block rounded-full bg-red-400  font-semibold 
    uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-pink-300 
    focus:bg-pink-300 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-offset-2 
    disabled:cursor-not-allowed`,
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles[type]} ${buttonStyle[buttonType]}`}
      >
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={`${styles[type]} `}>
      {children}
    </button>
  );
}

export default Button;
