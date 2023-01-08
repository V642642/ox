import Link from "next/link";
import styles from "../../../styles/Gallery.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className={styles.explore_section}>
        <div className="container">
          <div className={styles.explore_big}>
            <p>Explore</p>
          </div>
          <div className={styles.explore_text}>
            <h1>Activity we provide</h1>
          </div>
          <div style={{ marginTop: "65px" }}>
            <Tabs
              defaultActiveKey="Rishikesh"
              id="uncontrolled-tab-example"
              className={styles.gallery_tabs}
            >
              <Tab eventKey="Rishikesh" title="Rishikesh">
                <div className={styles.gallery_section}>
                  <div className={styles.first_grid}>
                    <Image
                      src="/image/swiss-cottage-min.webp"
                      width={0}
                      height={0}
                      alt="oscenox"
                      priority={true}
                      className={styles.first_grid_img}
                    />
                    <Link
                      className={styles.link_div}
                      href="/swiss-cottage-rishikesh-oscenox"
                    >
                      <div className={styles.grid_wapper}>
                        <div>
                          <p className={styles.swiss_big}>
                            Swiss cottage by Oscenox
                          </p>
                          <p className={styles.resort_heading}>Resort</p>
                          <div className={styles.book_btn}>
                            <button className="btn text-white btn-danger px-4 m-4">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.second_grid}>
                    <div className={styles.second_grid_top}>
                      <Image
                        src="/image/little-ams-min.webp"
                        width={0}
                        height={0}
                        priority={true}
                        alt="oscenox"
                        className={styles.second_grid_top_img}
                      />
                      <div className={styles.grid_wapper}>
                        <div>
                          <p className={styles.title_head}>
                            Little Amsterdam by Oscenox
                          </p>
                          <p className={styles.title_bottom}>Restaurant</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.second_grid_bottom}>
                      <div className={styles.second_grid_bottom_left}>
                        <div className={styles.second_grid_bottom_left_top}>
                          <Image
                            src="/image/bunkStay.webp"
                            width={0}
                            height={0}
                            priority={true}
                            alt="oscenox"
                            className={styles.second_grid_bottom_left_top_img}
                          />
                          <div className={styles.grid_wapper}>
                            <div>
                              <h5 className={styles.bunk_title}>
                                Bunk Stay by Oscenox
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className={styles.secont_bottom_left_bottom}>
                          <div className={styles.first_box}>
                            <Image
                              src="/image/rafting.webp"
                              width={0}
                              height={0}
                              priority={true}
                              alt="oscenox"
                              className={styles.first_box_img}
                            />
                            <div className={styles.grid_wapper}>
                              <h5 className={styles.bunk_title}>Rafting</h5>
                            </div>
                          </div>
                          <div className={styles.second_box}>
                            <Image
                              src="/image/bike-rent.webp"
                              width={0}
                              alt="oscenox"
                              priority={true}
                              height={0}
                              className={styles.second_box_img}
                            />
                            <div className={styles.grid_wapper}>
                              <h5 className={styles.bunk_title}>Bike Rent</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.second_right_bottom}>
                        <div className={styles.second_right_bottom_top}>
                          <Image
                            src="/image/dj_oscenox_night.webp"
                            width={0}
                            alt="oscenox"
                            height={0}
                            priority={true}
                            className={styles.second_right_bottom_top_img}
                          />
                          <div className={styles.grid_wapper}>
                            <h5 className={styles.bunk_title}>Dj Night</h5>
                          </div>
                        </div>
                        <div className={styles.second_right_bottom_btn}>
                          <button className="btn bg-info px-4 text-white">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Delhi" title="Delhi">
                <div className={styles.gallery_section}>
                  <div className={styles.first_grid_delhi}>
                    <Image
                      src="/image/mgHotel.jpg"
                      width={0}
                      alt="oscenox"
                      priority={true}
                      height={0}
                      className={styles.first_grid_delhi_img}
                    />
                    <Link
                      className={styles.link_div}
                      href="/swiss-cottage-rishikesh-oscenox"
                    >
                      <div className={styles.grid_wapper}>
                        <div>
                          <p className={styles.swiss_big}>MG Road by Oscenox</p>
                          <p className={styles.resort_heading}>Hotel</p>
                          <div className={styles.book_btn}>
                            <button className="btn text-white btn-danger px-4 m-4">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.second_grid}>
                    <div className={styles.second_grid_top_delhi}>
                      <Image
                        src="/image/restaurant-le.jpg"
                        width={0}
                        priority={true}
                        height={0}
                        alt="oscenox"
                        className={styles.second_grid_top_delhi_img}
                      />
                      <div className={styles.grid_wapper}>
                        <div>
                          <p className={styles.title_head}>
                            MG Restaurant by Oscenox
                          </p>
                          <p className={styles.title_bottom}>Restaurant</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.second_grid_bottom_delhi}>
                      <div className={styles.second_grid_bottom_left_delhi}>
                        <div
                          className={styles.second_grid_bottom_left_top_delhi}
                        >
                          <Image
                            src="/image/new-delhi-tour-package.webp"
                            width={0}
                            height={0}
                            alt="oscenox"
                            className={
                              styles.second_grid_bottom_left_top_delhi_img
                            }
                          />
                          <div className={styles.grid_wapper}>
                            <h5 className={styles.bunk_title}>
                              Delhi Tour Package
                            </h5>
                          </div>
                        </div>
                        <div
                          className={
                            styles.second_grid_bottom_left_bottom_delhi
                          }
                        >
                          <Image
                            src="/image/bike-rent.webp"
                            width={0}
                            height={0}
                            alt="oscenox"
                            className={
                              styles.second_grid_bottom_left_bottom_delhi_img
                            }
                          />
                          <div className={styles.grid_wapper}>
                            <h5 className={styles.bunk_title}>Bike Rent</h5>
                          </div>
                        </div>
                      </div>
                      <div className={styles.second_grid_bottom_right_delhi}>
                        <Image
                          src="/image/dj_night.webp"
                          width={0}
                          alt="oscenox"
                          height={0}
                          className={styles.second_grid_bottom_right_delhi_img}
                        />
                        <div className={styles.grid_wapper}>
                          <h5 className={styles.bunk_title}>Dj Night</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
