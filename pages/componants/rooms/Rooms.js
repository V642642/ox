import Styles from "../../../styles/rooms.module.css";
import Image from "next/image";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { ImMeter } from "react-icons/im";
import { GiMountainCave } from "react-icons/gi";
import Popup from "../frompopup/Popup";

const Rooms = () => {
  return (
    <div className={Styles.room_room}>
      <div className={Styles.rooms_heading}>
        <h1>Rooms</h1>
        <p>
          We designed rooms as per convenience for solo travelers, families, and
          corporate groups.
        </p>
      </div>

      <div className={Styles.rooms_box}>

        <div className={Styles.rooms_item}>
          <div className={Styles.rooms_img}>
            <Image  src="/image/room_1.jpg" width="356" height="200" alt="room-img"></Image>
          </div>
          <div className={Styles.rooms_text}>
            <h1>Standard Room</h1>
            <h2> From <span>INR ₹1600</span> </h2>
            <p> Mountain-facing rooms with well-equipped Shower, bathtub, marble
              floor and. Comprising 1 double bed for Max 2 adults. </p>
          </div>
          <div className={Styles.item_icon}>
            <h3>
              {" "}
              <ImMeter /> 14 m2
            </h3>
            <h4>
              {" "}
              <AiOutlineUsergroupDelete /> 2 Adults
            </h4>
            <h5>
              {" "}
              <GiMountainCave /> Mountain View
            </h5>
          </div>
          <div className={Styles.rooms_btn}>
            <Popup>
              <button className={Styles.btn} onClick={() => setmodal(true)} >Book Now</button>
            </Popup>
          </div>
        </div>

        <div className={Styles.rooms_item}>
          <div className={Styles.rooms_img}>
            <Image src="/image/room_2.jpg" width="356" height="200" alt="room-img"></Image>
          </div>
          <div className={Styles.rooms_text}>
            <h1>Delux Room</h1>
            <h2>
              From <span>INR ₹2500</span>
            </h2>
            <p>
              Mountain facing rooms with well-equipped Shower, bathtub, AC,
              tea/Coffee maker along with 1 double bed for Max 2 adults.
            </p>
          </div>
          <div className={Styles.item_icon}>
            <h3>
              {" "}
              <ImMeter /> 30 M2
            </h3>
            <h4>
              {" "}
              <AiOutlineUsergroupDelete /> 2 Adults
            </h4>
            <h5>
              {" "}
              <GiMountainCave /> Mountain View
            </h5>
          </div>
          <div className={Styles.rooms_btn}>
            <Popup>
              <button className={Styles.btn} onClick={() => setmodal(true)} >Book Now</button>
            </Popup>
          </div>
        </div>
        <div className={Styles.rooms_item}>
          <div className={Styles.rooms_img}>
            <Image src="/image/room_3.jpg" width="356" height="200" alt="room-img"></Image>
          </div>
          <div className={Styles.rooms_text}>
            <h1>Suits Room</h1>
            <h2>
              From <span>INR ₹5000</span>
            </h2>
            <p>
              Balcony attached rooms with well-equipped bathroom, Shower,
              bathtub, AC, tea/coffee maker for max. 2 adults. 1 sofa and 1 king
              bed
            </p>
          </div>
          <div className={Styles.item_icon}>
            <h3>
              {" "}
              <ImMeter /> 30 M2
            </h3>
            <h4>
              {" "}
              <AiOutlineUsergroupDelete /> 2 Adults
            </h4>
            <h5>
              {" "}
              <GiMountainCave /> Mountain View
            </h5>
          </div>
          <div className={Styles.rooms_btn}>
            <Popup>
              <button className={Styles.btn} onClick={() => setmodal(true)} >Book Now</button>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
