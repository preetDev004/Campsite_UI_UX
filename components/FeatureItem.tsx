import Image from "next/image"

type FIProps = {
    title:string,
    icon:string,
    description:string
}

const FeatureItem = (props:FIProps) => {
  return (
    <li className="flex flex-1 w-full flex-col items-start">
        <div className="rounded-full p-4 lg:p-7 bg-green-50">
            <Image src={props.icon} alt="map" width={28} height={28}/>
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{props.title}</h2>
        <p className="regular-16 mt-5 bg-white/80 lg:mt-[30px] bg-none">{props.description}</p>
    </li>
  )
}

export default FeatureItem