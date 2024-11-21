import { Link } from 'react-router-dom';
import { TbMoodConfuzed } from "react-icons/tb";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.8}
  };

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="flex flex-col items-center justify-center text-xl font-bold text-secondary">
          <TbMoodConfuzed size={160} color='#93DEFF' />
        </h1>
        <p className="mt-4 text-2xl text-gray-100">Oops! Page not found</p>
        <p className="mt-2 text-gray-100">
          This is not the page you are looking for...
        </p>
        <p className="mt-2 text-gray-100">
          Go back to { }
          <Link to="/"> 
            <motion.span        
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                className='underline underline-offset-2'>
                    Home
            </motion.span>
          </Link>
        </p>
      </div>
      <Helmet>
        <title>muhammadbachtiar.com{pathname}</title>
      </Helmet>
    </div>
  );
};

export default NotFound;
