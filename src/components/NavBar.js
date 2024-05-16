import { logo } from "../assets/index";
import { styles } from "../styles";
function NavBar() {
  return (
    <div className="p-2 flex justify-between">
      <img className="w-[10%] h-[10%]" src={logo} alt="logo" />
      <div className=" w-1/3 pl-6 flex flex-row justify-around">
        <div className="nav-bar-text">Pricing</div>
        <div>Product</div>
        <div>About Us</div>
        <div>Careers</div>
        <div>Community</div>
      </div>
      <div className={`${styles.button} my-0`}> Get Started</div>
    </div>
  );
}

export default NavBar;
