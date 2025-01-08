import "./globals.css";

export const metadata = {
  title: "Andai",
  description: "Andai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
