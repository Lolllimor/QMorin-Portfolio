export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mr-[clamp(0.5rem,6vw,5rem)]">{children}</div>;
}
