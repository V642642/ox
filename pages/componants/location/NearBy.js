import Styles from "../../../styles/nearBy.module.css";
import { GiByzantinTemple } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';
import { GiTowerBridge } from 'react-icons/gi';
// import { HiShoppingCart } from 'react-icons/hi';


const NearBy = () => {
    return (
        < >

            <div className={Styles.near_by}>
                <div className={Styles.nearby_headung}>
                    <h1>Near by Attractions</h1>
                </div>


                <div className={Styles.all_item}>

                    <div className={Styles.near_item}>
                        <div className={Styles.icon}>
                            <p> <GiByzantinTemple/> </p>
                        </div>
                        <div className={Styles.item_text}>
                            <h1>Triveni Ghat</h1>
                            <p>Temple</p>
                            <span>4.2 km</span>
                        </div>
                    </div>

                    <div className={Styles.near_item}>
                        <div className={Styles.icon}>
                            <p> <TbBeach/> </p>
                        </div>
                        <div className={Styles.item_text}>
                            <h1>Goa Beach</h1>
                            <p>Tourist Beach</p>
                            <span>1.1 km</span>
                        </div>
                    </div>

                    <div className={Styles.near_item}>
                        <div className={Styles.icon}>
                            <p> <GiTowerBridge/> </p>
                        </div>
                        <div className={Styles.item_text}>
                            <h1>Ram Jhula</h1>
                            <p>Tourist Place</p>
                            <span>0.6 Km</span>
                        </div>
                    </div>

                    <div className={Styles.near_item}>
                        <div className={Styles.icon}>
                            <p> <GiTowerBridge/> </p>
                        </div>
                        <div className={Styles.item_text}>
                            <h1>Lakshman Jhula</h1>
                            <p>Tourist Place</p>
                            <span>0.6 km</span>
                        </div>
                    </div>
                </div>


            </div>
            
        </>
    )
}

export default NearBy