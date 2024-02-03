function Button({ label, onClick, btnStyle }) {
  const {
    width = "105px",
    height = "45px",
    background = "#0D3541",
    border = "4px solid transparent",
  } = btnStyle || {};

  const buttonStyle = {
    minWidth: width,
    minHeight: height,
    background,
    border,
  };

  return (
    <button className="neumorphic-button" onClick={onClick} style={buttonStyle}>
      <span className="text-base">{label}</span>
    </button>
  );
}

export default Button;
