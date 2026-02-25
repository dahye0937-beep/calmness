import "./Shop.scss";
import PACEY from "../../assets/images/projects/pacey.png";

const Shop = () => {
  return (
    <div className="shop">
        {/* 키워드 */}
        <section className="shop-intro-view">
            <div className="shop-hero">
                <div className="shop-tags">
                    <span>#Ecommerce</span>
                    <span>#SportsShoes</span>
                    <span>#InteractionUI</span>
                    <span>#MotionUI</span>
                    <span>#SPA</span>
                </div>
                <p className="shop-desc">
                    기획부터 디자인, 개발까지 직접 참여 하였으며, MockData(JSON)를 활용해 실제 커머스 <br />
                    로직을 구현한 SPA 쇼핑몰 프로젝트 입니다.
                </p>
            </div>
            {/* 프로젝트 소개 */}
            <div className="shop-main">
                <div className="shop-overview">
                    <a
                    href="https://github.com/dahye0937-beep/stance-react.git"
                    target="_blank"
                    rel="noreferrer"
                    className="shop-link"
                    >
                        <h2 className="shop-title">PACEY</h2>
                    </a>
                    <p className="project-subtitle">
                        나만의 페이스로 달리는 러너를<br />
                        위한 니치 쇼핑몰
                    </p>
                </div>
                {/* 목업이미지 */}
                <div className="shop-visual">
                    <a
                    href="https://dahye0937-beep.github.io/stance-react/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <img src={PACEY} alt="pacey목업 이미지" />
                    </a>
                </div>
            </div>
            {/* 하단 상세정보 */}
            <div className="shop-info">
                <ul className="info-list">
                    <li>① 작업 기간 : 2025.12.17 ~ 2025.12.29 (9일)</li>
                    <li>② 참여 인원 : 5명 팀 프로젝트</li>
                    <li
                    >③ 핵심 구현 포인트 :
                    <ul className="point-list">
                        <li>· 헤더 네비게이션 페이지 라우팅 구현</li>
                        <li>· 메인 캐러셀 및 hover 인터랙션 적용</li>
                        <li>· GSAP 애니메이션 구현</li>
                        <li>· 장바구니 상품 관리 기능 구현</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Shop