import "./AboutSite.scss";
import Site01 from "../../../assets/images/projects/site01.png";
const AboutSite = () => {
  return (
    <section className="about-site">
        <div className="site-inner">
            <h2 className="site-title">About This Site</h2>
            <p className="site-desc">
                기획부터 퍼블리싱까지 100% 개인 작업으로  제작한 반응형 웹 포트폴리오입니다.
            </p>
        </div>
        <div className="site-card">
            <div className="site-info">
            <h3 className="site-card-title">Working Note</h3>
            <p className="card-desc">사용한 도구</p>
            <ul className="site-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>Figma</li>
                <li>SCSS</li>
                <li>GSAP</li>
            </ul>
            <p className="card-desc">Design System</p>
            <ul className="site-system">
                <li className="system-color">
                    <span className="system-title">Color Palette</span>
                    <div className="color-chips">
                        <span className="chip bg-page"  data-hex="#FFF4EA"/>
                        <span className="chip bg-section" data-hex="#FFF9F3"/>
                        <span className="chip bg-card" data-hex="#F5D7C2"/>
                        <span className="chip accent-primary"data-hex="#CD9166" />
                        <span className="chip accent-soft" data-hex="#4C3A4C"/>
                        <span className="chip text-title" data-hex="#3A2F2A"/>
                    </div>
                </li>
                <li>
                    <span className="system-title">Typography</span>
                    <span className="system-desc">SuperMellow / Paperlogy</span>
                </li>
                <li>
                    <span className="system-title">UI Tone</span>
                    <span className="system-desc">차분한 베이지 톤과 곡선을 활용하고 편안한 사용자 경험</span>
                </li>
            </ul>
        </div>
            <div className="site-icons">
                <span className="icon-github" />
                <span className="icon-link" />
            </div>
        </div>
        {/* <div className="site-visual">
            <img src={Site01} alt="포트폴리오 목업" />
        </div> */}
    </section>
  )
}

export default AboutSite;