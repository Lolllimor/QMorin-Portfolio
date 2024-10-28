
export const Name = () => {
  return (
    <div className="flex gap-[clamp(0.5rem,3vw,2rem)] w-full">
      <div className="flex h-fit items-start bg-white sm:items-center py-[clamp(1.4rem,5vw,2.5rem)] px-[clamp(1.2rem,2vw,2rem)] rounded-[clamp(0.2rem,5vw,2.5rem)] sm:flex-row flex-col-reverse sm:gap-0 gap-3 ">
        <div className="flex sm:flex-col sm:gap-[clamp(0.5rem,5vw,5rem)] flex-col-reverse text-black">
          <p className="sm:text-[clamp(2.5rem,9vw,8rem)] text-[69px] font-semibold leading-[61px] ">
            MORIN
          </p>
          <p className="sm:text-[clamp(2.5rem,9vw,8rem)] text-[60px] font-semibold leading-[71px] ">
            QUADRI
          </p>
        </div>
        <div className="flex ">
          <div className="w-[clamp(9.2rem,22vw,19rem)] h-[clamp(9.2rem,22vw,19rem)] bg-black rounded-full"></div>
          <div className="w-[clamp(9.2rem,22vw,19rem)] h-[clamp(9.2rem,22vw,19rem)] bg-black rounded-full ml-[clamp(-3rem,1vw,-6rem)]"></div>
        </div>
      </div>
      <div className="border border-white sm:rounded-[clamp(0.2rem,1vw,1.5rem)] w-[clamp(1rem,5vw,3rem)] sm:w-10 flex-1 rounded-lg max-[321px]:hidden"></div>
    </div>
  );
}
