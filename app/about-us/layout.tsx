export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children} &copy; Next Js </div>;
}
