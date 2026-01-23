import "./ProjectDetail.scss";
import STAY from "../../assets/images/projects/stay.png"


const ProjectDetail = () => {
  return (
    <section className="project-detail">
    {/* 키워드 */}
    <div className="detail-hero">
        <div className="datail-tags">
            <span>#ParkingService</span>
            <span>#RoleBasedUI</span>
            <span>#RealtimeUI</span>
            <span>#UserFlow</span>
        </div>
        <p className="detail-desc">
            입주민·상가·관리자 역할 기반 주차 관리 시스템으로<br />
            Supabase를 활용해 실시간 서비스 흐름을 구현한 팀 프로젝트입니다.
        </p>
    </div>
    {/* 프로젝트 소개 */}
    <div className="detail-body">
    <div className="detail-overview">
        <h2 className="project-title">STAY</h2>
        <p className="project-subtitle">
            주차 상황을 실시간으로 관리하는 <br />
            역할 기반 주차 관리 웹 서비스
        </p>
    </div>
    </div>
    {/* 목업 이미지 */}
    <div className="detail-visual">
        <img src={STAY} alt="stay목업 이미지" />
    </div>
    </section>
  )
}

export default ProjectDetail