import { FaInstagram, FaGithub, FaLinkedin   } from "react-icons/fa";
import { motion } from "framer-motion";
const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, backgroundColor: "#838896", color: "#93DEFF" },
    tap: { scale: 0.8, backgroundColor: "#6B7280", color: "#93DEFF" }
  };

const SocialMedia = () => {
    return (
        <div className="flex flex-row gap-3">
            <motion.a 
                href="https://www.instagram.com/muhammaddbachtiar/"
                target="_blank"
                className="items-center text-base lg:text-xl p-1 font-medium bg-[#606470] text-[#93DEFF] underline underline-offset-4 rounded-md"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                >
                    <FaInstagram size={30} />
            </motion.a>
            <motion.a
                href="https://github.com/muhammadbachtiar"
                target="_blank"
                className="items-center text-base lg:text-xl p-1 font-medium bg-[#606470] text-[#93DEFF] underline underline-offset-4 rounded-md"
                initial="hidden"
                whileHover="hover"
                whileTap="tap"
                animate="visible"
                variants={iconVariants}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                >
                    <FaGithub size={30} />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/muhammad-bachtiar/"
                target="_blank"
                className="items-center text-base lg:text-xl p-1 font-medium bg-[#606470] text-[#93DEFF] underline underline-offset-4 rounded-md"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                >
                <FaLinkedin size={30} />
            </motion.a>
        </div>
    )
}

export default SocialMedia;