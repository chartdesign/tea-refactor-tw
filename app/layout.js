import "./globals.css";
import { Poppins } from "next/font/google";
import Context from "./context/Context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Cozy Tea Shop",
  description: "Best Herbal Teas Araound",
};

export default function RootLayout({ children }) {
  return (
    <Context>
      <html lang='en'>
        <body className={poppins.className}>{children}</body>
      </html>
    </Context>
  );
}
