import "./Intro.scss";

import profileMain from "../../../assets/images/profile/profile-main.png"
import profileIntro from "../../../assets/images/profile/profile-intro.png"
import { FaGithub } from "react-icons/fa6";
import {Figma, Photoshop, Illustrator, Html, Scss, Css, JavaScript, React, Git, GSAP,Supabase} from "../../../assets/images/icons";
import { IoIosMail } from "react-icons/io";
import { useEffect } from "react";
import gsap from "gsap";

const Intro = () =>{
    useEffect(() => {
    gsap.to(".keyword", {
    scale: 1.08,         
    duration: 3,       
    repeat: -1,          
    yoyo: true,          
    ease: "sine.inOut",  
    stagger: 0
    });
}, []);
    return(
        <section className="intro">
            <div className="intro-wrapper">
                {/* 왼쪽카드 */}
                <aside className="intro-left">
                    <div className="intro-profile">
                        <img src={profileMain} alt="왼쪽 프로필사진" className="profile-image"/>
                        <h2 className="name">Kwon Dahye</h2>
                        <p className="role">Web Designer & Publisher</p>
                        <div className="contact">
                            <p className="contact-title">CONTACT</p>
                            <ul className="contact-list">
                                <li>
                                    <span className="icon">
                                        <IoIosMail />
                                        <a href="mailto:dahye0937@gmail.com" className="text">dahye0937@gmail.com</a>
                                    </span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <FaGithub /> 
                                        <a href="https://github.com/dahye0937-beep" className="text">GitHub</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                {/* 오른쪽 카드 */}
                <div className="intro-right">
                    <div className="intro-top-content">
                        <hedader className="intro-header">
                        <h1 className="title">Clamness</h1>
                        <p className="desc">
                            구조와 흐름을 설계하는<br/>
                            웹 디자이너 & 퍼블리셔
                        </p>
                        </hedader>
                    {/* 키워드 프로필 */}
                    <div className="intro-keywords">
                        <img src={profileIntro} alt="키워드 프로필 사진" className="intro-avatar"/>
                        <span className="keyword k1">차분함</span>
                        <span className="keyword k2">집중</span>
                        <span className="keyword k3">디테일</span>
                        <span className="keyword k4">진정성</span>
                        <span className="keyword k5">부드러움</span>
                        <span className="keyword k6">안정감</span>
                    </div>
                    </div>
                    {/* 스킬 */}
                    <div className="intro-skills">
                        <div className="skill-card">
                            <h4 className="skill-title">Design</h4>
                            <ul>
                                <li>
                                    <img src={Figma} alt="피그마"/>
                                    <span>Figma</span>
                                </li>
                                <li>
                                    <img src={Photoshop} alt="포토샵"/>
                                    <span>Photoshop</span>
                                </li>
                                <li>
                                    <img src={Illustrator} alt="일러스트"/>
                                    <span>Illustrator</span>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h4 className="skill-title">Publishing</h4>
                            <ul>
                                <li>
                                    <img src={Html} alt="HTML"/>
                                    <span>HTML</span>
                                </li>
                                <li>
                                    <img src={Scss} alt="SCSS"/>
                                    <span>SCSS</span>
                                </li>
                                <li>
                                    <img src={Css} alt="css"/>
                                    <span>CSS</span>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h4 className="skill-title">Dev&Interaction</h4>
                            <ul>
                                <li>
                                    <img src={JavaScript} alt="JS"/>
                                    <span>JavaScript</span>
                                </li>
                                <li>
                                    <img src={React} alt="react"/>
                                    <span>React</span>
                                </li>
                                <li>
                                    <img src={Git} alt="Git"/>
                                    <span>Git/GitHub</span>
                                </li>
                                <li>
                                    <img src={GSAP} alt="GSAP" />
                                    <span>GSAP</span>
                                </li>
                                <li>
                                    <img src={Supabase} alt="Supabase"/>
                                    <span>Supabase</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Intro;