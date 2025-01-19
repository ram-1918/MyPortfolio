import { useContext, useState } from "react";
import { modeContext } from "../../Home";
import { education, experienceTitleContent, ftExperienceData } from "../../components/data";
import DesktopView from "../../components/sections/section4/DesktopView";
import Header from "../../components/Base/Header";
import MobileView from "../../components/sections/section4/MobileView";

const AcademicHeaderDiv = () => {
    const {dark, isScrollDown} = useContext(modeContext);
    return (
        // from-[#EFFFFD] to-[#B7D3DF]
        // ${dark ? 'bg-slate-800':'bg-gradient-to-l from-blue-100 to-blue-100'}
        <div className={`
            ${dark ? 'border-t-0' : ''}
            ${isScrollDown ? 'top-20 mobile:top-36' : 'top-8 mobile:top-20'} 
            border-t sticky left-0 right-0 w-full h-[25%] pt-0 pb-4 z-10`}> 
            <Header dark = {dark} name="Academics & Experience" content={experienceTitleContent} />
        </div>
    )
};

function Academic({...screenProps}) {
    const [isEducation, setIsEducation] = useState(true);
    const {dark} = useContext(modeContext);
    var text = '';
    if(dark){
        text = "#D1D2D3";
    }
    return (
        <div id="experience" className="items-center justify-center w-full h-full pt-10 mb-20 rounded-xl mobile:p-0 small:p-0">
            <AcademicHeaderDiv {...screenProps}  />
            <div className="flex items-center justify-center w-full mb-10">
                <div className="z-20 flex items-center justify-center overflow-hidden border border-purple-600 divide-x-2 divide-purple-600 w-fit rounded-xl">
                    <span onClick={() => setIsEducation(true)} className={`${isEducation ? "bg-purple-600 text-white": "text-purple-600 bg-white"} p-2 text-center w-36 cursor-pointer`}>Academic</span>
                    <span onClick={() => setIsEducation(false)} className={`${isEducation ? "text-purple-600 bg-white": "bg-purple-600 text-white"} p-2 text-center w-36 cursor-pointer`}>Experience</span>
                </div>
            </div>
            <DesktopView title="Education" text={text} data={education}  />
            <DesktopView title="Experience" text={text} data={ftExperienceData} />
            <MobileView title="Education" data={education} />
            <MobileView title="Experience" data={ftExperienceData} />
        </div>
    )
};

export default Academic;