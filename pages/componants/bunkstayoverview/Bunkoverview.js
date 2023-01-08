import React from 'react';
import Styles from '../../../styles/overview.module.css';
import { HiUserGroup } from 'react-icons/hi';
import { GiMusicSpell } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { GiFlowers } from 'react-icons/gi';
import { GiRiver } from 'react-icons/gi';
import { GiCaravel } from 'react-icons/gi';
import Bunkread from './Bunkread';
import Offers from '../offers/Offers';

const Bunkoverview = () => {
  return (
    <>
            <div className={Styles.overview_heading}>
                <h1>Overview</h1>
            </div>


            <Bunkread/>
          

            <div className={Styles.review_item}>
                <div className={Styles.icon_name}>
                    <p><HiUserGroup /> </p>
                    <h1>Family friendly</h1>
                </div>
                <div className={Styles.icon_name}>
                    <p><GiMusicSpell /> </p>
                    <h1>Dj Night</h1>
                </div>
                <div className={Styles.icon_name}>
                    <p><FaGlassCheers /> </p>
                    <h1>Bar</h1>
                </div>
                <div className={Styles.icon_name}>
                    <p><GiFlowers /> </p>
                    <h1>Garden</h1>
                </div>
                <div className={Styles.icon_name}>
                    <p><GiRiver /> </p>
                    <h1>River side</h1>
                </div>
                <div className={Styles.icon_name}>
                    <p><GiCaravel /> </p>
                    <h1>Adventure</h1>
                </div>
            </div>

            <Offers />

        </>
  )
}

export default Bunkoverview
