import SimpleFooter from "@/components/home/SimpleFooter";
import "./globals.css";
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "GiveXChange",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        {children}
        <SimpleFooter />
      </body>
    </html>
  );
}
