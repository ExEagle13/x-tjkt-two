import { Link } from "react-router-dom";

const Btn = ({
  children,
  to,
  onClick,
  variant = "primary",
  size = "md",
  className = "", 
}) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `

if (to) {
    return (
      <Link to={to} className={classes}>{children}</Link>
    )
}

return (
    <button onClick={onClick} className={classes}>{children}</button>
)

}

export default Btn