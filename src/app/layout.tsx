import "./globals.css";

export const metadata = {
  title: "RedirectThing",
  description: "A thing for redirecting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
