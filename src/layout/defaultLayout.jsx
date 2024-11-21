import { useLocation } from 'react-router-dom';
import HeaderApp from '../components/headerApp';
import Home from '../views/home';
import About from '../views/about';
import Project from '../views/project';
import Skill from '../views/skill';
import HireMe from '../views/hireMe';
import Certification from '../views/certification';

const DefaultLayout = () => {

  const { pathname } = useLocation();
  let contentComponent;

  switch (true) {
    case pathname ===  "/":
      contentComponent = <Home />;
      break;
    case pathname ===  "/home":
      contentComponent = <Home />;
      break;
    case pathname.includes("/about"):
      contentComponent = <About />;
      break;
    case pathname.includes("/project"):
      contentComponent = <Project />;
      break;
    case pathname.includes("/skill"):
      contentComponent = <Skill />;
      break;
    case pathname.includes("/hireMe"):
      contentComponent = <HireMe />;
      break;
    case pathname.includes("/certification"):
      contentComponent = <Certification />;
      break;
  }
  
  return (
    <div className='flex flex-wrap min-h-screen'>
        <div className="flex-grow bg-[#323643]">
            <div className='flex flex-col bg-[#323643] py-6 mx-8 md:mx-24 min-h-screen'>
                <HeaderApp/>
                {contentComponent}
            </div>
        </div>
    </div>
  );
};

export default DefaultLayout;