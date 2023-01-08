import { GrInstagram } from 'react-icons/gr';
import Styles from "../../../styles/socilemedia.module.css";
import Image from 'next/image';

const SocileMedia = () => {
    return (
        <>
            <div className={Styles.socile_heading}>
                <h1>We Are on Social media</h1>
            </div>



            {/* socile media img  */}

            <div className={Styles.socile_section}>

                <div className={Styles.socile_wrap}>
                    <div className={Styles.socile_images}>
                        
                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_1}>
                                    <Image src="/image/logo-removebg-preview.webp" width={100} height={100} className={Styles.soci_img} alt="oscenox" />
                                </div>
                            </div>
                            <div className={Styles.caption_one}>
                                <h1>Oscenox Moments</h1>
                                <p>Share your memories with</p>
                                <span> <GrInstagram /> @oscenox</span>
                                <a href="#">See More</a>
                            </div>
                        </div>

                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_2}>
                                <Image src="/image/insta_2-min.jpg" width={100} height={100} className={Styles.soci_img} />
                                </div>
                            </div>
                            <a href='https://www.instagram.com/p/Cl0Qelxvh_I/?igshid=YmMyMTA2M2Y=' target="blank" className={Styles.caption}>
                                <h1>@oscenox</h1>
                                <p> <GrInstagram /> </p>
                            </a>
                        </div>

                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_3}>
                                <Image src="/image/insta_3-min.jpg" width={100} height={100} className={Styles.soci_img} />
                                </div>
                            </div>
                            <a href='https://www.instagram.com/p/CjCwJwrNwQq/?igshid=YmMyMTA2M2Y=' target="blank" className={Styles.caption}>
                                <h1>@oscenox</h1>
                                <p> <GrInstagram /> </p>
                            </a>
                        </div>
                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_4}>
                                <Image src="/image/insta_4-min.jpg" width={100} height={100} className={Styles.soci_img} />
                                </div>
                            </div>
                            <a href='https://www.instagram.com/p/Chl8tuToMte/?igshid=YmMyMTA2M2Y=' target="blank" className={Styles.caption}>
                                <h1>@oscenox</h1>
                                <p> <GrInstagram /> </p>
                            </a>
                        </div>
                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_5}>
                                <Image src="/image/insta_5-min.jpg" width={100} height={100} className={Styles.soci_img} />
                                </div>
                            </div>
                            <a href='https://www.instagram.com/p/CgokNW2Lmv7/?igshid=YmMyMTA2M2Y=' target="blank" className={Styles.caption}>
                                <h1>@oscenox</h1>
                                <p> <GrInstagram /> </p>
                            </a>
                        </div>
                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_6}>
                                <Image src="/image/insta_6-min.jpg" width={100} height={100} className={Styles.soci_img} />
                                </div>
                            </div>
                            <a href='https://www.instagram.com/p/Ce3TpwetuBs/?igshid=YmMyMTA2M2Y=' target="blank" className={Styles.caption}>
                                <h1>@oscenox</h1>
                                <p> <GrInstagram /> </p>
                            </a>
                        </div>
                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_7}>
                                <Image src="/image/insta_7-min.jpg" width={100} height={100} className={Styles.soci_img} />
                                </div>
                            </div>
                            <a href='https://www.instagram.com/p/Cei6xD_tX30/?igshid=YmMyMTA2M2Y=' target="blank" className={Styles.caption}>
                                <h1>@oscenox</h1>
                                <p> <GrInstagram /> </p>
                            </a>
                        </div>
                        <div className={Styles.socile_gallery}>
                            <div className={Styles.images_img}>
                                <div className={Styles.insta_img_8}>
                                <Image src="/image/insta_8-min.jpg" width={100} height={100} className={Styles.soci_img} />
                                </div>
                            </div>
                            <a href='https://www.instagram.com/p/CbwbozqtmHH/?igshid=YmMyMTA2M2Y=' target="blank" className={Styles.caption}>
                                <h1>@oscenox</h1>
                                <p> <GrInstagram /> </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SocileMedia;