import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.scss";

export const metadata = {
  title: "Techxot",
  description: "CopyBanner Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        </body>
    </html>
  );
}
