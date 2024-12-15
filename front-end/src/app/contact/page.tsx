"use client";
import React, { useRef, useState } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [success,setSuccess] = useState('')
       const [error, setError] = useState("");
  const form = useRef<any>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm("service_9avcy43", "template_u15g1b9", form.current, {
        publicKey: "ZTlLtzpPvQzo_ZJaf",
      })
      .then(
        () => {
          setSuccess('Thank you for your message')
        },
        (error) => {
          setError(error.text);
        }
      );
  };
  return (
    <div className="max-w-[1300px] mx-auto h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center mt-14">
        <h1 className="bg-gradient-to-r from-indigo-600 to-purple-500 w-max bg-clip-text text-transparent text-xl md:text-3xl font-bold ">
          Get in Touch
          <div className="w-24 h-2 bg-blue-400"></div>
        </h1>
      </div>
      <div className="h-full w-full flex gap-3 max-w-[1000px] mx-auto mt-6 md:mt-14 ">
        <div className="w-1/2 hidden md:block">
          <div className="">
            <Image
              src={`/contact.png`}
              width={400}
              height={400}
              alt="contact"
            />
          </div>
        </div>
        <div className="w-[90%] mx-auto md:w-1/2 md:mr-2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 md:gap-4"
          >
            <Input type="text" name="name" placeholder="Full Name" required />
            <Input type="email" name="email" placeholder="Email" required />
            <Textarea
              name="message"
              rows={7}
              placeholder="Type your message here."
              required
            />
            <Button>Send</Button>

            {error && <p className="text-red-600 font-semibold">{error}</p>}
            {success && (
              <p className="text-green-600 font-semibold">{success}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
