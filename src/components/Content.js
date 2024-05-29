import {
  illustration,
  avatar_ali,
  avatar_anisha,
  avatar_richard,
} from "../assets";
import { styles } from "../styles";
import CarouselCard from "./CarouselCard";
function Content() {
  return (
    <div className="mt-20">
      <div className=" flex flex-col-reverse md:items-center md:grid md:grid-cols-2 gap-7 md:content">
        <div className="text-center md:text-left px-6 mx-6 ">
          {" "}
          <h1 className="  font-bolded  text-3xl pb-5 dark-blue">
            Bring everyone together to build better products.
          </h1>
          <p className={`${styles.subText}pb-5 md:w-2/3`}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.{" "}
          </p>
          <div className="flex md:justify-start justify-center">
            <div className={`${styles.button}`}> Get Started</div>
          </div>
        </div>
        <div className="px-6 md:mx-6">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <div className=" flex flex-col md:grid md:grid-cols-2 gap-7 md:content">
        <div className="px-6 md:mx-6">
          <h1 className="text-3xl font-bolded pb-6 dark-blue text-center">
            What’s different about Manage?
          </h1>
          <p className={`${styles.subText} text-center`}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className=" px-6 md:mx-6 flex flex-col space-between">
          <div className="flex flex-col mb-5">
            <div className="md:pr-10 rounded-l-2xl flex items-center light-red md:bg-transparent">
              <span className=" mr-3 md:mr-10 bright-red  rounded-2xl py-1 px-5 text-white">
                01
              </span>{" "}
              <div className="font-bolded dark-blue  ">
                Track company-wide progress
              </div>
            </div>
            <div className="md:flex-grow-0 md:pb-7 md:ml-24 ml-0 mt-2">
              <div className={`${styles.subText}`}>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <div className="md:pr-10 rounded-l-2xl flex items-center light-red md:bg-transparent">
              <span className=" mr-3 md:mr-10 bright-red  rounded-2xl py-1 px-5 text-white">
                02
              </span>{" "}
              <div className="font-bolded dark-blue  ">
                Advanced built-in reports{" "}
              </div>
            </div>
            <div className="md:flex-grow-0 md:pb-7 md:ml-24 ml-0 mt-2">
              <div className={`${styles.subText}`}>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <div className="md:pr-10 rounded-l-2xl flex items-center light-red md:bg-transparent">
              <span className=" mr-3 md:mr-10 bright-red  rounded-2xl py-1 px-5 text-white">
                03
              </span>{" "}
              <div className="font-bolded dark-blue  ">
                Everything you need in one place
              </div>
            </div>
            <div className="md:flex-grow-0 md:pb-7 md:ml-24 ml-0 mt-2">
              <div className={`${styles.subText}`}>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselCard />

      <div className="my-5 py-5">
        <h1 className="text-center text-3xl font-bolded">What they've said </h1>
        <div className="grid grid-cols-3 gap-4 py-5 my-5">
          <div className="card">
            <img className="profile-pic" src={avatar_anisha} alt="avt" />

            <h2 className="pt-5 pb-3"> Anisha Li </h2>
            <p className={`${styles.subText}`}>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="card">
            <img className="profile-pic" src={avatar_ali} alt="avt" />
            <h2 className="pt-5 pb-3"> Ali Bravo </h2>
            <p className={`${styles.subText}`}>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="card">
            <img className="profile-pic" src={avatar_richard} alt="avt" />
            <h2 className="pt-5 pb-3"> Richard Watts </h2>
            <p className={`${styles.subText}`}>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className={`${styles.button}`}>Get Started</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
