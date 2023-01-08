import styles from "../../../styles/Banner.module.css";

const BannerUI = () => {
  return (
    <>
      <div className={styles.banner}>
      <div className={styles.banner_wapper}>
        <div className={styles.banner_text}>
          <h1>
            <span>Stay</span> & Adventure
          </h1>
          <p>
            Create memories experience togetherness
          </p>
          <div>
            <button className="btn text-white btn-info px-4 m-4">Explore</button>
          </div>
        </div> 
        <div className={`${styles.banner_icon_box} container`}>
          <div className={`${styles.first_icon_section} ${styles.mobile_view_first_icon}`}>
          <div className={styles.banner_icon}>
            <div>
            <i
              className="fa-solid fa-users-viewfinder"></i> </div>
              <div>
            <p>
              24,000+ <br /> <span>TRAVEL EXPERIENCE</span>
            </p>
            </div>
          </div>
          <div className={styles.banner_icon}>
            <div>
            <i
              className="fa-sharp fa-solid fa-earth-americas"></i></div>
              <div>
            <p>
              15+ <br /> <span>CITIES</span>
            </p></div>
          </div>
          </div>
          <div className={`${styles.first_icon_section} ${styles.mobile_view_second_icon}`}>
          <div className={styles.banner_icon}>
          <div>
            <i
              className="fa-solid fa-hand-holding-dollar"></i></div>
              <div>
            <p>
              Best Price <br /> <span>GUARANTEED</span>
            </p></div>
          </div>
          <div className={styles.banner_icon}>
            <div>
            <i className="fa-solid fa-tag"></i></div>
            <div>
            <p>
              10% OFF <br /> <span>Direct Booking</span>
            </p></div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BannerUI;