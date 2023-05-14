import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-[#111010]">
        <header className="w-[15%] fixed left-14 h-screen">
          <div className="bg-yellow-200 w-full h-full flex flex-col justify-center items-center">
            <h1>teste</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
