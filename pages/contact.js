import Link from "next/link";
import styles from "../styles/contact.module.css";

const contact = () => {
  return (
    <>
      <div className={styles.contact_banner}>
        <div className={styles.contact_banner_wapper}>
          <h1>Conatct Us</h1>
        </div>
      </div>
      <div className={styles.contact_description}>
        <div>
          <h1>GET IN TOUCH</h1>
          <div className={styles.underline_box}>
            <div></div>
          </div>
          <h5>
            Please fill out the from below and we will get back to you as soon
            as possible.
          </h5>
        </div>
      </div>
      <div className={styles.contact_details}>
        <div className={styles.phone_details}>
          <i class="fa-solid fa-mobile-screen-button"></i>
          <h6>PHONE</h6>
          <p>
            <Link href="#">+91 888-200-7004</Link>
          </p>
        </div>
        <div className={styles.horizantal_box}>
          <div></div>
        </div>
        <div className={styles.address_details}>
          <i class="fa-solid fa-location-dot"></i>
          <h6>ADDRESS</h6>
          <p>
            <Link href="#">Rishikesh, Dehradoon,India</Link>
          </p>
        </div>
        <div className={styles.horizantal_box}>
          <div></div>
        </div>
        <div className={styles.email_details}>
          <i class="fa-solid fa-envelope"></i>
          <h6>EMAIL</h6>
          <p>
            <Link href="#">connect@oscenox.com</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default contact;
