import styles from "../style";
import SignUp from "./SignUp";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-20`}
      >
        <div className="flex flex-row items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
            <span className="text-gradient">InternQuest</span>{" "}
            <br className="sm:block hidden" />{" "}
            <span
              className="font-alexBrush font-thin"
              style={{ fontSize: "40px" }}
            >
              {" "}
              ...unlock a world of internship <br /> possibilities{" "}
            </span>
          </h1>
        </div>

        <div className=" flex-col items-center ss:flex hidden md:mr-4 mr-0">
          <SignUp />
        </div>
      </div>
    </section>
  );
};

export default Hero;
