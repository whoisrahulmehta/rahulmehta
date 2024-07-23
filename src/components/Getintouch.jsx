import React from "react";
import { FaPrayingHands } from "react-icons/fa";

function Getintouch() {
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
    <>
      <section className="getInt w-[100%] sm:h-[95vh] h-[50vh] z-20" data-scroll-section data-scroll-speed=".5">
        <h1 className="uppercase w-[100%] h-[20%] py-[1%] font-[600] leading-1 tracking-tight text-7xl text-center ">
          Get In Touch
        </h1>
        <div className="box w-[60%] h-[80%] text-black ">
          {result === "Sent" ? (
            <form className="sm:w-[60%] w-[100%] sm:h-[100%] h-[70%]" onSubmit={onSubmit}>
              <label htmlFor="fullname">
                <p>
                  Name <span>*</span>
                </p>
                <input type="text" name="fullname" id="fullname" required />
              </label>
              <label htmlFor="fullname">
                <p>
                  Email address<span>*</span>
                </p>
                <input type="text" name="email" id="email" required />
              </label>
              <label htmlFor="subject">
                <p>
                  Subject <span>*</span>
                </p>
                <select name="subject" required>
                  <option>Choose a category </option>
                  <option value="Inquiry" name="inquiry">
                    Inquiry{" "}
                  </option>
                  <option value="Business/Collaborations " name="business">
                    {" "}
                    Business/Collaborations{" "}
                  </option>

                  <option value="General" name="General">
                    {" "}
                    General
                  </option>
                  <option value="General" name="build-together">
                    {" "}
                    Build Together
                  </option>
                  <option value="General" name="others">
                    {" "}
                    Normal Convo
                  </option>
                </select>
              </label>
              <label htmlFor="massage">
                <p>Your massage </p>
                <textarea name="massage" id="massage"></textarea>
              </label>
              <label
                htmlFor="subscribe"
                className="flex flex-row justify-start items-center "
              >
                <input type="checkbox" name="subscribe" id="subscribe" />{" "}
                Subscribe For Updates
              </label>

              <button className="btn-primary  w-[100%]">Submit</button>
            </form>
          ) : (
            <>
              <div className="thanks flex flex-row justify-center items-center w-[60%] h-[100%] ">
                <p className="text-black font-[500] text-4xl ">
                  {result === "Form Submitted Successfully" ? (
                    <>
                    Thanks ! 
                    <FaPrayingHands />  
                      <p>{result}</p>
                    </>
                  ) : (
                    <>{result}</>
                  )}
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Getintouch;
