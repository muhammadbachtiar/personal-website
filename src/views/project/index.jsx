import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "../../assets/data/project";
import { Helmet } from "react-helmet";

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.10,
      },
    },
  }
  
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, color: "#93DEFF" },
    tap: { scale: 0.8, color: "#93DEFF" }
  };

const Project = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
  <>
    <motion.div  
      initial="hidden"
      animate="show" 
      variants={gridContainerVariants} className="grid grid-flow-row md:grid-flow-col md:grid-rows-6 lg:grid-rows-4 relative gap-10 py-10 px-2 md:px-16 lg:px-24">
      {projects.map(item => (
        <motion.div
          variants={gridSquareVariants}
          whileHover={{scale: 1.05}}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          className={`rounded-lg cursor-pointer ${item.size} bg-white
                      ${selectedId && selectedId !== item.id ? 'opacity-50' : ''}`}
        >
            <motion.img className="h-full max-w-full rounded-lg" src={`${item.image}`} alt=""></motion.img>
          
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && (
         <>
          <motion.div
            layoutId={selectedId}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full lg:w-1/2 rounded-lg shadow-lg z-50 flex flex-col justify-center items-center"
          >
             <img class="max-w-full rounded-lg max-h-96" src={projects.find(item => item.id === selectedId)?.image} alt=""></img>
             <div className="p-5 inset-0 focus:bg-opacity-90 focus:opacity-100 transition-opacity duration-500 flex flex-col justify-start w-full"> 
                <h2 className="mb-2 text-base font-semibold leading-none tracking-tight text-white md:text-lg lg:text-xl">{projects.find(item => item.id === selectedId)?.title}</h2>
                <p class="font-light text-sm text-white">{projects.find(item => item.id === selectedId)?.tool}</p>
                <div className="flex items-center space-x-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-4 h-4" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
                    <a href={projects.find(item => item.id === selectedId)?.link} target="blank" class="font-light text-sm text-white">{projects.find(item => item.id === selectedId)?.link}</a>
                </div>
            </div>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="rounded-lg bg-black bg-opacity-0 mt-2"
              initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-none rounded" fill="white" viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
             </svg>
            </motion.button>
          </motion.div>
         </>
          
        )}
      </AnimatePresence>
      <div className={`fixed inset-0 bg-black ${selectedId ? 'bg-opacity-90' : 'hidden'} z-40 cursor-pointer transition-opacity delay-1000 duration-1000 ease-in-out`} onClick={() => setSelectedId(null)}></div>
    </motion.div>
    <Helmet>
      <title>Muhammad Bachtiar's Projects | Personal Website</title>
      <meta name="description" content="Explore the projects of Muhammad Bachtiar. Discover a diverse range of projects showcasing expertise in modern web technologies like React, Express, Tailwind CSS, and Firebase. Check out my best work here." />
      <meta name="keywords" content="Muhammad Bachtiar, Muhammad Bachtiar's Projects, Web Developer, React Developer, Front End Web Developer, Full Stack Developer" />
      <meta name="author" content="Muhammad Bachtiar" />
    </Helmet>
  </>

  );
};

export default Project;
