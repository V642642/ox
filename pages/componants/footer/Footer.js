import styles from "../../../styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.sub_footer}>
        <div className="container">
          <div className={styles.sub_footer_content}>
            <div className={styles.sub_footer_first_box}>
              <p>
                <i class="fa-solid fa-location-dot"></i>
                New Delhi, <span>India</span>
              </p>
            </div>
            <div
              className={`${styles.sub_footer_first_box} ${styles.mobileView}`}
            >
              <p>
                <i class="fa-solid fa-phone"></i>+91 888-200-7004 <br />
                <span>
                  <i class="fa-solid fa-envelope"></i>info@oscenox.com
                </span>
              </p>
            </div>
            <div
              className={styles.sub_footer_first_box}
              style={{ border: "none" }}
            >
              <button>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.footer_box} container`}>
          <div className={styles.footer_last_box}>
            <div>
              <h6>
                <span style={{ color: "#338C9C" }}>&#124;</span> NEED OSCENOX
                HELP?
              </h6>
              <p>
                If you prefer to book or inquire over the phone, please contact
                at 8882007004 to discuss our sales team 24x7
              </p>
              <div>
                <Link
                  href="https://www.facebook.com/people/Oscenox-India-Private-Limited/100066691644693/"
                  target="_blank"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </Link>
                {/* <Link href="https://twitter.com/oscenox" target="_blank">
                  <i className="fa-brands fa-square-twitter"></i>
                </Link> */}
                {/* <Link
                  href="https://in.linkedin.com/company/oscenox-india"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link> */}
                <Link
                  href="https://www.instagram.com/p/CN7DN38jZGG/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.footer_last_box}>
            <div>
              <h6>
                <span style={{ color: "#338C9C" }}>&#124;</span> COMPANY
              </h6>
              <p>
                {" "}
                <Link className={styles.redirect} href="/about">
                  About Us
                </Link>
              </p>
              <p>
                {" "}
                <Link className={styles.redirect} href="/experience">
                  Experience
                </Link>
              </p>
              <p>
                <Link className={styles.redirect} href="/contact">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.footer_last_box}>
            <div>
              <h6>
                <span style={{ color: "#338C9C" }}>&#124;</span> QUICK LINK
              </h6>
              <p>
                <Link className={styles.redirect} href="#private">
                  Private Policy
                </Link>
              </p>
              <p>
                <Link className={styles.redirect} href="/terms-and-condition">
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link className={styles.redirect} href="/cancellation-refund">
                  Cancellation and Refund
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.footer_last_box}>
            <div>
              <h6>
                <span style={{ color: "#338C9C" }}>&#124;</span> HEAD OFFICE
              </h6>
              <p>
                Oscenox India Private Limited, P-170, Ground Floor, Pillaji
                Village, Sarojini Nagar, New Delhi, 110023
              </p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div>
            <p>CopyRight &#169; 2022 OSCENOX, All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
