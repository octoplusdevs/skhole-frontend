const ValueItem = ({ value, className }: { value: number, className?: string }) => {
  return (
    <div className={`bg-black rounded-full w-full max-w-[41px] h-[41px] flex justify-center items-center ${className ? className : 'sm:max-w-[53px] sm:h-[51px] lg:max-w-[63px] lg:h-[61px]'}`}>
      <h2 className={`font-semibold text-[18px] ${className ? 'text-[18px]' : 'sm:text-[20px] lg:text-[24px]'}`}>
        {value}
      </h2>
    </div>
  );
};

export { ValueItem };
