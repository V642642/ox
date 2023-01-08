import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../../styles/carousel.module.css";
import Popup from "../frompopup/Popup";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselSlider = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className={styles.carousel_heading}>
            <h3>Exclusive Deal</h3>
            <Link className={styles.view_button} href="/experience">
              <span>Veiw All </span>
              <i class="fa-solid fa-arrow-right" style={{ color: "red" }}></i>
            </Link>
          </div>
          <div>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className={styles.forDesktop}>
                <div className={styles.first_slider}>
                  <Image
                    src="/image/rooms_one.webp"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.first_slider_img}
                  />
                  <div className={styles.slider_wapper}>
                    <div className={styles.dicountTag}>
                      <p>UPTO 30% Off</p>
                    </div>
                    <div className={styles.sliderDetailsText}>
                      <div>
                        <h5>Resort</h5>
                        <Popup>
                          <button onClick={() => setmodal(true)}>
                            Book Now
                          </button>
                        </Popup>
                      </div>
                      <p>
                        <span>Rishikesh</span>
                        <br />
                        <span className={styles.price_box}>
                          <span>From</span>
                          <i class="fa-sharp fa-solid fa-indian-rupee-sign">
                            2000
                          </i>
                          <small>Per Night</small>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.forDesktop}>
                <div className={styles.second_slider}>
                  <Image
                    src="/image/IMG-20221215-WA0002.webp"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.second_slider_img}
                  />
                  <div className={styles.slider_wapper}>
                    <div className={styles.dicountTag}>
                      <p>UPTO 20% Off</p>
                    </div>
                    <div className={styles.sliderDetailsText}>
                      <div>
                        <h5>Hotel</h5>
                        <Popup>
                          <button onClick={() => setmodal(true)}>
                            Book Now
                          </button>
                        </Popup>
                      </div>
                      <p>
                        New Delhi
                        <br />
                        <span className={styles.price_box}>
                          <span>From</span>
                          <i class="fa-sharp fa-solid fa-indian-rupee-sign">
                            2000
                          </i>
                          <small>Per Night</small>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.forDesktop}>
                <div className={styles.third_slider}>
                  <Image
                    src="/image/bunkStay.webp"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.third_slider_img}
                  />
                  <div className={styles.slider_wapper}>
                    <div className={styles.dicountTag}>
                      <p>UPTO 35% Off</p>
                    </div>
                    <div className={styles.sliderDetailsText}>
                      <div>
                        <h5>Bunk Stay</h5>
                        <Popup>
                          <button onClick={() => setmodal(true)}>
                            Book Now
                          </button>
                        </Popup>
                      </div>
                      <p>
                        Rishikesh <br />
                        <span className={styles.price_box}>
                          <span>From</span>
                          <i class="fa-sharp fa-solid fa-indian-rupee-sign">
                            700
                          </i>
                          <small>Per Night</small>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.forDesktop}>
                <div className={styles.fourth_slider}>
                  <Image
                    src="/image/caro-hotel.jpg"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.fourth_slider_img}
                  />
                  <div className={styles.slider_wapper}>
                    <div className={styles.dicountTag}>
                      <p>UPTO 25% Off</p>
                    </div>
                    <div className={styles.sliderDetailsText}>
                      <div>
                        <h5>Resort</h5>
                        <Popup>
                          <button onClick={() => setmodal(true)}>
                            Book Now
                          </button>
                        </Popup>
                      </div>
                      <p className={styles.mussoorie_upcoming}>
                        mussoorie (upcoming) <br />
                        <span className={styles.price_box}>
                          <span>From</span>
                          <span className={styles.upcoming}>
                            <i class="fa-sharp fa-solid fa-indian-rupee-sign">
                              2500
                            </i>
                          </span>
                          <small>Per Night</small>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.forDesktop}>
                <div className={styles.fiveth_slider}>
                  <Image
                    src="/image/restaurant-le.jpg"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.fiveth_slider_img}
                  />
                  <div className={styles.slider_wapper}>
                    <div className={styles.dicountTag}>
                      <p>UPTO 28% Off</p>
                    </div>
                    <div className={styles.sliderDetailsText}>
                      <div>
                        <h5>Restaurant</h5>
                        <Popup>
                          <button onClick={() => setmodal(true)}>
                            Book Now
                          </button>
                        </Popup>
                      </div>
                      <p>
                        New Delhi <br />
                        <span className={styles.price_box}>
                          <span>From</span>
                          <i class="fa-sharp fa-solid fa-indian-rupee-sign">
                            450
                          </i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.forDesktop}>
                <div className={styles.sixth_slider}>
                  <Image
                    src="/image/restaurent_oscenox.jpeg"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.sixth_slider_img}
                  />
                  <div className={styles.slider_wapper}>
                    <div className={styles.dicountTag}>
                      <p>UPTO 17% Off</p>
                    </div>
                    <div className={styles.sliderDetailsText}>
                      <div>
                        <h5>Restaurant</h5>
                        <Popup>
                          <button onClick={() => setmodal(true)}>
                            Book Now
                          </button>
                        </Popup>
                      </div>
                      <p>
                        Rishikesh <br />
                        <span className={styles.price_box}>
                          <span>From</span>
                          <i class="fa-sharp fa-solid fa-indian-rupee-sign">
                            300
                          </i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className={styles.formobile}>
            <div className={styles.first_slider}>
            <Image
                    src="/image/rooms_one.webp"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.first_slider_img}
                  />
              <div className={styles.slider_wapper}>
                <div className={styles.dicountTag}>
                  <p>UPTO 30% Off</p>
                </div>
                <div className={styles.sliderDetailsText}>
                  <div>
                    <h5>Resort</h5>
                    <Popup>
                      <button onClick={() => setmodal(true)}>Book Now</button>
                    </Popup>
                  </div>
                  <p>
                    <span>Rishikesh</span>
                    <br />
                    <span className={styles.price_box}>
                      <span>From</span>
                      <i class="fa-sharp fa-solid fa-indian-rupee-sign">2000</i>
                      <small>Per Night</small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.second_slider}>
            <Image
                    src="/image/IMG-20221215-WA0002.webp"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.second_slider_img}
                  />
              <div className={styles.slider_wapper}>
                <div className={styles.dicountTag}>
                  <p>UPTO 20% Off</p>
                </div>
                <div className={styles.sliderDetailsText}>
                  <div>
                    <h5>Hotel</h5>
                    <Popup>
                      <button onClick={() => setmodal(true)}>Book Now</button>
                    </Popup>
                  </div>
                  <p>
                    New Delhi
                    <br />
                    <span className={styles.price_box}>
                      <span>From</span>
                      <i class="fa-sharp fa-solid fa-indian-rupee-sign">2000</i>
                      <small>Per Night</small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.third_slider}>
            <Image
                    src="/image/bunkStay.webp"
                    width={0}
                    height={0}
                    alt="oscenox"
                    className={styles.third_slider_img}
                  />
              <div className={styles.slider_wapper}>
                <div className={styles.dicountTag}>
                  <p>UPTO 35% Off</p>
                </div>
                <div className={styles.sliderDetailsText}>
                  <div>
                    <h5>Bunk Stay</h5>
                    <Popup>
                      <button onClick={() => setmodal(true)}>Book Now</button>
                    </Popup>
                  </div>
                  <p>
                    Rishikesh <br />
                    <span className={styles.price_box}>
                      <span>From</span>
                      <i class="fa-sharp fa-solid fa-indian-rupee-sign">700</i>
                      <small>Per Night</small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSlider;
