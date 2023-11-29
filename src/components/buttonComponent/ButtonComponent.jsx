import "./buttonComponent.css";

const ButtonComponent = ({ buttonText }) => {
  return (
    <>
      <button className="button">{buttonText}</button>
    </>
  )
}

export default ButtonComponent;