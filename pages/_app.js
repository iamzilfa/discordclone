import localFont from "@next/font/local";
import Navbar from "../components/Layout/Navbar";
import "../styles/globals.css";


const ggSans = localFont({
  src: [
    {
      path: "../public/assests/fonts/gg-sans-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assests/fonts/gg-sans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assests/fonts/gg-sans-emiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assests/fonts/gg-sans-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assests/fonts/gg-sans-extraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gg-sans",
});
const abcGintoNord = localFont({
  src: {
    path: "../public/assests/fonts/abc-nord.woff2",
    weight: "800",
    style: "normal",
  },
  variable: "--font-abcGintoNord",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={`${ggSans.variable} font-sans`}>
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}
