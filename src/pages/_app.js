import { Appwrapper } from "@/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (

    <Appwrapper>
  <Component {...pageProps} />
  </Appwrapper>
);
}
