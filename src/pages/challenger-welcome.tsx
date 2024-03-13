import PageContainer from "@/components/utils/page-container";
import { RewardsContext } from "@/contexts/rewards-context";
import { UserContext } from "@/contexts/user-context";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from "react";
import StepFour from "../../public/assets/images/ChallengerWelcome/StepFour.png";
import StepOne from "../../public/assets/images/ChallengerWelcome/StepOne.png";
import StepThree from "../../public/assets/images/ChallengerWelcome/StepThree.png";
import StepTwo from "../../public/assets/images/ChallengerWelcome/StepTwo.png";
import Top from "../../public/assets/images/ChallengerWelcome/Top.png";
import Logo from "../../public/assets/logos/white-logo.svg";
import styles from "../styles/modules/pages/challengerwelcome.module.scss";

function ChallengerWelcome() {
  const router = useRouter();
  sessionStorage.setItem("UserType", "Challenger");

  const [rewardsAvailable, setRewardsAvailable] = useState<boolean>(false);
  const { activeUser } = useContext(UserContext);
  const { rewardsInfo } = useContext(RewardsContext);

  useEffect(() => {
    if (rewardsInfo) {
      for (let i in rewardsInfo) {
        if (rewardsInfo[i].rewardAvailable) {
          setRewardsAvailable(true);
          break;
        }
      }
    }
  },[rewardsInfo]);

  return (
    <PageContainer>
      <section className={styles.section_1}>
        <Image className={styles.background} src={Top} alt="background" />

        <div className={styles.container}>
          <Image className={styles.logo} src={Logo} alt="8by8 Logo" />
        </div>
      </section>

      <section className={styles.section_2}>
        <h1 className={styles.underline}>Welcome!</h1>

        <p className={styles.content}>
          Closing the voter registration gap has to be a community effort, so
          we&apos;re asking everyone to join us in taking the
          #8by8Challenge—register 8 friends to register to vote in 8 days!
        </p>

        <button
          type="button"
          className={styles.get_started_btn}
          onClick={() => router.push("/signup")}
        >
          Get Started
        </button>

        {!activeUser && (
          <p className={styles.signin_line}>
            Already have an account?{" "}
            <Link href="/signin">
              Sign in
            </Link>
          </p>
        )}

        <Link className={styles.teal_link} href="/why8by8">
          See why others are doing it
        </Link>
      </section>

      <section className={styles.content_3}>
        <h2 className={styles.underline}>Here&apos;s How it Works</h2>

        <h3 className={styles.step_header}>1. Sign Up</h3>
        <p className={styles.step_text}>
          Sign up with your name and email address to get started.
        </p>
        <Image src={StepOne} alt="sign up" className={styles.image} />

        <h3 className={styles.step_header}>2. Invite your friends</h3>
        <p className={styles.step_text}>
          Get 8 friends via social media or messaging apps to join your
          challenge.
        </p>
        <Image src={StepTwo} alt="invite your friends" className={styles.image} />

        <h3 className={styles.step_header}>3. Friends take action</h3>
        <p className={styles.step_text}>
          Your friends can support your challenge by taking 1 of 3 actions:
          register to vote, set up election reminders, or take the challenge
          themselves. You&apos;ll earn 1 badge per friend who takes action!
        </p>
        <Image src={StepThree} alt="friends take action" className={styles.image} />

        <h3 className={styles.step_header}>4. Win the challenge, get a reward!</h3>
        <p className={styles.step_text}>
          {rewardsAvailable ?
          "When all 8 of your friends took action in your challenge within 8 days, and you win! Then select and enjoy a reward from one of our amazing partners." :
          "When you get 8 badges in 8 days, you win the challenge! Most importantly, you helped the community move closer to greater AAPI representation!"}
        </p>
        <Image src={StepFour} alt="earn 8 badges in 8 days" className={styles.image} />

        <button
          type="button"
          className={styles.get_started_btn}
          onClick={() => router.push("/signup")}
        >
          Get Started
        </button>

        {!activeUser && (
          <p className={styles.signin_line}>
            Already have an account?{" "}
            <Link className={styles.signin_link_black} href="/signin">
              Sign in
            </Link>
          </p>
        )}
      </section>
    </PageContainer>
  );
}

export default ChallengerWelcome;
