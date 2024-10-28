import { Contact } from '@/src/components/profile/contact';
import { MoreInfo } from '@/src/components/profile/more-info';
import { Name } from '@/src/components/profile/name';

function Profile() {
  return (
    <section className="flex flex-col pt-[clamp(1rem,10vw,6.1rem)] pb-[clamp(1rem,15vw,6.1rem)] ">
      <Name />
      <MoreInfo />
      <Contact />
      <div className=" flex items-center py-[clamp(1rem,15vw,5rem)]">
        <div className="ml-[-2px] w-0 h-0 border-solid border-transparent border-l-white border-t-[clamp(0.3rem,0.8vw,1rem)] border-b-[clamp(0.3rem,0.8vw,1rem)] border-l-[clamp(0.4rem,0.8vw,0.6rem)]"></div>

        <div className=" dashed-line" ></div>
        <div className="w-0 h-0 border-solid border-transparent border-r-white mr-[-1px] border-t-[clamp(0.3rem,0.8vw,1rem)] border-b-[clamp(0.3rem,0.8vw,1rem)] border-r-[clamp(0.4rem,0.8vw,0.6rem)]"></div>
      </div>
    </section>
  );
}

export default Profile;
