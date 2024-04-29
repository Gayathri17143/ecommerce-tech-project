const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns" style={{margin:"10px",border:"1px solid #ccc"}}>
      {title}
    </button>
  );
};

export default Button;
