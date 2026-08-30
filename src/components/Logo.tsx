import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/logo.png"
      alt="SAKA & Co."
      width={140}
      height={48}
      priority
      className={className ?? "h-8 w-auto md:h-9"}
    />
  );
}
