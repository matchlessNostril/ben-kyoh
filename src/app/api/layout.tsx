export const metadata = {
  title: 'Ben-kyoh API',
};

export default function ApiLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
