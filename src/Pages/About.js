import React from "react";
import "../Styles/AboutStyle.css";

const About = () => {
  return (
    <>
      <body>
        <div className="MAINCONTAINER">
          <div className="MainContainer">
            <div className="mainContainer" id="myCv">
              <div className="top">
                <div className="topLeft pt-2">
                  <h6 className="py-1">ÇAĞATAY BOZAY</h6>
                  <img className="mt-2" src="Images/picture.jpg" alt="" />
                </div>
                <div className="topRight">
                  <div>
                    <p className="introMargin">
                      <strong id="introduction-1">
                        {" "}
                        I'm an individual who is tidy, programmatic, disciplined
                        and solution-focused on issues. In the field of software
                        technologies, I like following updated developments
                        through magazines and Internet. I'm interested in how to
                        write codes more efficiently in Javascript and React
                        particularly.{" "}
                      </strong>
                    </p>
                    <p>
                      <strong id="introduction-2">
                        In addition to my native language Turkish, I consider to
                        have enough proficiency to contact verbally and in
                        writing both in English and German languages within the
                        framework of any international platform. Therefore, it
                        is not hard to say that I can adapt in any global
                        network or environment which requires interactivity.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="bottomLeft">
                  <h3 className="title" id="title">
                    PERSONAL
                  </h3>
                  <hr />
                  <div className="personal">
                    <h1>
                      <i className="fa-solid fa-user-tie  me-5 pb-2" />
                    </h1>
                    <div>
                      <h4 className="personal-title" id="isim">
                        Name
                      </h4>
                      <p>Çağatay Bozay</p>
                    </div>
                  </div>
                  <div className="personal">
                    <h1>
                      <i className="fa-solid fa-location-dot me-5 pb-2" />
                    </h1>

                    <div>
                      <h4 id="adres">Address</h4>
                      <p>Ankara/TURKEY</p>
                    </div>
                  </div>
                  <div className="personal">
                    <h1>
                      <i className="fa-solid fa-phone me-5 pb-2" />
                    </h1>

                    <div>
                      <h4 id="telefon">Phone number</h4>
                      <p>
                        <a href="tel:+090 551 685 52 92">+090 551 685 52 92</a>
                      </p>
                    </div>
                  </div>
                  <div className="personal">
                    <h1>
                      <i className="fa-solid fa-envelope me-5 pb-2" />
                    </h1>
                    <div>
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:cbozay90@hotmail.com">
                          cbozay90@hotmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="personal">
                    <h1>
                      <i className="fa-brands fa-linkedin me-5 pb-2" />
                    </h1>
                    <div>
                      <h4>Linkedin</h4>
                      <p>
                        <a
                          target="_blank"
                          href="https://linkedin.com/in/cbozay/"
                        >
                          linkedin.com/in/cbozay
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="personal">
                    <h1>
                      <i className="fa-brands fa-square-github me-5 pb-2" />
                    </h1>
                    <div>
                      <h4>Github</h4>
                      <p>
                        <a target="_blank" href="https://github.com/cbozay">
                          github.com/cbozay
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="personal">
                    <h1>
                      <i className="fa-solid fa-calendar-days me-5 pb-2" />
                    </h1>
                    <div>
                      <h4 id="dogumTarihi">Date of birth</h4>
                      <p>10-09-1990</p>
                    </div>
                  </div>
                  <div className="personal">
                    <h1>
                      <i className="fa-solid fa-house-user me-5 pb-2" />
                    </h1>
                    <div>
                      <h4 id="dogumYeri">Place of birth</h4>
                      <p>Gölcük/TURKEY</p>
                    </div>
                  </div>
                  <hr />
                  <h3 className="title" id="yetenekler">
                    SKILLS
                  </h3>
                  <hr />
                  <div className="skill">
                    <div>
                      <h1>
                        <i className="fa-solid fa-thumbs-up me-4" />
                      </h1>

                      <span>
                        <h5 id="liderlik">Leadership</h5>
                      </span>
                    </div>
                    <div>
                      <h1>
                        <i className="fa-solid fa-thumbs-up me-4" />
                      </h1>

                      <span>
                        <h5 id="musteri">Customer Relations</h5>
                      </span>
                      <span />
                    </div>
                    <div>
                      <h1>
                        <i className="fa-solid fa-thumbs-up me-4" />
                      </h1>

                      <span>
                        <h5 id="envanter">Inventory</h5>
                      </span>
                      <span />
                    </div>
                    <div>
                      <h1>
                        <i className="fa-solid fa-thumbs-up me-4" />
                      </h1>
                      <span>
                        <h5 id="finans">Finance</h5>
                      </span>
                      <span />
                    </div>
                  </div>
                  <hr />
                  <h3 className="title" id="hobiler">
                    INTERESTS
                  </h3>
                  <hr />
                  <div className="interest">
                    <div>
                      <h5 id="extrem">Extreme Summer Sports</h5>
                    </div>
                    <div>
                      <h5 id="kamp">Camping</h5>
                    </div>
                    <div>
                      <h5>Paintball</h5>
                    </div>
                    <div>
                      <h5>Rafting</h5>
                    </div>
                  </div>
                  <hr />
                  <h3 className="title" id="diller">
                    LANGUAGES
                  </h3>
                  <hr />
                  <div className="language">
                    <div className="lng">
                      <h5 id="turkce">Turkish</h5>
                    </div>
                    <div className="pb-1">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                  </div>
                  <div className="language">
                    <div className="lng">
                      <h5 id="ingilizce">English</h5>
                    </div>
                    <div className="pb-1">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                  </div>
                  <div className="language">
                    <div className="lng">
                      <h5 id="almanca">German</h5>
                    </div>
                    <div className="pb-1">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-regular fa-star" />
                      </span>
                    </div>
                  </div>
                  <div className="b2">
                    <p>
                      | Zertifikat telc Deutsch B2:{" "}
                      <a target="_blank" href="https://ibb.co/kqQHLg9">
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>{" "}
                      |
                    </p>
                  </div>
                </div>
                <div className="bottomRight">
                  <u>
                    <h3 className="MainDiv" id="isTecrubesi">
                      Work Experience
                    </h3>
                  </u>
                  <div className="exp mainDiv">
                    <div>
                      <u>
                        <b>
                          <p className="fontTitle" id="React">
                            Frontend-React Developer
                          </p>
                        </b>
                      </u>
                      <h6>
                        <i id="Ankara">Udemig Company, Ankara, TURKEY</i>
                      </h6>
                    </div>
                    <div>
                      <b>
                        <p id="One-year">One-Year Experience (Remote)</p>
                      </b>
                    </div>
                  </div>
                  <div className="pro mainDiv">
                    <div>
                      <ul>
                        <li className="li_font_size" id="experience-1">
                          It has been created projects with Git version control
                          system by being made individual and team work.
                        </li>
                        <li className="li_font_size" id="experience-2">
                          The datas in Real Dom have been manipulated by beeing
                          used javascript ES6 standarts in Virtual Dom and so
                          dynamic structures have been acquired.
                        </li>
                        <li className="li_font_size" id="experience-3">
                          Transfering permanent data to Local Storage and
                          reading datas there.
                        </li>
                        <li className="li_font_size" id="experience-4">
                          It has been made serverside request such as GET, POST,
                          PUT, DELETE to Rest Api using HTTP protocol by using
                          Axios Library and data flow has been provided.
                        </li>
                        <li className="li_font_size" id="experience-5">
                          It has been created full stack projects with JSON Fake
                          API.
                        </li>
                        <li className="li_font_size" id="experience-6">
                          It has been acquired promise results by being set up
                          asynchronous functional structures.
                        </li>
                        <li className="li_font_size" id="experience-7">
                          In all components have been reached datas by being
                          entegrated State Management with Redux.
                        </li>
                        <li className="li_font_size" id="experience-8">
                          Without Props Drilling has been provided data flow
                          between components with Context API.
                        </li>
                        <li className="li_font_size" id="experience-9">
                          It has been used React Hooks performing user
                          experience.
                        </li>
                        <li className="li_font_size" id="experience-10">
                          It has been used Life Cycle Methods helping data and
                          browser manipulation.
                        </li>
                        <li className="li_font_size" id="experience-11">
                          Form validation process has been made.
                        </li>
                        <li className="li_font_size" id="experience-12">
                          Pagination and search process has been made.
                        </li>
                        <li className="li_font_size" id="experience-13">
                          Authentication has been made using Local Storage.
                        </li>
                        <li className="li_font_size" id="experience-14">
                          Reasponsive web designs have been made with or without
                          library.
                        </li>
                        <li className="li_font_size" id="experience-15">
                          By using modern libraries such as Bootstrap ve
                          Material UI, it has been acquired quick and fantastic
                          interfaces.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr style={{ width: "95%", margin: "3px auto" }} />
                  <u>
                    <h3 className="MainDiv" id="referanslar">
                      Projects
                    </h3>
                  </u>
                  <div className="exp mainDiv">
                    <div>
                      <u>
                        <b className="d-flex">
                          <p className="fontTitle" id="React">
                            Hospital Automation
                          </p>
                          <a
                            target="_blank"
                            href="https://github.com/cbozay/hospital"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                          </a>
                        </b>
                      </u>
                    </div>
                  </div>
                  <div className="pro mainDiv">
                    <div>
                      <ul>
                        <li className="li_font_size" id="experience-1">
                          The most striking aspect of system is existance of an
                          automatic control mecanism notifying that the
                          appointment time has come for any patient whose
                          appointment has come. When it is five minutes left for
                          apppointment time, appointment data belonging to the
                          patient turn into yellow color. If appointment time
                          has passed, automatic control mecanism carry
                          appointment data of the patient to allocated field for
                          "Passed Appointments".
                        </li>
                        <li className="li_font_size" id="experience-2">
                          While React, Redux, Material UI ve Boostrap libraries
                          have been used in Frontend section of construction
                          stage, JSON Rest Api has been used in Backend section.
                          In all stages, Javascript ES6 standarts have been
                          used.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr style={{ width: "95%", margin: "3px auto" }} />
                  <u>
                    <h3 className="MainDiv" id="egitim">
                      Education &amp; Qualifications
                    </h3>
                  </u>
                  <div className="exp mainDiv">
                    <div>
                      <b>
                        <p className="fontTitle" id="otomotiv">
                          Automotive Engineering:
                        </p>
                      </b>
                      <p id="lisans1">
                        Bachelor Degree : <i>2,71/4</i>
                      </p>
                      <i>
                        <p id="cukurova">Cukurova University, Adana</p>
                      </i>
                      <div>
                        <p id="eylul2009">September 2009-June 2014</p>
                      </div>
                    </div>
                    <div className="rightDepartment">
                      <b>
                        <p className="fontTitle" id="uluslararasi">
                          International Relations:
                        </p>
                      </b>
                      <p id="lisans2">
                        Bachelor Degree : <i>2,42/4</i>
                      </p>
                      <i>
                        <p id="anadolu">Anadolu University, Eskişehir</p>
                      </i>
                      <div>
                        <p id="eylul2018">September 2018-June 2021</p>
                      </div>
                    </div>
                  </div>
                  <hr style={{ width: "95%", margin: "3px auto" }} />
                  <u>
                    <h3 className="MainDiv" id="referanslar">
                      References
                    </h3>
                  </u>
                  <div className="special ref mainDiv">
                    <div>
                      <b>
                        <p className="li_font_size">Mehmet Can Seyhan:</p>
                      </b>
                      <p>
                        (<i id="Arabuleu">Founder of Udemig</i>{" "}
                        <a target="_blank" href="https://udemig.com/">
                          <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                        )
                      </p>
                    </div>
                    <div className="rightDepartment">
                      <p>
                        <a href="tel:+46704312038">+46 70 431 20 38</a>
                      </p>
                      <p>
                        <a href="mailto:mehmet.can.seyhan1@gmail.com">
                          mehmet.can.seyhan1@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <hr style={{ width: "95%", margin: "3px auto" }} />
                    <u>
                      <h3 className="MainDiv" id="yetenek">
                        Skills
                      </h3>
                    </u>
                    <div className="main-skills">
                      <div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>HTML5</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>CSS3</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Javascript</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Typescript</p>
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="stars-div">
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star-half-stroke" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                      </div>
                      <div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Redux</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Material</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>JSON</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Ant</p>
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="stars-div">
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star-half-stroke" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                      </div>
                      <div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Booststrap5</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>React</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Git</p>
                            </b>
                          </div>
                        </div>
                        <div className="row mainDiv">
                          <div>
                            <b>
                              <p>Tailwind</p>
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="stars-div">
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="main-skills stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default About;
