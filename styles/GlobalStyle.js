import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
body, a , p , h1, h2, h3, h4 ,h5, h6{
  font-family: 'Roboto' sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}

ul , li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a, a:hover {
  color: black;
  text-decoration: none;
}

button , input {
  border: 0;
  outline: 0;
}
.MuiPaper-root  {
  box-shadow:  0 0 0px 1px rgba(0 0 0 / 0.1) !important;
}
`;
export default GlobalStyle;