import "./AboutMe.scss";
import AboutSite from "./AboutSite";

const AboutMe = () => {
  return (
    <section className="about">
        <div className="about-inner">
            <h2 className="about-title">About Me</h2>
            <p className="about-subtitle">
                사용자 흐름을 고려한 구조 설계로 <br/>
                머무르고 싶은 웹을 만듭니다.
            </p>
        </div>
        <div className="about-keywords">
            <span className="keywords">구조와 흐름</span>
            <span className="keywords">접근성과 표준</span>
            <span className="keywords">사용자 중심 UI</span>
        </div>
        <p className="about-description">
            웹 표준과 접근성을 기반으로 UI 구조를 설계하며, 퍼블리싱에<br />
            그치지 않고 React를 활용한 프론트엔드 개발 역량을 <br/>
            꾸준히 확장하고 있습니다.
        </p>
        <AboutSite />
    </section>
    
  )
}

export default AboutMe