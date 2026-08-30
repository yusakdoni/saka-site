import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/logo-transparent.png"
      alt="SAKA Solusindo"
      width={752}
      height={308}
      priority
      className={className ?? "h-9 w-auto object-contain md:h-10"}
    />
  );
}
