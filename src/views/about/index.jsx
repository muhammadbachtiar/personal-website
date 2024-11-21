import { motion } from "framer-motion";
import SocialMedia from "../../atoms/socialMedia";
import paragraph from "../../assets/data/about";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


const About = () => {

  return (
    <div className="w-full bg-primary flex flex-grow justify-center items-center">
      <div className="flex md:flex-row flex-col w-full p-2 md:p-4 items-start space-y-2 md:space-y-6 rounded-lg gap-3 ">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 10 }}
            className="w-full md:w-1/3 flex flex-col justify-center md:mt-8 mx-auto">
            <h2 class="mb-4 text-xl font-semibold leading-none tracking-tight text-[#93DEFF] md:text-base lg:text-xl uppercase">Muhammad Bachtiar</h2>
            <h1 class="mb-4 text-2xl font-bold leading-none tracking-tight text-white md:text-xl lg:text-4xl">Creative and Hyperactive Web Solutions Creator</h1>
            <div className="w-full flex flex-col items-center">
                <img class="w-3/4 h-full object-cover rounded-full" src="/Fhoto.png" alt="Your profile image"></img>
            </div>
            <div className="my-3">
                <button class="flex w-fit items-center px-0 py-2 text-base lg:text-lg font-medium text-[#93DEFF] underline underline-offset-4 bg-[#323643] hover:font-bold hover:border-[#93DEFF] hover:scale-105 transition duration-200 ease-in-out ">
                    My Resume 
                </button>
                <Link to={'/certification'} class="mb-5 flex w-fit items-center px-0 py-2 text-base lg:text-lg font-medium text-[#93DEFF] underline underline-offset-4 bg-[#323643] hover:font-bold hover:border-[#93DEFF] hover:scale-105 transition duration-200 ease-in-out ">
                    My Certifications 
                </Link>
                <SocialMedia/>
            </div>
          </motion.div>
          <div className="w-full md:w-2/3 flex flex-col mx-auto">
            <motion.h2  
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 10 }} 
              class="mb-7 text-lg font-bold leading-none tracking-tight text-white md:text-base lg:text-2xl">Hey there! I'm Muhammad Bachtiar, and here's my journey so far…</motion.h2>
             {paragraph.map((text, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="mb-3 text-lg md:text-base lg:text-2xl text-white"
              >
                {text}
              </motion.p>
            ))}
          </div>
      </div>
      <Helmet>
        <title>About Muhammad Bachtiar | Personal Website</title>
        <meta name="description" content="Discover more about Muhammad Bachtiar, a creative and hyperactive Web Solution Creator. Learn about my journey as a web developer." />
        <meta name="keywords" content="Muhammad Bachtiar, About Muhammad Bachtiar, Web Developer, React Developer, Front End Web Developer, Full Stack Developer" />
        <meta name="author" content="Muhammad Bachtiar" />
      </Helmet>
    </div>
  );
};

export default About;
