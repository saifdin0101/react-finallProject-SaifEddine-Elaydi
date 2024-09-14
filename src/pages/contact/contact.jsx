import React from "react";
import { Images } from "../../constant";

export const Contact = () => {
  return (
    <div className="pt-[100px]">
      <header className="flex bg-blog bg-cover bg-center text-white font-extrabold text-5xl justify-center items-center h-[220px] bg-blue-50">
        <div>Contact</div>
      </header>
      <div className="mt-10 flex justify-center items-center">
        <div >
          <iframe
            title="Google Maps"
            width="500"
            height="450"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
        <div className="ml-10 h-[600px] w-[700px] flex flex-col justify-start items-start gap-10">
          <div className="text-3xl">Send your Message</div>
          <input
            placeholder="Name"
            className="h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]"
            type="text"
          />
          <input
            placeholder="Search"
            className="h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]"
            type="search"
          />
          <input
            placeholder="Phone"
            className="h-[50px] pl-5 w-[550px] border-[#e6e6e6] border-solid border-[1px]"
            type="tel"
          />
          <textarea
            placeholder="Message"
            className="pl-5 border-[#e6e6e6] border-solid border-[1px]"
            cols={70}
            rows={7}
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    </div>
  );
};
