import { useNavigate } from "react-router-dom";

function NeumorphicButton({ label, onClick, btnStyle, to }) {
  const navigate = useNavigate();

  const {
    width = "105px",
    height = "45px",
    background = "#0D3541",
    border = "4px solid transparent",
    color = "white",
  } = btnStyle || {};

  const buttonStyle = {
    minWidth: width,
    minHeight: height,
    background,
    border,
    color,
  };

  const handleClick = (e) => {
    if (to) {
      navigate(to);
      e.preventDefault();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="neumorphic-button"
      onClick={handleClick}
      style={buttonStyle}
    >
      <span className="text-base">{label}</span>
    </button>
  );
}

export default NeumorphicButton;
