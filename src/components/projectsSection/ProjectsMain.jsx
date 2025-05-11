import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "SintexWebPage",
    year: "Mar2022",
    align: "right",
    image: "/images/website-img-1.jpg", //  Corrected path
    link: "https://coding-enjoy154.github.io/SintexwebPage/",
  },
  {
    name: "QuickForecast",
    year: "Nov2024",
    align: "left",
    image: "/images/website-img-2.webp", //  Corrected path
    link: "https://weathers-snowy.vercel.app/",
  },
  {
    name: "Todo list",
    year: "feb2022",
    align: "right",
    image: "/images/todo.png", // Corrected path
    link: "https://donesright.netlify.app/",
  },
  {
    name: "E-commerce",
    year: "March2025",
    align: "left",
    image: "/images/OIP.jpeg", //  Corrected path
    link: "https://shopping-weld-five.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ Pass the link prop here
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
