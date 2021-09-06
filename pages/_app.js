import GlobalStyle from "../styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.css"
import { Provider } from "react-redux";
import Store from "../redux/Store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
