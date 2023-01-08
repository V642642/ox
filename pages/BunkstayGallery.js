import React from "react";
import Styles from "../styles/BunkstayGallery.module.css";
import Bunkoverview from "./componants/bunkstayoverview/Bunkoverview";

const BunkstayGallery = () => {
  return (
    <>
      <div className={Styles.bunk_images_grid_home}>
        <div
          className={`${Styles.bunk_mian_galler_img} ${Styles.bunk_images_grid_home_col_2} `}
        ></div>
        <div className={Styles.bunk_side_img}>
          <div className={`${Styles.bunk_mian_galler_img_side} `}></div>
          <div className={`${Styles.bunk_mian_galler_img_side} `}></div>
        </div>
      </div>

      <div className={Styles.line_img}>
        <div className={`${Styles.bunk_mian_galler_img_line} `}></div>
        <div className={`${Styles.bunk_mian_galler_img_line} `}></div>
        <div className={`${Styles.bunk_mian_galler_img_line} `}></div>
        <div className={`${Styles.bunk_mian_galler_img_line} `}></div>
      </div>
      <Bunkoverview />
    </>
  );
};

export default BunkstayGallery;
