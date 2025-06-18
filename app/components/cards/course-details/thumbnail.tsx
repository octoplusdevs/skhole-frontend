import Image from "next/image";
import { IThumbnail } from "./interface";

const Thumbnail = ({ src, alt, className }: IThumbnail) => {
  return (
    <div
      className={`w-full max-w-[56px] h-[56px] rounded-3xl ${className} bg-secondary`}
    >
      <Image
        width={56}
        height={56}
        src={src}
        alt={alt ?? src}
        className="w-full max-w-[56px] h-[56px] rounded-2xl object-fill"
      />
    </div>
  );
};

export { Thumbnail };
