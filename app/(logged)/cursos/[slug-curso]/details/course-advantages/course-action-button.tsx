import { Button } from "@/components/ui/button";

interface ICourseActionButton {
  isEnrolled: boolean;
  isFree: boolean;
  onClick: () => void;
}

export const CourseActionButton = ({
  isEnrolled,
  isFree,
  onClick,
}: ICourseActionButton) => {
  const label = isFree || isEnrolled ? "Assistir" : "Comprar agora";

  const baseStyle = "py-6 font-semibold text-[16px] sm:text-[18px]";
  const variant =
    isEnrolled || isFree
      ? "bg-[#6850a2] text-white hover:bg-[#6950a2ca] hover:text-white"
      : "bg-primary";

  return (
    <Button className={`${baseStyle} ${variant}`} onClick={onClick}>
      {label}
    </Button>
  );
};
