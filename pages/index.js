import React, { useContext } from "react";
import modesContext from "../context/modescontext";
import styles from "../styles/Home.module.css";
export default function Home() {
  const lang = useContext(modesContext);

  return (
    <div className={styles.home}>
      <div className={styles.main_img}>
        <div style={{ fontSize: "40px" }}>
          {lang.lang === "EN" ? (
            <div>
              <h1> Msmar Group</h1>
              <p>we can nailed it</p>
            </div>
          ) : (
            <div>
              <h1> مجموعة مسمار</h1> "إحنة نكدرلها !
            </div>
          )}
        </div>
      </div>
      <div className={styles.main_text}>
        <div className={styles.about_us}>
          {lang.lang === "EN" ? <h1>About Us</h1> : <h1>من نحن</h1>}
          <div className={styles.about_us_container}>
            <div>
              {lang.lang === "EN" ? (
                <p>
                  <b>Msmar Group</b> A Startup company specialized in software
                  solutions, building websites and mobile applications, and
                  converting any idea into a software project in the best way
                  and using the latest programming languages.
                </p>
              ) : (
                <p>
                  <b>مجموعة مسمار</b> شركه متخصصة في الحلول البرمجيه و بناء
                  المواقع و تطبيقات الهاتف و تقوم بتحويل اي فكرة الى مشروع برمجي
                  بأحسن الطرق و بأحدث اللغات البرمجيه
                </p>
              )}
              {lang.lang === "EN" ? (
                <p>
                  <b>Msmar Group</b> A Startup company specialized in software
                  solutions, building websites and mobile applications, and
                  converting any idea into a software project in the best way
                  and using the latest programming languages.
                </p>
              ) : (
                <p>
                  <b>مجموعة مسمار</b> شركه متخصصة في الحلول البرمجيه و بناء
                  المواقع و تطبيقات الهاتف و تقوم بتحويل اي فكرة الى مشروع برمجي
                  بأحسن الطرق و بأحدث اللغات البرمجيه
                </p>
              )}
            </div>
            <img src="/msmar_group.png" />
          </div>
        </div>
        <hr style={{ width: "100%", marginTop: "4em" }} />
        <div className={styles.cards_container}>
          {lang.lang === "EN" ? <h1>Our Projects</h1> : <h1>مشاريعنا</h1>}

          <div className={styles.grid}>
            <div className={styles.cards}>
              <div className={styles.cards_img}>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className={styles.cards_text}>Ur Task</div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cards_img}>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className={styles.cards_text}>Ur Task</div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cards_img}>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className={styles.cards_text}>Ur Task</div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cards_img}>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className={styles.cards_text}>Ur Task</div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cards_img}>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className={styles.cards_text}>Ur Task</div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cards_img}>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className={styles.cards_text}>Ur Task</div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cards_img}>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className={styles.cards_text}>Ur Task</div>
            </div>
          </div>
        </div>
        <hr style={{ width: "100%", marginTop: "4em" }} />
        <div className={styles.contact_us}>
          {lang.lang === "EN" ? <h1>Contact Us</h1> : <h1>تواصل معنا</h1>}
        </div>
      </div>
    </div>
  );
}
