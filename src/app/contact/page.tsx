import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/contact1.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Contact for any queries</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <span>+91 7904411907</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <span>pramadeish.sm.cse.b@gmail.com</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
