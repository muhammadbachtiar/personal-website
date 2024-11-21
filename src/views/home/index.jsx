import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import SocialMedia from "../../atoms/socialMedia";

const Home = () => {

  return (
  <>
    <motion.div
        initial={ {opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
            }} 
        className="w-full bg-primary py-2 md:py-8 my-2 md:my-2 flex flex-grow justify-center items-center border-2 border-[#93DEFF] rounded-md ">
      <div className="flex md:flex-row flex-col w-full p-4 md:p-8 space-y-2 md:space-y-6 rounded-lg ">
        <div className="w-full md:w-1/3 flex flex-col justify-center mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-2xl font-semibold leading-none tracking-tight text-[#93DEFF] md:text-xl lg:text-3xl"
            >
                Hi There !
            </motion.h2>
            <motion.h1 
                className="mb-4 text-4xl font-bold leading-none tracking-tight text-white md:text-3xl lg:text-5xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                I'm Bachtiar, a Web Developer
            </motion.h1>
            <motion.a 
                type="button"
                href="mailto:muhammadbachtiar010902@gmail.com?subject=Reminder%3A%20Important%20Conversation"
                target="_blank"
                className="flex w-fit items-center p-2.5 text-sm lg:text-base font-medium text-white focus:outline-none bg-[#323643] rounded-xl border-2 border-[#93DEFF]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1,   transition: { duration: 0.5, delay: 0.4 } }}
                whileHover={{ scale: 1.05, backgroundColor: "#4A5568", borderColor: "#B0E0FF" }}
                whileTap={{ scale: 0.95, backgroundColor: "#2D3748", borderColor: "#93DEFF" }}
            >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-slate-600 rounded ml-2 px-1" fill="white" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
            </motion.a>
        </div>
          <div className="w-full md:w-2/3 flex flex-col mx-auto">
            <div className="flex md:flex-row flex-col w-full space-y-2 md:space-y-6 rounded-lg ">
                <motion.div  
                    initial={{ y: 0, scale:0 }} animate={{ y: 0, scale:1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-full md:w-1/2 h-full flex flex-col items-center mx-auto"
                >
                    <div className="w-full md:w-3/4 h-full">
                        <div class="group w-full h-[350px] md:w-full md:h-full perspective-800 group" >
                            <div class="backface-hidden w-full h-full transform transition duration-[1s] group-hover:rotate-y-180 rounded-lg absolute t-0 flex items-center justify-center">
                                <img class="w-full h-full object-cover rounded-full" src="https://static.vecteezy.com/system/resources/previews/009/749/656/original/male-profile-mascot-illustration-man-avatar-icon-cartoon-face-business-user-logo-free-vector.jpg" alt="Your profile image"></img>
                            </div> 
                            <div class="backface-hidden w-full h-full transform transition duration-[1s] -rotate-y-180 group-hover:rotate-y-0 rounded-lg absolute t-0 flex items-center justify-center">        
                                <img class="h-full object-cover rounded-full" src="/Fhoto.png" alt="Your profile image"></img>
                            </div>
                        </div> 
                    </div> 
                </motion.div>
                <div className="w-full md:w-1/2 flex flex-col mx-auto">
                    <motion.div
                        className="my-3"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4}}
                        >
                        <motion.h2
                            className=" mb-5 text-base font-semibold leading-none tracking-tight text-white md:text-lg lg:text-xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="font-light text-base md:text-lg lg:text-xl text-white"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            I am creating dynamic and user-friendly web applications in various function using recent technologies.
                        </motion.p>
                        <motion.button
                            className="flex w-fit items-center px-0 py-2.5 text-base lg:text-lg font-medium text-[#93DEFF] underline underline-offset-4 bg-[#323643] hover:font-bold hover:border-[#93DEFF] hover:scale-105 transition duration-200 ease-in-out"
                        >
                            Here's My Resume
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rounded ml-2" fill="#93DEFF" viewBox="0 0 512 512">
                                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                            </svg>
                        </motion.button>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4}}
                        className="my-3">
                        <h2 className="text-base  mb-5 font-semibold leading-none tracking-tight text-white md:text-lg lg:text-xl">Follow Me</h2>
                        <SocialMedia/>
                    </motion.div>
                </div>
            </div>
          </div>
      </div>
      <Helmet>
        <title>Muhammad Bachtiar's Personal Website</title>
        <meta name="description" content="Welcome to my personal website! I'm Muhammad Bachtiar, a creative and dynamic Full-Stack Web Developer. Explore my portfolio to learn more about my experiences, projects, technologies, certifications, and much more. Let's collaborate and build something awesome together!" />
        <meta name="keywords" content="Muhammad Bachtiar, Bachtiar, Muhammad Bachtiar Portfolio Web, Web Developer, React Developer, Front End Web Developer, Full Stack Developer" />
        <meta name="author" content="Muhammad Bachtiar" />
      </Helmet>
    </motion.div>
  </>
  );
};

export default Home;
