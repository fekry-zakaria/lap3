'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import NavBars from "@/componantes/header/navber";
import Footer from "@/componantes/footer/footer";
import { usePathname } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path= usePathname()
  const hideNavAndFooter = path== '/login';
  
console.log(hideNavAndFooter);
  return (
    <html lang="en">
      <body className={inter.className}>
        { !hideNavAndFooter && <NavBars />}
        <div>
          {children}
        </div>
        {!hideNavAndFooter  && < Footer />}
      </body>
    </html>
  );
}