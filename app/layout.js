import { Dancing_Script } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata = {
  title: "SACA - System ADB Cleaner Assistant",
  description: "Interactive Web app to list and uninstall Android packages via ADB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
