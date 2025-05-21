import Image from "next/image";
import { IThumbnail } from "./interface";

const Thumbnail = ({ src, alt, className }: IThumbnail) => {
  return (
    <div
      className={`w-full lg:max-w-[334px] h-[207px] rounded-3xl ${className} bg-secondary`}
    >
      <Image
        width={334}
        height={207}
        src={src}
        alt={alt ?? src}
        className="w-full lg:max-w-[334px] h-[207px] rounded-2xl sm:rounded-3xl object-cover"
      />
    </div>
  );
};

export { Thumbnail };
