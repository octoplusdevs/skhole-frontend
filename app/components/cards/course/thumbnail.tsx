import Image from "next/image";
import { IThumbnail } from "./interface";
import Link from "next/link";

const Thumbnail = ({ src, alt, className, onClick, target }: IThumbnail) => {
  return (
    <Link
      href={target}
      className={`w-full h-[207px] ${className}`}
      onClick={onClick}
    >
      <Image
        width={334}
        height={207}
        src={src}
        alt={alt ?? src}
        className="w-full h-[207px] rounded-t-xl object-cover"
      />
    </Link>
  );
};

export { Thumbnail };
