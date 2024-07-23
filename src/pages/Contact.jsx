import React, { useState } from "react";
import Social from '../components/Social';

function Contact() {
  const [result, setResult] = React.useState("Sent");
  

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e412f675-c579-4e4f-bfcf-b14799096740");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult("Sent"), 6000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => setResult("Sent"), 6000);
    }
  };

  return (
    <section className="Contacts w-full h-[100%] mt-[7vh] flex sm:flex-row flex-col justify-center items-center gap-[0.5%]">
      <div className="Box sm:w-[49%]  p-[4%] sm:pt-[4%] sm:p-0 sm:ps-[7%] w-full h-[100vh]  mt-[5vh]  sm:mt-0">
        <h1 className="w-[100%] h-[5vh] text-lg text-black font-[700] capitalize ">
          Fill Out the Form and i will get back to you.
        </h1>
        <form
          className="sm:w-[90%] w-[100%] sm:h-[100%] h-[70%]"
          onSubmit={onSubmit}
        >
          <label htmlFor="fname">
            <p>
              First Name <span>*</span>
            </p>
            <input type="text" name="fname" id="fname" required />
          </label>
          <label htmlFor="lname">
            <p>
              Last Name <span>*</span>
            </p>
            <input type="text" name="fullname" id="fullname" />
          </label>
          <label htmlFor="Email">
            <p>
              Email address<span>*</span>
            </p>
            <input type="text" name="email" id="email" required />
          </label>
          <label htmlFor="phone">
            <p>Phone Number</p>
            <input type="phone" name="mobile" id="mobile" />
          </label>
          <label htmlFor="Social">
            <p>Social Link ?</p>
            <input type="text" name="Social" id="Social" />
          </label>
          <label htmlFor="subject">
            <p>
              Subject <span>*</span>
            </p>
            <select name="subject" required>
              <option>Choose a category </option>
              <option value="Inquiry" name="inquiry">
                Inquiry
              </option>
              <option value="Business/Collaborations " name="business">
                Business/Collaborations
              </option>
              <option value="General" name="General">
                General
              </option>
              <option value="General" name="build-together">
                Build Together
              </option>
              <option value="General" name="others">
                Normal Convo
              </option>
              <option value="smother" name="Whatmore">
                Something more
              </option>
            </select>
          </label>
          <label htmlFor="massage">
            <p>Your massage </p>
            <textarea
              className=" resize-none w-[100%] h-[15vh] "
              name="massage"
              id="massage"
            ></textarea>
          </label>
          <label
            htmlFor="subscribe"
            className="flex flex-row justify-start items-center "
          >
            <input type="checkbox" name="subscribe" id="subscribe" /> Subscribe
            For Updates
          </label>

          <button className="btn-primary  w-[100%]">Submit</button>
        </form>
      </div>
      <div className="Box sm:w-[49%]   p-0 sm:p-0 sm:ps-[7%] w-full h-[100vh]  mt-[5vh]  sm:mt-0 relative ">
        <h1 className="z-[9] verTex text-center text-white bg-black sm:text-3xl text-2xl font-[900] sm:left-[4%] left-[0] sm:w-[5%]  w-[7%] h-[100vh] uppercase">
          <span>Or Connect Directly with me On Social media </span>
        </h1>
        <div className="p-[0%} scale-[1] text-[3xl]"> 
        <Social />
        </div>
      </div>
    </section>
  );
}

export default Contact;
