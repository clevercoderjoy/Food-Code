import "./inputComponent.css";

const InputComponent = ({ placeholderText }) => {
  return (
    <>
      <input className="inputField" type="text" placeholder={placeholderText} />
    </>
  )
}

export default InputComponent;