import Link from "next/link";
import styles from "../../../styles/oscenoxIndia.module.css";
import { useState } from "react";
import useCollapse from "react-collapsed";
import Image from "next/image";

const OscenoxIndia = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <div className={`${styles.oscenox_box} container`}>
        <div className={styles.oscenox_big}>
          <p>Oscenox India</p>
        </div>
        <div className={styles.oscenox_detail}>
          <div className={styles.content_img_box}>
            <Image
              src="/image/oscenox-india1.jpg"
              className={styles.content_img}
              width={0}
              height={0}
              alt="oscenox"
            />
          </div>
          <div className={styles.content_text}>
            <p>
              Oscenox is a new-age budget boutique hotel brand founded by Mr.
              Arjun Singh. The company was incorporated in January 2018 to build
              a business model of creating an experience Center for affordable
              and pleasant travel. The company intends to provide its guests
              with the best hospitality services and a comfortable environment
              through customization to their needs by giving them customized
              kits and add-on services to meet their needs and demands.
              <br />
              <br />
              We offer stylish, elegant yet comfortable, and tasteful spaces
              that exceed our guest&apos;s anticipations. Also, we provide in
              and out travel solutions from interstate taxis, rental cars,
              Air-Bus-Train tickets, local taxis, and much more at affordable
              prices. <br />
              <br />
            </p>
            <p className={styles.desktop_content}>
              We endeavor to create memorable traveling experiences by providing
              easy, convenient, and hassle-free services to travelers. We
              provide our guests with well-equipped, safe, and hygienic
              accommodations along with amenities like free wifi, Air
              conditioning, a Hot water system, and many more.
              <br />
              <br />
              We are presently serving our fairest in numerous states such as
              Uttarakhand, Delhi, and Himanchal Pradesh, and cities like
              Rishikesh, Shimla, Manali, Keylong, Kinnaur, Gurgaon, Jibi, Kullu
              valley. Furthermore, we have the forethought to extend our
              foremost services in Lucknow, Varanasi, Ayodhya, Mandi, Dehradun,
              Katra, and Srinagar, also. We selected some of the best industries
              and brands to make our guests stay comfortable and hassle-free.
              Oscenox Team altogether aims to create the best remembrances for
              visitors.
            </p>
            <section {...getCollapseProps()}>
              <p>
                We endeavor to create memorable traveling experiences by
                providing easy, convenient, and hassle-free services to
                travelers. We provide our guests with well-equipped, safe, and
                hygienic accommodations along with amenities like free wifi, Air
                conditioning, a Hot water system, and many more.
                <br />
                <br />
                We are presently serving our fairest in numerous states such as
                Uttarakhand, Delhi, and Himanchal Pradesh, and cities like
                Rishikesh, Shimla, Manali, Keylong, Kinnaur, Gurgaon, Jibi,
                Kullu valley. Furthermore, we have the forethought to extend our
                foremost services in Lucknow, Varanasi, Ayodhya, Mandi,
                Dehradun, Katra, and Srinagar, also. We selected some of the
                best industries and brands to make our guests stay comfortable
                and hassle-free. Oscenox Team altogether aims to create the best
                remembrances for visitors.
              </p>
            </section>

            <div className={styles.desktop_readbtn}>
              <Link className={styles.desktop_btn} href="/about">
                Explore more
              </Link>
            </div>
            <div className={styles.readbtn}>
              <button
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OscenoxIndia;
