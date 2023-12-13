import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

type CampProps = {
  bgImage: string;
  title: string;
  subTitle: string;
  peopleJoined: number;
};

const CampeSite = (props: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-full md:min-w-[700px] lg:min-w-[1100px] ${props.bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="bg-green-50 rounded-full p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="bold-18 text-white">{props.title}</h1>
            <p className="regular-16 text-white">{props.subTitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL &&
              PEOPLE_URL.map((url, index) => (
                <Image
                  className="inline-block h-10 w-10 rounded-full"
                  key={index}
                  src={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">
            {props.peopleJoined}+ joined
          </p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section className="padding-container 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampeSite
          bgImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined={130}
        />
        <CampeSite
          bgImage="bg-bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined={60}
        />
      </div>
      <div className="flexEnd mt-10 sm:px-6 lg:-mt-36 xl:-mt-60 lg:mr-4 xl:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[480px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl ">
          <h2 className="regular-24 md:regular-32 capitalize text-white">
            <strong>Feeling Lost </strong>And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image src="/quote.svg" alt="quote" width={186} height={219} className="camp-quote"/>
        </div>
      </div>
    </section>
  );
};

export default Camp;
