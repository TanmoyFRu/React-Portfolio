import { BiLogoPostgresql } from "react-icons/bi"
import { DiDjango } from "react-icons/di"
import { RiReactjsLine, RiVuejsLine } from "react-icons/ri"
import { SiFastapi, SiMongodb } from "react-icons/si"

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
            <RiVuejsLine className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
            <SiMongodb className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
            <SiFastapi className="text-7xl text-green-500" />
           
        </div>
        <div className="p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="p-4">
            <DiDjango className="text-7xl " />
        </div>
      </div>
    </div>
  )
}

export default Technologies
