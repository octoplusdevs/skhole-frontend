const ValueItem = ({ value }: { value: number }) => {
  return (
    <div className="bg-black rounded-full w-full max-w-[43px] h-[41px] sm:max-w-[53px] sm:h-[51px] lg:max-w-[63px] lg:h-[61px] flex justify-center items-center">
      <h2 className="font-semibold text-[18px] sm:text-[20px] lg:text-[24px]">
        {value}
      </h2>
    </div>
  );
};

export { ValueItem };
