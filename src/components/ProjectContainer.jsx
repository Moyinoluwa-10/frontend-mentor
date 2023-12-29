// react
import PropTypes from "prop-types";
// icons
import { FaGitlab } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { SiFrontendmentor } from "react-icons/si";

const ProjectContainer = ({
  img,
  id,
  title,
  repoLink,
  liveLink,
  challengeLink,
}) => {
  return (
    <div className="w-full border border-transparent rounded-md overflow-hidden transition-all hover:scale-105">
      <div className="w-full overflow-hidden">
        <img src={img} alt={title} className="w-full aspect-video" />
      </div>
      <div className="p-5 md:text-lg bg-white h-full">
        <p className="font-bold text-gray-600 ">{id < 10 ? `0${id}` : id}</p>
        <h3 className="mb-3 font-semibold text-[#0f172a]">{title}</h3>
        <div className="flex flex-wrap items-center gap-4">
          {repoLink && (
            <a href={repoLink} target={"_blank"} rel="noreferrer">
              <FaGitlab className="text-xl text-[#E2432A]" />
            </a>
          )}
          {challengeLink && (
            <a href={challengeLink} target={"_blank"} rel="noreferrer">
              <SiFrontendmentor className="text-xl  text-blue-400" />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target={"_blank"} rel="noreferrer">
              <RiExternalLinkLine className="text-xl text-[#4f4fc1]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectContainer.propTypes = {
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  challengeLink: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default ProjectContainer;
