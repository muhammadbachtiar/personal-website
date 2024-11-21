import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import certifications from "../../assets/data/certifications";

const Certification = () => {

  return (
    <motion.div
        initial={ {opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
            }} 
        className="w-full bg-primary py-2 md:py-8 my-2 md:my-2 flex justify-center items-center">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Issuing Organization
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Issue Year
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {certifications.map(item => (
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <a href={`${item.link}`} target="_blank" className=" text-gray-900 hover:text-blue-700 hover:underline hover:underline-offset-2">{item.title}</a>
                              </th>
                              <td class="px-6 py-4">
                                  {item.organization}
                              </td>
                              <td class="px-6 py-4">
                                  {item.year}
                              </td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Helmet>
                <title>Muhammad Bachtiar's Certifications | Personal Website</title>
                <meta name="description" content="Explore the certifications I have earned as a Full-Stack Web Developer here. hese certifications validate my commitment to continuous learning and professional growth." />
                <meta name="keywords" content="Muhammad Bachtiar Certifications, Web Developer Certifications, React Certifications, JavaScript Certifications, Full-Stack Developer Certificates, Professional Development, Technology Expertise, Certified Web Developer" />
                <meta name="author" content="Muhammad Bachtiar" />
            </Helmet>
    </motion.div>
  );
};

export default Certification;
