import styles from "../style";

const SignUp = () => (
  <button
    className={`${styles.flexCenter} w-[150px] h-[60px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart}`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gray-100">Join Us</span>
        </p>
      </div>
    </div>
  </button>
);

export default SignUp;
