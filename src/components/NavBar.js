import { logo } from "../assets/index";
import { styles } from "../styles";
function NavBar() {
  return (
    <div className="p-2 flex justify-between">
      <img className="w-[10%] h-[10%]" src={logo} alt="logo" />
      <div className=" w-1/3 pl-6 flex flex-row justify-around">
        <div className="nav-bar-text font-bolded">Pricing</div>
        <div className="nav-bar-text font-bolded">Product</div>
        <div className="nav-bar-text font-bolded">About Us</div>
        <div className="nav-bar-text font-bolded">Careers</div>
        <div className="nav-bar-text font-bolded">Community</div>
      </div>
      <div className={` my-0 ${styles.button} `}> Get Started</div>
    </div>
  );
}

export default NavBar;
