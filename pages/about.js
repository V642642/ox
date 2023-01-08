import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.about_banner}>
        <div className={styles.about_banner_wapper}>
          <div>
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.oscenox_india}>
          <div>
            <h3>AN OVERVIEW OF</h3>
            <h1>OSCENOX INDIA</h1>
            <div className={styles.heading_underline}>
              <div className={styles.underline_first_box}></div>
              <div className={styles.underline_second_box}></div>
              <div className={styles.underline_first_box}></div>
            </div>
          </div>
        </div>
        <div className={styles.oscenox_india_content}>
          <div className={styles.oscenox_img_section}>
            <div className={styles.oscenox_img}></div>
          </div>
          <div className={styles.oscenox_india_text}>
            <p>
              Oscenox is a new-age budget boutique hotel brand founded by Mr.
              Arjun Singh. The company was incorporated in January 2018 to build
              a business model of creating an experience Center for affordable
              and pleasant travel. The company intends to provide its guests
              with the best hospitality services and a comfortable environment
              through customization to their needs by giving them customized
              kits and add-on services to meet their needs and demands.
            </p>
            <p>
              We offer stylish, elegant yet comfortable, and tasteful spaces
              that exceed our guest&apos;s anticipations. Also, we provide in
              and out travel solutions from interstate taxis, rental cars,
              Air-Bus-Train tickets, local taxis, and much more at affordable
              prices. <br />
              We endeavor to create memorable traveling experiences by providing
              easy, convenient, and hassle-free services to travelers. We
              provide our guests with well-equipped, safe, and hygienic
              accommodations along with amenities like free wifi, Air
              conditioning, a Hot water system, and many more.
            </p>
            <p>
              We are presently serving our fairest in numerous states such as
              Uttarakhand, Delhi, and Himachal Pradesh, and cities like
              Rishikesh, Shimla, Manali, Keylong, Kinnaur, Gurgaon, Jibi, Kullu
              valley. Furthermore, we have the forethought to extend our
              foremost services in Lucknow, Varanasi, Ayodhya, Mandi, Dehradun,
              Katra, and Srinagar, also. We selected some of the best industries
              and brands to make our guests stay comfortable and hassle-free.
            </p>
            <p>
              Oscenox Team altogether aims to create the best remembrances for
              visitors.
            </p>
          </div>
        </div>
        <div className={styles.oscenox_property}>
          <div>
            <h1>OSCENOX INDIA</h1>
            <div className={styles.heading_underline}>
              <div className={styles.underline_first_box}></div>
              <div className={styles.underline_second_box}></div>
              <div className={styles.underline_first_box}></div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <div className="card m-2 px-4 py-2">
            <h3>
              <i class="fa-solid fa-hotel"></i>Swiss Cottage by Oscenox
            </h3>
            <h6>Resord</h6>
            <p>
              <i class="fa-solid fa-location-dot"></i>ByPass Road, Tapovan,
              Rishikesh, Uttarkhand 249192, India
            </p>
          </div>
          <div className="card m-2 px-4 py-2">
            <h3>
              <i class="fa-solid fa-utensils"></i>Hotel MG Road by Oscenox
            </h3>
            <h6>Resturant</h6>
            <p>
              <i class="fa-solid fa-location-dot"></i>Hotel 428,
              Mehrauli-Gurgaon Rd, Ghitorni, New Delhi, Delhi 110030, India
            </p>
          </div>
          <div className="card m-2 px-4 py-2">
            <h3>
              <i class="fa-solid fa-hotel"></i>Bunk Stay by Oscenox
            </h3>
            <h6>Hotel</h6>
            <p>
              <i class="fa-solid fa-location-dot"></i>Swiss Cottage ,ByPass
              Road, Tapovan, Rishikes, Uttarakhand 249192, India
            </p>
          </div>
          <div className="card m-2 px-4 py-2">
            <h3>
              <i class="fa-solid fa-utensils"></i>Little Amsterdam by Oscenox
            </h3>
            <h6>Resturant</h6>
            <p>
              <i class="fa-solid fa-location-dot"></i>Restaurant Swiss cottage
              by oscenox Bypass Road, near Laxman Jhula, Tapovan, Rishikesh,
              Uttarakhand 249192, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
