import {
  illustration,
  avatar_ali,
  avatar_anisha,
  avatar_richard,
  avatar_shanai,
} from "../assets";
import { styles } from "../styles";
function Content() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-7 content">
        <div className="px-6 mx-6">
          {" "}
          <h1 className="font-bold text-5xl pb-5 dark-blue">
            Bring everyone together to build better products.
          </h1>
          <p className={`${styles.subText}pb-5 w-2/3`}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.{" "}
          </p>
          <div className={`${styles.button}`}> Get Started</div>
        </div>
        <div className="px-6 mx-6">
          <img src={illustration} alt="illustration" />
        </div>
        <div className="px-6 mx-6">
          <h1 className="text-3xl font-bolded pb-6 dark-blue">
            What’s different about Manage?
          </h1>
          <p className={`${styles.subText}`}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className=" px-6 mx-6 flex flex-col space-between">
          <div className="flex ">
            <div className="pr-10">
              <div className=" bright-red rounded-2xl py-1 px-5 text-white">
                01
              </div>{" "}
            </div>
            <div className="flex-grow-0 pb-7">
              <div className="font-bolded pt-1 pb-3 dark-blue ">
                Track company-wide progress
              </div>
              <div className={`${styles.subText}`}>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="pr-10">
              <div className=" bright-red rounded-2xl py-1 px-5 text-white">
                02
              </div>{" "}
            </div>
            <div className="flex-grow-0 pb-7">
              <div className="font-bolded pt-1 pb-3 dark-blue">
                {" "}
                Advanced built-in reports
              </div>
              <div className={`${styles.subText}`}>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="pr-10">
              <div className=" bright-red rounded-2xl py-1 px-5 text-white">
                03
              </div>{" "}
            </div>
            <div className="flex-grow-0 pb-7">
              <div className="font-bolded pt-1 pb-3 dark-blue">
                {" "}
                Everything you need in one place
              </div>
              <div className={`${styles.subText}`}>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
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
