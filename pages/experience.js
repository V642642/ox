import styles from "../styles/Experience.module.css";
import Card from "react-bootstrap/Card";

const Experience = () => {
  return (
    <>
      <div>
        <div className={styles.experience_box}>
          <div className={styles.experience_banner_wapper}>
            <h1>Experience</h1>
          </div>
        </div>
        <div className=" container-fluid">
          <div className={styles.experience_first_box}>
            <Card className={styles.experience_first_img}></Card>
            <div className={styles.experience_content}>
              <h3>
                {" "}
                <span>
                  <i class="fa-solid fa-hotel"></i>
                </span>{" "}
                Swiss Cottage by Oscenox
              </h3>
              <h6>
                <i class="fa-solid fa-location-dot"></i>ByPass Road, Tapovan,
                Rishikesh, Uttarkhand 249192, India
              </h6>
              <p>
                Swiss Cottage by Oscenox is a good option for travellers looking
                out for resort in Rishikesh. It is located in Tapovan.
              </p>
              <div className={styles.experience_btn}>
                <button>EXPLORE</button>
              </div>
            </div>
          </div>

          <div className={styles.experience_first_box}>
            <Card className={styles.experience_second_img_mobile}></Card>
            <div className={styles.experience_content}>
              <h3>
                {" "}
                <span>
                  <i class="fa-solid fa-hotel"></i>
                </span>{" "}
                Hotel MG Road by Oscenox
              </h3>
              <h6>
                <i class="fa-solid fa-location-dot"></i>
                Hotel 428, Mehrauli-Gurgaon Rd, Ghitorni, New Delhi, Delhi
                110030, India
              </h6>
              <p>
                3 stars Hotel Mg road oscenox is conveniently located at
                Mehrauli-Gurgaon Road Near MCD School , Ghitorni, in New Delhi
                in 16.4 km from the centre.
              </p>
              <div className={styles.experience_btn}>
                <button>EXPLORE</button>
              </div>
            </div>
            <Card className={styles.experience_second_img}></Card>
          </div>

          <div className={styles.experience_first_box}>
            <Card className={styles.experience_third_img}></Card>
            <div className={styles.experience_content}>
              <h3>
                <span>
                  <i class="fa-solid fa-hotel"></i>
                </span>
                Bunk Stay by Oscenox
              </h3>
              <h6>
                <i class="fa-solid fa-location-dot"></i>ByPass Road, Tapovan,
                Rishikes Uttarakhand 249192, India
              </h6>
              <p>
                Bunk stay by oscenox property is a short drive away from several
                local attractions, including The Beatles Ashram and Rishikesh
                View Point.
              </p>
              <div className={styles.experience_btn}>
                <button>EXPLORE</button>
              </div>
            </div>
          </div>

          <div className={styles.experience_first_box}>
            <Card className={styles.experience_fourth_img_mobile}></Card>
            <div className={styles.experience_content}>
              <h3>
                <span>
                  <i class="fa-solid fa-utensils"></i>
                </span>
                Little Amsterdam by Oscenox
              </h3>
              <h6>
                <i class="fa-solid fa-location-dot"></i>
                Bypass Road, near Laxman Jhula, Tapovan, Rishikesh, Uttarakhand
                249192, India
              </h6>
              <p>
                LA Restaurant by Oscenox is a breath-taking opulent restaurant
                located at the best spot in rishikesh offering a one of a kind
                unforgettable & memorable experience.
              </p>
              <div className={styles.experience_btn}>
                <button>EXPLORE</button>
              </div>
            </div>
            <Card className={styles.experience_fourth_img}></Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
