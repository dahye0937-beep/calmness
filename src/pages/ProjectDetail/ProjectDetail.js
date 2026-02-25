import "./ProjectDetail.scss";
import STAY from "../../assets/images/projects/stay.png";
import logo1 from "../../assets/images/projects/stay-logo.png";
import apt from "../../assets/images/projects/apt.png";
import store from "../../assets/images/projects/store.png";
import admin from "../../assets/images/projects/admin.png";
import StayFlow from "../../assets/images/projects/stay-flow.png";

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
            입주민·사업자·관리자· 역할 기반 UI와 주차 현황·차량 등록 기능을
            중심으로, <br />
            Supabase를 활용해 실제 서비스 흐름을 구현한 주차 관리 시스템
            프로젝트입니다.
          </p>
        </div>
        {/* 프로젝트 소개 */}
        <div className="detail-main">
          <div className="detail-overview">
            <a
              href="https://github.com/dahye0937-beep/stay-main.git"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <h2 className="project-title">STAY</h2>
            </a>
            <p className="project-subtitle">
              주차 상황을 실시간으로 관리하는 <br />
              역할 기반 주차 관리 웹 서비스
            </p>
          </div>
          {/* 목업 이미지 */}
          <div className="detail-visual">
            <a
              href="https://dahye0937-beep.github.io/stay-main/"
              target="_blank"
              rel="noreferrer"
            >
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
              <p>
                '머무르다' 라는 의미와
                <br />
                지속적인 거주, 공간 단위 관리의 개념을 담은 이름입니다.
              </p>
              <p>
                단순 주차장이 아닌 하나의 생활 공간으로서 주차장을 관리·운영
                <br />
                하는 통합 주차 관리 플랫폼을 목표로 했습니다.
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* color */}
        <div className="detail-block">
          <h3> Color </h3>
          <div className="color-area">
            <div className="color-group">
              {[
                { name: "Main-1", hex: "#423665" },
                { name: "Sub-1", hex: "#C5C3D4" },
                { name: "Main-2", hex: "#A295C7" },
              ].map((color, idx) => (
                <div className="color-item" key={idx}>
                  <div
                    className="color-box"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="hover-hex">{color.hex}</span>
                  </div>
                  <span className="color-name">{color.name}</span>
                </div>
              ))}
            </div>
            {/* Orange Group */}
            <div className="color-group">
              {[
                { name: "Main-2", hex: "#FF7C1F" },
                { name: "Main-2-hover", hex: "#D0600F" },
              ].map((color, idx) => (
                <div className="color-item" key={idx}>
                  <div
                    className="color-box"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="hover-hex">{color.hex}</span>
                  </div>
                  <span className="color-name">{color.name}</span>
                </div>
              ))}
            </div>
            {/* Green Group */}
            <div className="color-group">
              {[
                { name: "Main-3", hex: "#5BB299" },
                { name: "Main-3-hover", hex: "#45A388" },
              ].map((color, idx) => (
                <div className="color-item" key={idx}>
                  <div
                    className="color-box"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="hover-hex">{color.hex}</span>
                  </div>
                  <span className="color-name">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        {/* UX Startegy */}
        <div className="detail-block">
          <h3> UX Startegy </h3>
          <div className="ux-area">
            <ul className="ux-text">
              <li>
                <strong>Role-based UI</strong>
                <p>
                  사용자 역할에 따라 화면과 기능을 분리해 <br />
                  불필요한 정보 노출을 최소화했습니다.
                </p>
              </li>
              <li>
                <strong>Clear Status Feedback</strong>
                <p>
                  색상과 UI 요소를 활용해 주차 상태를
                  <br />
                  직관적으로 인지할 수 있도록 구성했습니다.
                </p>
              </li>
              <li>
                <strong>Information Priority</strong>
                <p>
                  주차 현황 정보를 화면 상단에 배치해
                  <br />
                  사용자가 빠르게 상황을 파악할 수 있도록 설계했습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        {/* User Context */}
        <div className="detail-block">
          <h3>User Context</h3>
          <div className="user-area">
            {/* 입주민 */}
            <div className="user-item">
              <div className="user-image">
                <img src={apt} alt="입주민 페이지 이미지" />
              </div>
              <div className="user-text">
                <span className="badge resident">입주민</span>
                <ul>
                  <li>방문 차량 등록이 잦아 간단한 등록 절차가 필요</li>
                  <li>귀가 시 주차 가능 여부를 빠르게 확인하고자 함</li>
                </ul>
              </div>
            </div>
            {/* 상가 */}
            <div className="user-item">
              <div className="user-image">
                <img src={store} alt="상가 페이지 이미지" />
              </div>
              <div className="user-text">
                <span className="badge store">상가</span>
                <ul>
                  <li>고객 주차 관련 문의 빈도가 높음</li>
                  <li>주차 할인 및 안내를 빠르게 처리할 필요가 있음</li>
                </ul>
              </div>
            </div>
            {/* 관리자 */}
            <div className="user-item">
              <div className="user-image">
                <img src={admin} alt="관리자 페이지 이미지" />
              </div>
              <div className="user-text">
                <span className="badge admin">관리자</span>
                <ul>
                  <li>단지 전체 주차 현황을 통합 관리</li>
                  <li>승인 요청 및 정산 처리의 효율성이 중요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* User Flow */}
        <div className="detail-block">
          <h3>User Flow</h3>
          <div className="flow-area">
            <img src={StayFlow} alt="stay 사용자 플로우" />
          </div>
        </div>
        <hr />
        {/* Role & Tech Stack */}
        <div className="detail-block">
          <div className="role-stack-container">
            {/* My Role */}
            <div className="role-area">
              <h3 className="sub-title">My Role</h3>
              <ul className="role-list">
                <li>프로젝트 기획 / 와이어프레임 담당</li>
                <li>입주민 / 상가 마이페이지 구현</li>
              </ul>
            </div>
            {/* Tech Stack */}
            <div className="stack-area">
              <h3 className="sub-title">Tech Stack</h3>
              <ul className="stack-list">
                <li>JavaScript</li>
                <li>React·js</li>
                <li>Scss / Sass</li>
                <li>Git / GitHub</li>
                <li>GSAP</li>
                <li>Photoshop / Illustrator</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        {/* Trouble Shooting */}
        <div className="detail-block">
          <h3 className="section-sub-title">프로젝트를 마무리 하며</h3>
          <div className="trouble-area">
            <h4 className="trouble-title">Trouble Shooting</h4>
            <ul className="trouble-list">
              <li>
                <strong>Q. 어떤 문제가 있었나요?</strong>
                <p>
                  A. DB 데이터 처리 과정에서 구조를 충분히 이해하지 못해 일부
                  기능 구현에 어려움이 있었습니다.
                </p>
              </li>
              <li>
                <strong>Q. 원인은 무엇이었나요?</strong>
                <p>
                  A. 데이터 흐름을 먼저 정리하지 않고 기능 구현부터 진행했던
                  점이 원인이었습니다.
                </p>
              </li>
              <li>
                <strong>Q. 어떻게 해결했나요?</strong>
                <p>
                  A. DB 구조와 데이터 흐름을 다시 정리한 후, 코드를 이해하며
                  하나씩 수정했습니다.
                </p>
              </li>
              <li>
                <strong>Q. 다음에는?</strong>
                <p>
                  A. 개발 전 구조를 먼저 설계하고, AI 도구는 보조 수단으로
                  활용할 계획입니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
