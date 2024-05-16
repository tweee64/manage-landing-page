import {
  logo,
  icon_facebook,
  icon_youtube,
  icon_instagram,
  icon_pinterest,
  icon_twitter,
} from "../assets";
import React from "react";

import { useState, useRef } from "react";
import { styles } from "../styles";

function Footer() {
  const formRef = useRef();

  const [form, setForm] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  // const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    console.log("handlechange");
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    console.log("validate");
    let valid = true;
    const newErrors = {
      email: "",
    };

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    if (!validateForm()) {
      // setLoading(false);
      return;
    }
    alert("go");
  };
  return (
    <div>
      <div className="bright-red footer-orange flex justify-around p-10">
        <div className="w-1/3 pr-20 ">
          <h1 className=" text-3xl font-bolded text-white ">
            Simplify how your team works today.
          </h1>
        </div>
        <div className="">
          <div className={`${styles.buttonWhite}`}>Get Started</div>{" "}
        </div>
      </div>
      <div className="footer-black text-white text-sm">
        <div>
          <img className="text-white" src={logo} alt="logo" />
          <div className="mt-10 flex ">
            <img className="pr-2" src={icon_facebook} alt="fb" />
            <img className="pr-2" src={icon_youtube} alt="yt" />
            <img className="pr-2" src={icon_twitter} alt="tt" />
            <img className="pr-2" src={icon_pinterest} alt="pinterest" />
            <img className="pr-2" src={icon_instagram} alt="instagram" />
          </div>
        </div>
        <div>
          <p className="p-1">Home</p>
          <p className="p-1">Pricing</p>
          <p className="p-1">Products</p>
          <p className="p-1">About Us</p>
        </div>
        <div>
          {" "}
          <p className="p-1">Careers</p>
          <p className="p-1">Community</p>
          <p className="p-1">Privacy Policy</p>
        </div>
        <div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label>
              <input
                className="rounded-2xl h-8 w-48 text-black text-sm pl-2"
                placeholder="Updates in your inbox…
                "
                value={form.email}
                onChange={handleChange}
                type="text"
                name="email"
              />
            </label>
            <button type="submit" className={`${styles.button} ml-5`}>
              Go
            </button>
            {errors.email && (
              <div className=" pl-2 text-bright-red">{errors.email}</div>
            )}
          </form>
        </div>{" "}
      </div>
    </div>
  );
}

export default Footer;
