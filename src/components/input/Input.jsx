import "./input.css";

const Input = ({ placeholderText, ...props }) => {
  return (
    <>
      <input className="inputField" type="text" placeholder={placeholderText} {...props} />
    </>
  )
}

export default Input;