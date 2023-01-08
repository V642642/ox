import Styles from "../../../styles/resort.module.css";
import Accordian from "../../componants/accordian/Accordian";
import Image from 'next/image';

const Resort = () => {
  return (
    <>
      <div className={Styles.resort_heading}>
        <h1>Explore Activities</h1>
      </div>

      <div className={Styles.resort_item}>
        <ul>
          <li>Restaurant</li>
          <li> Birthday</li>
          <li>DJ NIght</li>
          <li> Bike Rent </li>
        </ul>
      </div>

      <div className={Styles.resort_box}>
        <div className={Styles.resort_container}>
          <div className={Styles.resort_img}>
            <Image alt="oscenox" src="/image/restaurent_oscenox.jpeg" width={100} height={100} className={Styles.explore} />
          </div>
          <div
            className={`${Styles.resort_overlay} ${Styles.resort_overlayleft}`}
          >
            <div className={Styles.resort_text}>Restaurant</div>
          </div>
        </div>

        <div className={Styles.dj_img}>
          <div className={Styles.dj_img_stay}>Dj Night</div>
        </div>

        <div className={Styles.resort_container}>
          <div className={Styles.resort_img_3}>
          <Image alt="oscenox" src="/image/resort_3.jpg" width={100} height={100} className={Styles.explore} />
          </div>
          <div
            className={`${Styles.resort_overlay} ${Styles.resort_overlayleft}`}
          >
            <div className={Styles.resort_text}>Birthday</div>
          </div>
        </div>

        <div className={Styles.resort_container}>
          <div className={Styles.resort_img_4}>
          <Image alt="oscenox" src="/image/resort_4.jpeg" width={100} height={100} className={Styles.explore} />
          </div>
          <div
            className={`${Styles.resort_overlay} ${Styles.resort_overlayleft}`}
          >
            <div className={Styles.resort_text}>Corporate Trip</div>
          </div>
        </div>

        <div className={Styles.resort_container}>
          <div className={Styles.resort_img_5}>
          <Image alt="oscenox" src="/image/resort_5.jpg" width={100} height={100} className={Styles.explore} />
          </div>
          <div
            className={`${Styles.resort_overlay} ${Styles.resort_overlayleft}`}
          >
            <div className={Styles.resort_text}>Bike Rent</div>
          </div>
        </div>

        <div className={Styles.resort_container}>
          <div className={Styles.resort_img_6}>
          <Image alt="oscenox" src="/image/resort_6.png" width={100} height={100} className={Styles.explore} />
          </div>
          <div
            className={`${Styles.resort_overlay} ${Styles.resort_overlayleft}`}
          >
            <div className={Styles.resort_text}>BikeTrip</div>
          </div>
        </div>

        <div className={Styles.resort_container}>
          <div className={Styles.resort_img_7}>
          <Image alt="oscenox" src="/image/rafting.webp" width={100} height={100} className={Styles.explore} />
          </div>
          <div
            className={`${Styles.resort_overlay} ${Styles.resort_overlayleft}`}
          >
            <div className={Styles.resort_text}>Rafting</div>
          </div>
        </div>

        <div className={Styles.resort_container}>
          <div className={Styles.resort_img_8}>
          <Image alt="oscenox" src="/image/resort_8.jpg" width={100} height={100} className={Styles.explore} />
          </div>
          <div
            className={`${Styles.resort_overlay} ${Styles.resort_overlayleft}`}
          >
            <div className={Styles.resort_text}>Paragliding</div>
          </div>
        </div>
      </div>

      <Accordian />
    </>
  );
};

export default Resort;
