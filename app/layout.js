
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

export const metadata = {
  title: "Bitlink",
  description: "Generate Short Link",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
