import "./ProjectDetail.scss";
import STAY from "../../assets/images/projects/stay.png"


const ProjectDetail = () => {
  return (
    <div className="project-detail">
    {/* 키워드 */}
    <section className="detail-intro-view">
    <div className="detail-hero">
        <div className="detail-tags">
            <span>#ParkingService</span>
            <span>#RoleBasedUI</span>
            <span>#RealtimeUI</span>
            <span>#UserFlow</span>
        </div>
        <p className="detail-desc">
            입주민·사업자·관리자· 역할 기반 UI와 주차 현황·차량 등록 기능을 중심으로, <br />
            Supabase를 활용해 실제 서비스 흐름을 구현한 주차 관리 시스템 프로젝트입니다.
        </p>
    </div>
    {/* 프로젝트 소개 */}
    <div className="detail-main">
    <div className="detail-overview">
        <a
            href="https://github.com/dahye0937-beep/stay-main.git"
            target="_blank"
            rel="noreferrer"
            className="project-link">
            <h2 className="project-title">STAY</h2>
        </a>
        <p className="project-subtitle">
            주차 상황을 실시간으로 관리하는 <br />
            역할 기반 주차 관리 웹 서비스
        </p>
    </div>
    {/* 목업 이미지 */}
    <div className="detail-visual">
        <a href="https://dahye0937-beep.github.io/stay-main/" target="_blank" rel="noreferrer">
            <img src={STAY} alt="stay목업 이미지" />
        </a>
    </div>
    </div>
    {/* 하단 상세 정보 */}
    <div className="detail-info">
        <ul className="info-list">
            <li>① 작업 기간 : 2026.01.02 ~ 2026.01.13 (8일)</li>
            <li>② 참여 인원 : 6인 팀 프로젝트</li>
            <li>
                ③ 핵심 구현 포인트 :
                <ul className="point-list">
                    <li>· 역할 기반 사용자 페이지 분리 및 라우팅</li>
                    <li>· 차량 등록·관리 중심의 주차 관리 기능</li>
                    <li>· 실시간 주차 현황 및 UI 반영</li>
                </ul>
            </li>
        </ul>
    </div>
    </section>
    </div>
    )
}

export default ProjectDetail