import localFont from "next/font/local";
import "@/style-admin/main.css";
import "../style.css";
import { ProviderStore } from "@/redux/provider";

const cairo = localFont({
  src: "../fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--main-font",
  weight: "100 900",
});

export const metadata = {
  title: "Dashboard",
  description: "admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} h-100`}>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <ProviderStore>
          <main>{children}</main>
        </ProviderStore>

      </body>
    </html>
  );
}
