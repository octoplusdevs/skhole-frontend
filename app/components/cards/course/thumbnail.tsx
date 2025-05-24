import Image from "next/image";
import { IThumbnail } from "./interface";
import Link from "next/link";

const Thumbnail = ({ src, alt, className, onClick, target }: IThumbnail) => {
  return (
    <Link
      href={target}
      className={`w-full lg:max-w-[334px] h-[207px] rounded-3xl ${className} bg-secondary`}
      onClick={onClick}
    >
      <Image
        width={334}
        height={207}
        src={src}
        alt={alt ?? src}
        className="w-full lg:max-w-[334px] h-[207px] rounded-2xl sm:rounded-3xl object-cover"
      />
    </Link>
  );
};

export { Thumbnail };
