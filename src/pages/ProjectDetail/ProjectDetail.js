import "./ProjectDetail.scss";
import STAY from "../../assets/images/projects/stay.png"
import logo1 from"../../assets/images/projects/stay-logo.png"

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
    <section className="detail-section">
        <h2 className="section-title">STAY</h2>
        {/* logo */}
        <div className="detail-block">
            <h3>Logo</h3>
            <div className="logo-area">
                <div className="logo-images">
                    <img src={logo1} alt="stay logo" />
                </div>
                <div className="logo-desc">
                    <p>'머무르다' 라는 의미와<br/>
                    지속적인 거주, 공간 단위 관리의 개념을 담은 이름입니다.</p>
                    <p>단순 주차장이 아닌 하나의 생활 공간으로서 주차장을 관리·운영<br/>
                    하는 통합 주차 관리 플랫폼을 목표로 했습니다.</p>
                </div>
            </div>
        </div>
        {/* color */}
        <div className="detail-block">
            <h3>Color</h3>
            <div className="color-palette">
                <div className="color-item"><span style={{backgroundColor:"#423665"}}></span>Main-1 #423665</div>
                <div className="color-item"><span style={{backgroundColor:"#C5C3D4"}}></span>Sub-1 #C5C3D4</div>
                <div className="color-item"><span style={{backgroundColor:"#A295C7"}}></span>Sub-2 #A295C7</div>
                
                <div className="color-item"><span style={{backgroundColor:"#FF7C1F"}}></span>Main-2 #FF7C1F</div>
                <div className="color-item"><span style={{backgroundColor:"#D0600F"}}></span>Main-2Hover #D0600F</div>

                <div className="color-item"><span style={{backgroundColor:"#5BB299"}}></span>Main-3 #5BB299</div>
                <div className="color-item"><span style={{backgroundColor:"#45A388"}}></span>Main-3Hover #45A388</div>
            </div>
        </div>
        {/* UX Startegy */}
        <div className="detail-block">
            <h3>UX Strategy</h3>
            <div className="ux-grid">
                <ul className="ux-list">
                    <li>
                        Role-based Ul<br />
                        : 사용자 역할에 따라 화면기능과 기능을 분리해<br />
                        불필요한 정보 노출을 최소화 했습니다.
                    </li>
                    <li>
                        Clear Status Feedback<br />
                        : 색상과 UI 요소를 활용해 주차 상태를<br />
                        직관적으로 인지할 수 있도록 구성했습니다.
                    </li>
                    <li>
                        Information Priority<br />
                        : 주차 현황 정보를 화면 상단에 배치해<br/>
                        사용자가 빠르게 상황을 파악할 수 있도록 설계했습니다.
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
    )
}

export default ProjectDetail