import localFont from "next/font/local";
import "@/style/main.css";
import "./style.css";
import "@/style/swiper-bundle.min.css";
import { ProviderStore } from "@/redux/provider";
import Navbar from "@/components/layouts/navbar";

const cairo = localFont({
  src: "./fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--main-font",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} h-100`}>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <ProviderStore>
          <Navbar />
          <main>{children}</main>
        </ProviderStore>
      </body>
    </html>
  );
}
