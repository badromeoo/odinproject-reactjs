function Button({ text="Click Me test!",color="red",fontSize="16px",...props}) {
 const buttonStyle={
    color:color,
    fontSize:fontSize,
 }
  return <button {...props} style={buttonStyle}>{text}</button>;
}

export default Button;
