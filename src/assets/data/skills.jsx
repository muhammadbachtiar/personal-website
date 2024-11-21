import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaBootstrap  } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiPostgresql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 size={80} color='#EF8327'/>,
      description: 'If people have skeletons to hold them up, then websites have HTML to do the same thing. Tag by tag, I piece my websites together with HTML to bring them life 🦴',
      color: '#EF8327'
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt size={80} color='#3597D4'/>,
      description: 'I used to wonder why women love wearing makeup so much. Then I started learning CSS, and it all made sense. You get it, right? I use CSS to make my websites look good too!',
      color: '#3597D4'
    },
    {
      name: 'Javascript',
      icon: <IoLogoJavascript size={80} color='#EED94C'/>,
      description: 'I remember my first website project. It started with just simple page transitions, but now, with JavaScript, it`s grown up to do much things. 🍼➡️🚀',
      color: '#EED94C'
    },
    {
      name: 'PHP',
      icon: <FaPhp size={80} color='#7377AD'/>,
      description: 'It feels like being in another universe 🌍. When I use PHP, it`s like using HTML and JavaScript to create a dynamic website. "They feel the same, but they`re different',
      color: '#7377AD'
    },
    {
      name: 'React',
      icon: <FaReact size={80} color='#93DEFF'/>,
      description: <>As websites get more dynamic, React helps me organize the UI in a pretty neat structure. With just one <p class="font-mono p-1 inline-block">useState()</p>, the website can "react" to your every wish </>,
      color: '#93DEFF'
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap size={80} color='#8112FA'/>,
      description: 'I make my website look good with Bootstrap. What`s the matter with CSS? Thanks to Bootstrap, I get to sleep longer! 💤',
      color: '#8112FA'
    },
    {
      name: 'Tailwind CSS',
      icon: <RiTailwindCssFill size={80} color='#08B5D4'/>,
      description: 'Sometimes I get triggered when things don`t go the way I want. Is it just me, or do you guys feel the same? Tailwind helps my website look exactly on point, just how I planned it.',
      color: '#08B5D4'
    },
    {
      name: 'Express',
      icon: <SiExpress size={80} color='#EED94C'/>,
      description: 'Just like a restaurant needs staff in the back to prep the food, my website uses Express to deliver dynamic data. I make sure they make the right `request` and `response.`',
      color: '#EED94C'
    },
    {
      name: 'Golang',
      icon: <FaGolang size={80} color='#65D6E3'/>,
      description: 'Another great behind the scenes staff to serve data for my website. 🔧',
      color: '#65D6E3'
    },
    {
      name: 'MySQL',
      icon: <SiMysql size={80} color='#309BB7'/>,
      description: 'I wish I had storage like MySQL. Unlike "mycloset", MySQL actually can store and find what I have much better',
      color: '#309BB7'
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={80} color='#ffffff'/>,
      description: <>Just throw <p class="font-mono p-1 inline-block">WHERE</p> in PostgreSQL, and BOOM!, you can define exactly what you`re looking for and find it!</>,
      color: '#30638E'
    },
    {
      name: 'Firebase',
      icon: <IoLogoFirebase size={80} color='#FDC829'/>,
      description: 'With Firebase, I`ve got my backend, authentication, and database all in one place. It`s like ordering a combo meal!🍔',
      color: '#FDC829'
    },
    
  ]
  
  export default skills