export const Contact = () => {
  return (
    <div className="flex h-[clamp(3rem,15vw,12rem)] mt-[clamp(2rem,5vw,5rem)]  ">
      <div className=" bg-[#F0FE6D] rounded-[5px] px-[clamp(0.8rem,1.8vw,1.8rem)] sm:px-[clamp(1rem,2.3vw,3rem)]  flex justify-center sm:rounded-[clamp(0.3rem,3vw,1rem)] items-center flex-1 max-w-[40%]">
        <p className="text-black text-[clamp(0.3rem,1.5vw,0.5rem)] sm:text-[clamp(0.5rem,1.7vw,1.5rem)]  ">
          Design Strategy has been a major part of my journey as an Art
          Director, Graphic Designer & Product Designer
        </p>
      </div>
      <div className="flex  items-center mt-[40px] sm:mt-[clamp(1rem,10vw,7rem)] ">
        <div className="ml-[-2px] w-0 h-0 sm:border-t-[clamp(0.5rem,1vw,1rem)] sm:border-b-[clamp(0.5rem,1vw,1rem)] sm:border-l-[clamp(1rem,1vw,2rem)] border-solid border-transparent border-l-white border-t-[clamp(0.3rem,1vw,0.8rem)] border-b-[clamp(0.3rem,1vw,0.8rem)] border-l-[clamp(0.5rem,1vw,0.8rem)]"></div>

        <div className="border border-white border-dashed h-0 w-[clamp(0.5rem,5vw,2rem)]"></div>
        <div className="w-0 h-0 sm:border-t-[clamp(0.5rem,1vw,1rem)] sm:border-b-[clamp(0.5rem,1vw,1rem)] sm:border-r-[clamp(1rem,1vw,2rem)] border-solid border-transparent border-r-white mr-[-1px] border-t-[clamp(0.3rem,1vw,1rem)] border-b-[clamp(0.3rem,1vw,1rem)] border-r-[clamp(0.5rem,1vw,0.8rem)]"></div>
      </div>
      <div className="flex flex-col justify-between h-full ">
        <div className="sm:h-[clamp(2rem,6vw,5.2rem)] border h-[28px] rounded-[5px] border-white sm:rounded-[clamp(0.2rem,1vw,1rem)] flex items-center justify-center w-fit px-[clamp(0.5rem,1vw,1rem)]">
          <p className="text-[clamp(0.4rem,1.5vw,1.3rem)]">
            My love for movies is also a worthy mention.
          </p>
        </div>
        <div className="sm:h-[clamp(2rem,6vw,5.2rem)] bg-[#2b2c2e] border  h-[28px] rounded-[5px] border-white sm:rounded-[clamp(0.2rem,1vw,1rem)] flex items-center px-[clamp(0.5rem,2vw,1rem)] w-fit">
          <p className="text-[clamp(0.5rem,2vw,1.5rem)]">
            Shoot me an email via{' '}
            <span className="text-[#F0FE6D]">Quadmor@hotmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};
