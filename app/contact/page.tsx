"use client";
import Footer from "@/components/footer";
import { formDataProps } from "@/types/props";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [SubmitBtn, setSubmitBtn] = useState("Submit Message");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const newtoday = new Date().getFullYear;
  const messageID = `#${newtoday}${phoneNumber.slice(-3)}${fullName.slice(
    0,
    3
  )}`;
  const [copied, setCopied] = useState(false);
  const [complete, setComplete] = useState(false);

  const formData: formDataProps = {
    fullName,
    email,
    phoneNumber,
    messageID,
    message,
  };

  // when form is submitted
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Submitting...");
    try {
      const res = await fetch("sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "Aplication/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res.status);
      if (res.status === 200) {
        setSubmitBtn("Message Submitted");
      }
    } catch (error) {
      setSubmitBtn("Try Again");
    }
    console.log("Message Sent 🚀🚀🚀");
  };

  return (
    <div className=" flex flex-col w-full px-6 lg:px-14 mt-20 pb-10 lg:mb-0 ">
      <section className="border-2  border-gray-500">
        <div className="pl-10 pr-10 text-center flex items-center justify-center">
          <h1 className=" pt-6 text-2xl tracking-wide text-gray-300 cursor-pointer">
            TELL ME ABOUT YOUR PROJECT
          </h1>

          <hr className="bg-gray-500  h-0.5 mt-5" />
        </div>
        <div className="pl-10 pr-10 text-center">
          <p className="text-m uppercase pt-5 bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent lg:text-xl">
            Kindly fill out the form and i will get back to you shortly
          </p>
        </div>
        {/* Form goes here */}
        <section className="">
          <form className="text-gray-500" onSubmit={handleOnSubmit}>
            <div className="flex items-center justify-around">
              {/* Name */}
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                className="bg-transparent mt-2 pt-5 pb-5 border-b  text-gray-300 text-2xl outline-none max md:w-[60vw]  lg:text-2xl"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Contact */}
            <div className="flex items-center justify-around">
              <input
                type="number"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                className="bg-transparent mt-8 pt-5 pb-5 border-b  text-gray-300 text-2xl outline-none md:w-[60vw] lg:text-2xl"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            {/* Email Address */}
            <div className="flex items-center justify-around">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent mt-8 pt-5 pb-5 border-b  text-gray-300 text-2xl outline-none md:w-[60vw] lg:text-2xl"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Description */}
            <div className="flex items-center justify-around">
              <textarea
                id="project"
                name="project"
                placeholder="Describe your project"
                className="bg-transparent mt-8 pt-5 pb-5 border-b text-gray-300 text-2xl outline-none md:w-[60vw] lg:text-2xl"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Submit button goes here */}
            <div className="pt-12 flex justify-around items flex-wrap">
              <input
                type="submit"
                value="Submit"
                className="border-4 border-gray-600 pt-2 pb-2 pl-8 pr-8 rounded-3xl text-2xl hover:transform hover:scale-110 transition duration-300 hover:border-gray-200 hover:text-gray-200 mb-4 lg:text-2xl "
              />
              {/* Terms and policies */}
              <p className="text-center px-6 text-xl text-gray-400">
                By Submiting You Have Agreed To Our <br />{" "}
                <span className="text-gray-200">Terms & Agreements </span>
                and <span className="text-gray-200"> Privacy Policy </span>
              </p>
            </div>
          </form>
        </section>
        <div className="px-7 mt-4">
          <Footer />
        </div>
      </section>
    </div>
  );
}

// Media queries for sizing everything on the page
