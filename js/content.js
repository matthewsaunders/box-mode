const styles = `
*,
*:before,
*:after {
  outline: solid 0.5px #db6a7d;
  border: 0;
}
`;
const styleSheet = document.createElement("style");

styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
