// Import Globle CSS File
import "./globals.css";

// Import Fonts
import { primary, berlinFont } from "../configs/font"
import Link from "next/link";

// Export Metadata
export const metadata = {
  title: "Social Media Marketing Agency | LeadzExperts",
  discriptions: "LeadzExperts is a Leading Social Media Marketing Agency That Offers Complete SMM Plans For Better Promotion & Advertising on The Platform of Your Choice.",
};

// Export RootLayout
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="./site-ico.png" /></head>
      <body className={`${primary.variable} ${berlinFont.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;