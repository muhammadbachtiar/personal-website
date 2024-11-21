import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { motion } from 'framer-motion';
import skills from '../../assets/data/skills';
import { Helmet } from 'react-helmet';


const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const Skill = () => {

  return (
    <div className="flex w-full justify-center py-12 px-4">
      <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      animate="show" className="w-full">
        <TabGroup>
          <TabList className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map(({ name, icon }) => (
              <Tab
                key={name}
                className="block  py-3 text-white bg-white/15  rounded-lg shadow data-[selected]:bg-[#838896] data-[hover]:bg-[#606470] data-[selected]:data-[hover]:bg-[#838896] data-[focus]:outline-1 data-[focus]:outline-white transition-all duration-300 ease-in-out transform hover:scale-95 focus:scale-100"
              >
                
                <motion.div 
                initial={{ rotate:180, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }} className='flex justify-center'>
                  {icon}
                </motion.div>
                <h5 class="text-xl font-light tracking-tight text-white">{name}</h5>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-4">
            {skills.map(({ name, description, color }) => (
              <TabPanel key={name} className="flex flex-col items-center justify-center p-3">
                <motion.div 
                initial={{ x: 100 }} animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping:10 }} 
                className='text-center max-w-xl'>
                  <h5 className="text-3xl font-semibold tracking-tight mb-5" style={{ color: color }}>
                    {name}
                  </h5>
                    <p className='block text-white font-light text-xl'>{description}</p>
                </motion.div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </motion.div>
      <Helmet>
        <title>Muhammad Bachtiar's Skills | Personal Website</title>
        <meta name="description" content="Discover the technical skills of Muhammad Bachtiar, a Full-Stack Web Developer. Proficient in modern web technologies. Explore the tools and frameworks I use to create webites" />
        <meta name="keywords" content="Muhammad Bachtiar, Muhammad Bachtiar's Skills, Web Developer, React Developer, Front End Web Developer, Full Stack Developer" />
        <meta name="author" content="Muhammad Bachtiar" />
      </Helmet>
    </div>
  );
};

export default Skill;
