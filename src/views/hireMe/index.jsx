import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Toast } from "flowbite-react"
import { FaTelegramPlane } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const HireMe = () => {
  const form = useRef();
  const [showToast, setShowToast] = useState(false);
  const { register, handleSubmit, formState: { errors }} = useForm();

  const sendEmail = () => {
    setShowToast(false)
    
    emailjs.sendForm(
      'service_qyj4d7g',  
      'template_0oipaky', 
      form.current,
      'IqHp4-qMJndR3jC3E'   
    ).then(() => {
      setShowToast(true);
      form.current.reset(); 
    }, (error) => {
      alert(`${error.text}`);
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
      className="w-full bg-primary flex flex-grow justify-center items-center"
    >
      {showToast && (
        <Toast className='fixed top-4 right-4 bg-green-500'>
          <FaTelegramPlane className="h-5 w-5 text-white"/>
          <div className="pl-4 text-white text-sm font-normal">Message sent successfully.</div>
          <Toast.Toggle className='bg-green-500 text-white hover:bg-green-700 hover:text-white' onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
      <div className="flex md:flex-row flex-col w-full p-2 md:p-4 items-start space-y-2 md:space-y-6 rounded-lg gap-3 ">
          <div className="w-full lg:w-2/3 md:px-28 flex flex-col mx-auto">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 10 }}
              class="mb-7 text-base text-center font-bold leading-none tracking-tight text-white md:text-sm lg:text-xl">Let's Build Something Awesome Together!</motion.h2>
            <motion.p 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3,  type: "spring", stiffness: 100, damping: 10 }}
              class="mb-3 text-base font-light md:text-base lg:text-xl text-white">Got an idea?—shoot me a message, and let's start crafting something amazing today. Ready when you are!</motion.p> 
            <motion.form 
              ref={form} onSubmit={handleSubmit(sendEmail)}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              class="w-full my-5"
              noValidate>
                <motion.div variants={itemVariants} class="mb-5">
                    <label for="from_email" class="block mb-2 text-base font-medium text-white">Email</label>
                    <input type="email" name='from_email' 
                      {...register("from_email", {
                      required: "Email required",
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Please insert a valid email",
                      },
                    })} 
                    className={`border-2 bg-[#606470]  ${
                      errors.from_email ? "border-red-600" : "border-[#93DEFF] "
                    } text-white text-sm rounded-lg block w-full p-2.5 hover:border-[#93DEFF] hover:bg-[#707580] focus:border-[#93DEFF] focus:bg-[#707580] focus:ring-2 focus:ring-[#93DEFF] focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400`} placeholder="you@example.com" required></input>
                  {errors.from_email && (
                  <p className="text-red-600 text-sm mt-1">{errors.from_email.message}</p>
                )}
                </motion.div>
                <motion.div variants={itemVariants} class="mb-5">
                    <label for="from_name" class="block mb-2 text-base font-medium text-white">Fullname</label>
                    <input type="text" name='from_name' {...register("from_name", {
                      required: "Fullname required"
                  })} id="base-input" class={`border-2 bg-[#606470]  ${
                    errors.from_name ? "border-red-600" : "border-[#93DEFF] "
                  } text-white text-sm rounded-lg block w-full p-2.5 hover:border-[#93DEFF] hover:bg-[#707580] focus:border-[#93DEFF] focus:bg-[#707580] focus:ring-2 focus:ring-[#93DEFF] focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400`} placeholder="fullname" required></input>
                  {errors.from_name && (
                  <p className="text-red-600 text-sm mt-1">{errors.from_name.message}</p>
                )}
                </motion.div>
                <motion.div variants={itemVariants} class="mb-5">
                    <label for="from_company" class="block mb-2 text-base font-medium text-white">Company Name</label>
                    <input type="text" name='from_company' {...register("from_company", {
                    required: "Company name required"
                  })} id="base-input" class={`border-2 bg-[#606470]  ${
                    errors.from_company ? "border-red-600" : "border-[#93DEFF] "
                  } text-white text-sm rounded-lg block w-full p-2.5 hover:border-[#93DEFF] hover:bg-[#707580] focus:border-[#93DEFF] focus:bg-[#707580] focus:ring-2 focus:ring-[#93DEFF] focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400`} placeholder="company" required></input>
                  {errors.from_company && (
                  <p className="text-red-600 text-sm mt-1">{errors.from_company.message}</p>
                )}
                </motion.div>
                <motion.div variants={itemVariants} class="mb-5">
                    <label for="message" class="block mb-2 text-base font-medium text-white">Add your message or questions</label>
                    <textarea id="message" name='message' {...register("message", {
                    required: "Message required"
                  })} rows="4" class={`border-2 bg-[#606470]  ${
                    errors.message ? "border-red-600" : "border-[#93DEFF] "
                  } text-white text-sm rounded-lg block w-full p-2.5 hover:border-[#93DEFF] hover:bg-[#707580] focus:border-[#93DEFF] focus:bg-[#707580] focus:ring-2 focus:ring-[#93DEFF] focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400`} placeholder="Leave a message..." required></textarea>
                  {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
                </motion.div>
                <motion.button variants={itemVariants} type="submit" value="Send" class="flex w-fit items-center p-2.5 text-sm lg:text-base font-medium text-white focus:outline-none bg-[#323643] rounded-xl border-2 border-[#93DEFF] hover:bg-[#606470] hover:text-[#93DEFF] focus:z-10 focus:ring-2 focus:ring-[#93DEFF] transition duration-200 ease-in-out">
                    Send Email
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-slate-600 rounded ml-2 px-1" fill="white" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </motion.button>
            </motion.form>
          </div>
      </div>
      <Helmet>
        <title>Talk With Muhammad Bachtiar | Personal Website</title>
        <meta name="description" content="Looking to hire a professional Full-Stack Web Developer? Fill out the form or email me at muhammadbachtiar010902@gmail.com. Let's collaborate to build something awesome together!" />
        <meta name="keywords" content="Hire Muhammad Bachtiar, Full-Stack Web Developer, React Developer, Front-End Developer, Back-End Developer, Web Developer for Hire, Contact Muhammad Bachtiar, Work with Muhammad Bachtiar" />
        <meta name="author" content="Muhammad Bachtiar" />
      </Helmet>
    </motion.div>
  );
};

export default HireMe;
