import ProjectCard from "./ProjectCard";
import "./Projects.scss";
import stayImg from "../../../assets/images/projects/staymockup.png"
import shopImg from "../../../assets/images/projects/pacekmockup.png"

const Projects = () => {
  return (
    <section className="projects">
      {/* 타이틀 */}
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-desc">
          팀 프로젝트에서는 사용자 흐름과 역할 분담을 중심으로 기획에 참여하고,
          협업을 고려한 구조와 UI 구현에 집중했습니다.
        </p>
      </div>

      {/* 필터 */}
      <ul className="projects-filter">
        <li>All</li>
        <li className="active">Team</li>
        <li>Clone</li>
        <li>Projects</li>
      </ul>

      {/* 카드 리스트 */}
      <div className="project-list">
        <ProjectCard
          image={stayImg}
          title="주차 관리 웹 사이트"
          desc="실시간 데이터를 통한 효율적인 주차 관리 시스템"
          role="UI / Frontend"
          contribution="사용자 흐름 설계, 메인·마이페이지 UI"
          path="/projects/stay"
        />

        <ProjectCard
          image={shopImg}
          title="쇼핑몰 웹 사이트"
          desc="구매 흐름을 방해하지 않는 UI와 구조적인 레이아웃"
          role="UI / Frontend"
          contribution="상품 목록, 장바구니 UI 구현"
          path="/projects/shop"
        />
      </div>
    </section>
  );
};

export default Projects;