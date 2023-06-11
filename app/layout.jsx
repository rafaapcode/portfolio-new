import "./globals.css";

export const metadata = {
  title: "rafaapcode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
