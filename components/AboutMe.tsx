import Image from "next/image"
import { aboutMe } from "@/data"


const AboutMe = () => {
    return (
        <div className="relative w-screen h-[100svh] lg:h-[70svh] bg-gradient-to-b from-gray-900 from-50% to-black flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-25 text-gray-100">
            <div className="relative lg:top-5 w-[275px] h-[275px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] overflow-visible flex justify-center items-center">
                <Image src={aboutMe.image} alt="My Portrait" width={300} height={300} data-speed="1.06" className="object-bottom absolute object-cover h-full w-full mask-clip-content rounded-full mask-radial-at-center mask-radial-from-57% mask-radial-to-70% z-10"/>
                <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] absolute rounded-full bg-radial from-indigo-500/70 via-30% via-indigo-700/40 to-transparent to-65%"></div>
            </div>
            <div className="w-[80%] lg:w-3/10" data-speed="1.06">
                <h2 className="font-montserrat text-4xl md:text-5xl lg:text-5xl font-bold w-fit">Hello!</h2>
                <h3 className="mt-2 font-montserrat text-2xl md:text-3xl lg:text-3xl font-medium w-fit">I&apos;m <span className="font-semibold underline decoration-indigo-300 text-white">{aboutMe.name}</span></h3>
                <p className="mt-2 text-lg md:text-xl lg:text-xl font-sans">{aboutMe.aboutme}</p>
            </div>
        </div>
    )
}

export default AboutMe