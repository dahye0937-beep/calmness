import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, title, desc, role, contribution, path }) => {
  const navigate = useNavigate();

  return (
    <article className="project-card">
      <div className="project-thumb" > 
        <img src={image} alt={title} />
      </div>
      <span className="project-badge">Team Projects</span>
      <h3 className="project-name">{title}</h3>
      <p className="project-summary">{desc}</p>
      <div className="project-role">
        <p>
          <strong>Role</strong> : {role}
        </p>
        <p>
          <strong>Contribution</strong> : {contribution}
        </p>
      </div>
      <button
        className="project-link"
        onClick={() => navigate(path)}
      >
        View Detail →
      </button>
    </article>
  );
};

export default ProjectCard;
