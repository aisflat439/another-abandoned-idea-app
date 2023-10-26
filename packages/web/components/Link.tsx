import NextLink from "next/link";

export const Link = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
};
