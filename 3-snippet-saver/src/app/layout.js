import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-950 text-white px-5 py-4 md:px-30 md:py-15">
        {children}
      </body>
    </html>
  );
}
