import React, { useContext } from "react";
import modesContext from "../context/modescontext";
import styles from "../styles/Home.module.css";
import projectsData from "../context/data/projects.json";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import useInView from "react-cool-inview";
import dynamic from "next/dynamic";

const DynamicLazyComponent = dynamic(
  () => import("../components/MapLocation"),
  { loading: () => <p>...</p> }
);

export default function Home() {
  const lang = useContext(modesContext);
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <div className={styles.home}>
      <div className={styles.main_img}>
        <div style={{ fontSize: "40px" }}>
          {lang.lang === "EN" ? (
            <div title="Msmar Group">
              <h1> Msmar Group</h1>
              <p>we can nailed it</p>
            </div>
          ) : (
            <div title="مسمار كروب">
              <h1>مسمار كروب</h1> إحنة نكدرلها !
            </div>
          )}
        </div>
      </div>
      <div className={styles.main_text}>
        <div className={styles.about_us} id="about">
          {lang.lang === "EN" ? <h1>About Us</h1> : <h1>من نحن</h1>}
          <div className={styles.about_us_container}>
            <div>
              {lang.lang === "EN" ? (
                <div
                  className={styles.about_us_element}
                  style={{ color: "var(--fontColor)" }}
                >
                  <p>
                    <b>Msmar Group</b> a group that seeks to provide software
                    solutions to all problems and we are working on building
                    applications, websites and desktop applications and giving
                    training courses to students and we seek to develop the
                    software reality.
                  </p>
                  <p>
                    <b>Our Goal </b> is to achieve the development and
                    development of projects and companies, and we aim to help
                    students and provide them with advice and software solutions
                  </p>
                  <div style={{ fontSize: "1.5em" }}>
                    <b>Services </b>
                    <ul style={{ lineHeight: "2em" }}>
                      <li>Building mobile applications</li>
                      <li> Build websites professionally </li>
                      <li>We do training courses for students </li>
                      <li>We do software graduation projects for students</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div
                  className={styles.about_us_element}
                  style={{ color: "var(--fontColor)" }}
                >
                  <p>
                    <b>مسمار كروب</b> مجموعة تسعى الى تقديم الحلول البرمجية
                    لكافة المشاكل و نعمل على بناء التطبيقات و مواقع الويب
                    وتطبيقات الديسكتوب و اعطاء دورات تدريبيه للطلاب و نسعى الى
                    تطوير الواقع البرمجي.
                  </p>
                  <p>
                    <b>هدفنا </b> تحقيق التطور و التنمية للمشاريع و للشركات و
                    نهدف الى مساعدة طلاب و نقدم لهم النصائح و الحلول البرمجية
                  </p>
                  <div style={{ fontSize: "1.5em" }}>
                    <b>الخدمات </b>
                    <ul style={{ lineHeight: "2em" }}>
                      <li>بناء تطبيقات الهاتف </li>
                      <li> بناء مواقع الويب بشكل احترافي </li>
                      <li>نقوم بعمل دورات تدريبية للطلاب </li>
                      <li>نقوم بعمل مشاريع التخرج البرمجية للطلاب</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <img src="/msmar_group.png" alt="Msmar logo" />
          </div>
        </div>
        <hr style={{ width: "100%", marginTop: "4em" }} />
        <div className={styles.cards_container} id="projects">
          {lang.lang === "EN" ? <h1>Our Projects</h1> : <h1>مشاريعنا</h1>}
          <div className={styles.grid}>
            {projectsData.map((data) => {
              return (
                <Link href={data.url} passHref key={data.id}>
                  <a target="_blank" className={styles.cards}>
                    <div className={styles.cards_img}>
                      <img src={"/images" + data.img} alt="project image" />
                    </div>
                    <div className={styles.cards_text}>
                      <h2> {data.title}</h2>
                      <p style={{ color: "white" }}>
                        {lang.lang === "EN"
                          ? data.description_EN
                          : data.description_AR}
                      </p>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <hr style={{ width: "100%", marginTop: "4em" }} />
        {lang.lang === "EN" ? <h1>Contact Us</h1> : <h1>تواصل معنا</h1>}
        <div className={styles.contact_us} ref={observe} id="contact">
          {lang.lang === "EN" ? (
            <div className={styles.contact_us_components}>
              <div>
                <h2 className={styles.contact_us_h2}>
                  Better yet, See us in person
                </h2>
                <small>
                  We love our customers, so feel free to visit during normal
                  business hours.
                </small>
              </div>
              <div>
                <h2 className={styles.contact_us_h2}>Msmar Group</h2>
                <small className={styles.contact_us_icons_container}>
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    style={{ width: "25px" }}
                  />
                  <span>
                    Iraq , Baghdad , almajmae alwataniu lilhasibat - IoT Maker
                  </span>
                </small>
                <br />

                <small className={styles.contact_us_icons_container}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ width: "25px" }}
                  />
                  <a
                    style={{ marginLeft: "10px" }}
                    href="mailto:msmar@gmail.com"
                  >
                    msmar@gmail.com
                  </a>
                </small>
                <br />
                <small className={styles.contact_us_icons_container}>
                  <FontAwesomeIcon icon={faPhone} style={{ width: "25px" }} />
                  <span>07905797584</span>
                </small>
              </div>
              <div>
                <h2 className={styles.contact_us_h2}>Hours</h2>
                <small>9:00 am – 03:00 pm</small>
              </div>
            </div>
          ) : (
            <div className={styles.contact_us_components}>
              <div>
                <h2 className={styles.contact_us_h2}>
                  الأفضل من ذلك ، شاهدنا شخصيًا
                </h2>
                <small>
                  نحن نحب عملائنا ، لذلك لا تتردد في الزيارة أثناء المعتاد ساعات
                  العمل.
                </small>
              </div>
              <div>
                <h2 className={styles.contact_us_h2}>مسمار كروب</h2>
                <small className={styles.contact_us_icons_container}>
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    style={{ width: "25px" }}
                  />
                  <span>ألعراق , بغداد , إدارة المجمع الوطني للحاسبات</span>
                </small>
                <br />

                <small className={styles.contact_us_icons_container}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ width: "25px" }}
                  />
                  <a
                    style={{ marginRight: "10px" }}
                    href="mailto:msmar@gmail.com"
                  >
                    msmar@gmail.com
                  </a>
                </small>

                <br />
                <small className={styles.contact_us_icons_container}>
                  <FontAwesomeIcon icon={faPhone} style={{ width: "25px" }} />
                  <span>07905797584</span>
                </small>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <h2 className={styles.contact_us_h2}>ألساعات </h2>
                <small>٩:٠٠ صباحا - ٣:٠٠ مساءا</small>
              </div>
            </div>
          )}

          {inView && <DynamicLazyComponent />}
        </div>
      </div>
    </div>
  );
}
