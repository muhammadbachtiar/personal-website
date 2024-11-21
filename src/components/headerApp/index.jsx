import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Drawer, Sidebar } from "flowbite-react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { Modal } from 'flowbite-react';
import Confetti from 'react-confetti';
import PuzzleGrid from '../puzzleGrid';

const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.8 }
  };

  const initialPieces = [
    { id: 1, image: "/puzzle/Slice 1.png" },
    { id: 2, image: "/puzzle/Slice 2.png" },
    { id: 3, image: "/puzzle/Slice 3.png" },
    { id: 4, image: "/puzzle/Slice 4.png" },
    { id: 5, image: "/puzzle/Slice 5.png" },
    { id: 6, image: "/puzzle/Slice 6.png" },
    { id: 7, image: "/puzzle/Slice 7.png" },
    { id: 8, image: "/puzzle/Slice 8.png" },
    { id: 9, image: "/puzzle/Slice 9.png" },
  ];

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const isPuzzleComplete = (pieces) => {
    if (pieces.length === 0) {
        return false; 
      }
    return pieces.every((piece, index) => piece.id === initialPieces[index].id);
  };

const HeaderApp = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [secretModal, setOpenSecretModal] = useState(false);
    const handleClose = () => setIsOpen(false);
    const [pieces, setPieces] = useState([]);
    const [showConfeti, setShowConfeti] = useState(false);

    useEffect(() => {
        const shuffledPieces = shuffleArray(initialPieces) || [];
        setPieces(shuffledPieces);
      }, []);
    
      useEffect(() => {
        if (isPuzzleComplete(pieces)) {
          setShowConfeti(true);  
          setOpenSecretModal(false); 
        }
      }, [pieces]);

      useEffect(() => {
        setTimeout(() => {setShowConfeti(false)}, 8000)
      }, [showConfeti]);
      
    const handlePieceMove = (draggedId, targetId) => {
        const draggedIndex = pieces.findIndex((p) => p.id === draggedId);
        const targetIndex = pieces.findIndex((p) => p.id === targetId);
        const updatedPieces = [...pieces];
        [updatedPieces[draggedIndex], updatedPieces[targetIndex]] = [
          updatedPieces[targetIndex],
          updatedPieces[draggedIndex],
        ];
        setPieces(updatedPieces);
      };
    

    return (
       <>
       {showConfeti && <Confetti tweenDuration={1000}/>}
        <nav class="bg-[#323643]">
            <div class="flex flex-wrap items-center justify-between md:justify-center p-4">
                <div className="flex w-2/3 md:w-full lg:w-4/12 items-center space-x-3 rtl:space-x-reverse">
                    {pathname !== "/about" && (
                        <Link to="/home" className="flex w-4/5 md:w-3/5 items-center space-x-3 rtl:space-x-reverse">
                            <img 
                                className="w-full h-full rounded-sm hover:scale-105 hover:shadow-lg transition-transform duration-200" 
                                src="/name-muhammad bachtiar.svg" 
                                alt="logo name"
                                draggable="false"
                            />
                        </Link>
                    )}
                </div>
                <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <motion.button 
                        onClick={() => setIsOpen(true)}
                        type="button" 
                        className="items-center text-base lg:text-xl p-3 font-medium bg-[#606470] text-[#93DEFF] underline underline-offset-4 rounded-md md:hidden"
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                        variants={iconVariants}
                    >
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </motion.button>
                </div>
                <div class="items-center justify-between hidden md:flex md:w-10/12 lg:w-6/12 md:order-1" id="navbar-language">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#323643]">
                        <li>
                            <Link to="/home" class={`block p-2 m-0 text-white rounded-t-md ${pathname === "/home" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" class={`block p-2 m-0 text-white rounded-t-md ${pathname === "/about" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>About</Link>
                        </li>
                        <li>
                            <Link to="/project" class={`block p-2 m-0 text-white rounded-t-md ${pathname === "/project" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Project</Link>
                        </li>
                        <li>
                            <Link to="/skill" class={`block p-2 m-0 text-white rounded-t-md ${pathname === "/skill" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Skill</Link>
                        </li>
                        <li>
                            <Link to="/hireMe" class={`block p-2 m-0 text-white rounded-t-md ${pathname === "/hireMe" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Hire Me</Link>
                        </li>
                    </ul>
                </div>
                <div class="items-center justify-between hidden md:flex md:w-2/12 md:order-1" id="navbar-language">
                    <div className="w-full flex flex-col items-center relative">
                        <motion.img 
                            className="w-11 h-11 object-cover rounded-full z-40 cursor-grab" 
                            src="/Fhoto.png" 
                            alt="Your profile image"
                            drag 
                            dragConstraints={{
                                top: -30,
                                right: 125,
                                bottom: 600,
                                left: -1200
                            }}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                            animate={{ x: [0, -5, 5, -5, 5, 0] }}
                            transition={{
                                duration: 0.6,
                                repeat:  Infinity ,
                                ease: "easeOut",
                                repeatType: "loop",
                                repeatDelay: 35
                            }}
                        />
                        <motion.button 
                            className={`absolute z-10 bg-red-700 cursor-pointer text-white p-2 mt-2 rounded-full block`}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            whileTap="tap"
                            variants={iconVariants}
                            onClick={()=>{setOpenSecretModal(true)}}
                        >
                            <MdOutlineRadioButtonChecked />
                        </motion.button>
                    </div>
                </div>
            </div>
         </nav>
         <Drawer open={isOpen} onClose={handleClose} position='right' className='md:hidden bg-zinc-700'>
            <Drawer.Header titleIcon={() => <></>} />
            <Drawer.Items>
                <Sidebar
                    aria-label="Sidebar with multi-level dropdown example"
                    className="[&>div]:bg-transparent [&>div]:p-0"
                >
                    <div className="flex h-full flex-col justify-between m-5">
                    <div>
                        <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Link to="/home" class={`block p-2 text-white rounded-t-md ${pathname === "/home" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Home</Link>
                            <Link to="/about" class={`block p-2 text-white rounded-t-md ${pathname === "/about" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>About</Link>
                            <Link to="/project" class={`block p-2 text-white rounded-t-md ${pathname === "/project" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Project</Link>
                            <Link to="/skill" class={`block p-2 text-white rounded-t-md ${pathname === "/skill" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Skill</Link>
                            <Link to="/hireMe" class={`block p-2 text-white rounded-t-md ${pathname === "/hireMe" ? "border-b-2" : "border-transparent"} border-[#93DEFF] md:bg-transparent md:hover:text-[#93DEFF] md:hover:bg-[#606470] hover:scale-110 transition duration-200 ease-in-out`}>Hire Me</Link>
                        </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </div>
                    </div>
                </Sidebar>
            </Drawer.Items>
        </Drawer>
        <Modal show={secretModal} onClose={() => setOpenSecretModal(false)}>
            <Modal.Header>Mini Game</Modal.Header>
            <Modal.Body className=' justify-center content-center'>
                <div className="flex justify-center">
                    <div className="w-fit">
                        <PuzzleGrid pieces={pieces} onMovePiece={handlePieceMove} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
       </>
    );
  };
  
  export default HeaderApp;
  