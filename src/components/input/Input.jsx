import "./input.css";

const Input = ({ placeholderText }) => {
  return (
    <>
      <input className="inputField" type="text" placeholder={placeholderText} />
    </>
  )
}

export default Input;