import localFont from "next/font/local";
import "./globals.css";
import MainNavigation from "./components/MainNavigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SubNavigation from "./components/SubNavigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Grocery-Store Web App",
  description: "A project on E-commerce using React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header/>

        <MainNavigation/>
        
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
