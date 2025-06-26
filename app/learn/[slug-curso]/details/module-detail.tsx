import { Progress } from "@/components/ui/progress";

interface IModuleDetail {
  title: string;
  percentage: number;
}

const ModuleDetail = ({ percentage, title }: IModuleDetail) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-[16px] sm:text-[18px] font-semibold">{title}</span>
      <div className="flex gap-4 items-center">
        <span className="text-[16px] font-semibold">{percentage}%</span>
        <Progress
          value={percentage}
          className="w-full max-w-[297px] bg-black"
        />
      </div>
    </div>
  );
};

export { ModuleDetail };
