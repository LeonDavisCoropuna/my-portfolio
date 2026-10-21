export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="text-muted-foreground mb-3 font-mono text-xs tracking-widest uppercase">
      <span className="text-foreground/50">{number}</span>
      <span className="mx-2">/</span>
      <span>{children}</span>
    </p>
  );
}
