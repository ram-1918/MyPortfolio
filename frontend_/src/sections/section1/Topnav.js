import { motion } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import NameAsTitle from "../../components/sections/section1/NameAsTitle";
import NavButtons, { ResumeDownload } from "../../components/sections/section1/NavbarButtons";
import ScrollingBall from "../../components/sections/section1/ScrollingBall";
import ThemeButon from "../../components/sections/section1/ThemeButton";
import { modeContext } from "../../Home";

function Topnav() {
  const {dark, bgColor} = useContext(modeContext);

  const [offset, setOffset] = useState(0);
  let display = useRef(0);
  let prevPos = useRef(0);

  const screenProps = {
    setOffset: setOffset,
    offset: offset,
    prevPos: prevPos,
    display: display,
  };

  return (
    <>
      {/* For mobile and tablets */}
      <motion.div
        id="navbar"
        style={{ top: display.current }}
        className={`${dark ? 'bg-black': 'bg-white'} hidden sticky transition z-30 small:flex mobile:flex tablet:flex flex-col justify-between items-center space-y-1 w-full`}
      >
        <TopnavMobileView {...screenProps} />
      </motion.div>

      {/* For Laptops and Desktops */}
      <motion.div
        transition={{duration:2}} animate={{x:[-100, 0]}} 
        style={{ top: display.current }}
        className={`${dark ? 'bg-black': 'bg-white'} h-full w-full sticky top-0 left-0 right-0 z-30 flex flex-col transition duration-150 ease-linear small:hidden mobile:hidden tablet:hidden`}
      >
        <TopnavDesktopView {...screenProps} />
      </motion.div>
    </>
  );
}

const TopnavMobileView = ({ ...props }) => {
  const {dark} = useContext(modeContext);
  return (
    <>
      <div
        className={`flex flex-row justify-between items-center w-full space-x-4 pl-2 pr-2`}
      >
        <NameAsTitle dark={props.dark} />
        <span className="flex flex-row justify-between items-center space-x-4">
          <ThemeButon {...props} />
          <ResumeDownload />
        </span>
      </div>
      <NavButtons {...props} />
      <ScrollingBall {...props} />
    </>
  );
};

const TopnavDesktopView = ({ ...screenProps }) => {
  return (
    <>
      <div className="flex flex-row w-full justify-between items-center place-items-center space-x-5 px-20 py-2">
        <NameAsTitle />
        <NavButtons />
      </div>
      <ScrollingBall {...screenProps} />
    </>
  );
};

export default Topnav;