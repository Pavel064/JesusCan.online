function Button({ label, onClick, btnStyle }) {
  const {
    width = "208px",
    height = "88px",
    background = "none",
  } = btnStyle || {};

  const buttonStyle = {
    minWidth: width,
    minHeight: height,
    background,
  };

  return (
    <button className="neumorphic-button" onClick={onClick} style={buttonStyle}>
      <span className="text-base font-semibold">{label}</span>
    </button>
  );
}

export default Button;
