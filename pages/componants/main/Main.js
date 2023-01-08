import Styles from "../../../styles/main.module.css";
import { ImLocation2 } from 'react-icons/im';
import Head from "next/head";
import dynamic from 'next/dynamic';



const Popup = dynamic(() => import("../frompopup/Popup"),{
    ssr: false
});
const Maingallery = dynamic(() => import("../maingallery/Maingallery"),{
    ssr: false
});
const Overview = dynamic(() => import("../overview/Overview"),{
    ssr: false
});
const Rooms = dynamic(() => import("../rooms/Rooms"),{
    ssr: false
});
const SocileMedia = dynamic(() => import("../socilemedia/SocileMedia"),{
    ssr: false
});
const Resort = dynamic(() => import("../resort/Resort"),{
    ssr: false
});


const Main = () => {
  return (
   <>

    <Head>
        <title>Swiss Cottage Rishikesh by Oscenox | Best Place to Stay Near the Ganga River</title>
        <meta name="description" content="Swiss Cottage Rishikesh by Oscenox is the best hotel in Rishikesh, Tapovan. Book your resort directly with 10-20% off to stay near Ram Jhula and the Ganga river."/>
    </Head>



    <div className={Styles.main_heading}>
        <div className={Styles.left_text}>
            <h1>Swiss Cottage by oscenox</h1>
            <p> <span> <ImLocation2/> </span> By Pass Road, Tapovan, Rishikesh, Uttarakhand 249192, India</p>
            <h3> <ImLocation2/> Rishikesh</h3>
        </div>
        <div className={Styles.right_text}>
            <p>Starting Price</p>
            <h1> <span>₹</span> 1899.00/ Per Night</h1>
            <h3>10% OFF</h3>
            <Popup>
            <button className={Styles.btn} onClick={() => setmodal(true)} >Book Now</button>
            </Popup>
        </div>
    </div>


    

     <Maingallery/>
     <Overview/> 
     <Rooms/> 
     <SocileMedia />
     <Resort />
   </>
  );
};

export default Main;
