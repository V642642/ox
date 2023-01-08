import Styles from "../../../styles/Callnow.module.css";

const callnow = () => {
  return (
    <>
    <div className={Styles.callnow_div}>
      <a className={Styles.call_btn} href="tel: 8882007004">Call Now</a>
    </div>
    </>
  )
}

export default callnow