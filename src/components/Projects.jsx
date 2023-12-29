import ProjectContainer from "./ProjectContainer";
import { data } from "../utils/data";

const Projects = () => {
  return (
    <section className="px-5 py-20 bg-[#e2e8f0]">
      <div className="mb-12">
        <h2 className="text-center font-semibold text-3xl">Projects</h2>
        <div className="mx-auto w-16 bg-[#60dbfb] h-[2px] mt-[1px]"></div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 content-center justify-center justify-items-center max-w-6xl mx-auto">
        {data.map((item) => (
          <ProjectContainer key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
