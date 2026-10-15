interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex w-full items-center gap-2">
      <h2 className="shrink-0">{title}</h2>
      <hr className="flex-1 border-t border-foreground" />
    </div>
  );
};
