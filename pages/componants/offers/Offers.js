import Styles from "../../../styles/offers.module.css";
import Image from "next/image";

const Offers = () => {
  return (
    <>
    <div className={Styles.offers}>
        <div className={Styles.offers_item}>
            <h1>SUPER COOL OFFERS</h1>
            <p>Are you looking for the coolest Vacation in <span>rishikesh</span></p>
            <h2>Call our sales team to customise your order</h2>
            <a className={Styles.offers_btn} href="tel: 8882007004">Call Now</a>
        </div>

        <div className={Styles.offers_item}>
        <Image alt="oscenox" src="/image/from_img.jpg" width={100} height={100} className={Styles.offers_img} />
        </div>
        <div className={Styles.offers_item}>
        <Image alt="oscenox" src="/image/newimg.png" width={100} height={100} className={Styles.offers_img} />
        </div>

        <div className={Styles.offers_item}>
            <p>Are you looking for the coolest Vacation in <span>rishikesh</span></p>
            <h2>Call our sales team to customise your order</h2>
            <a href="tel: 8882007004">Call Now</a>
        </div>
    </div>


     
    </>
  )
};

export default Offers