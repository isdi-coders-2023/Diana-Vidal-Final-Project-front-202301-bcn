import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`
* {
box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Work Sans', sans serif;
  padding: 20px 10px;
  background-color: #0E0F10;
  min-height: 100vh;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

button {
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  border: none;
}

h1,
h2 {
  font-size: 30px;
  margin: 0;
}

.container{
  padding: 20px;
}

:root{
  --toastify-color-error: #EB8B2F;

}
`;

export default GlobalStyles;
