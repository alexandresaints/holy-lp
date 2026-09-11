import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/Pixel/GooglePixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holy - Prospere sua igreja",
  description: "Organize as finanças, os membros e as células da sua igreja em um só lugar e prospere utilizando o Holy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <GoogleTagManager/>
        {children}
      </body>
    </html>
  );
}
