import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="">
      <Image
        src="/logo.svg"
        alt="Skholé Logo"
        width={100}
        height={100}
        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
        priority
      />
    </Link>
  );
};
