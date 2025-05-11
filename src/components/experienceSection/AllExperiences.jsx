import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Frontend Developer (Project)",
    company: "To do list",
    date: "2023",
    responsibilities: [
"Created a dynamic To-Do List using HTML, CSS, and JavaScript.",
"Enhanced performance by optimizing user interactions and interface responsiveness."

    ],
  },
  {
    job: "Hackathon Winner (Frontend)",
    company: "Parul Hackathon",
    date: "2025",
    responsibilities: [
      "Led frontend development for a virtual fitting room app using HTML5, CSS3, and JavaScript.",
      "Implemented an intuitive user interface for real-time virtual try-on."

    ],
  },
  {
       job: " Employee Management System  (Project)",
    company: "Employee Website",
    date: "2024",
    responsibilities: [
     "Developed a responsive e-commerce website using  HTML CSS ,JS and Spring Boot.",
    "Implemented backend CRUD operations with Spring Boot for  Employee data management."

    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
