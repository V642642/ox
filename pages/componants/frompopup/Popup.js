import { useState } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import Styles from "../../../styles/Popup.module.css";


const Popup = () => {

    const [modal, setmodal] = useState(false)
    return (
        <>
            <Modal 
                size="lg"
                isOpen={modal}
                toggle={() => { setmodal(!modal) }}
            >
                <ModalHeader className={Styles.from_main} toggle={() => { setmodal(!modal) }}>
                    Oscenox
                </ModalHeader>
                <ModalBody className={Styles.from_main_body}>
                    <div className={Styles.from_body}>
                        <div className={Styles.from_img}></div>
                        
                        <form action="/api/userdata" method="POST" className={Styles.form_input} >
                            <input type="text" placeholder="Your Name"/>
                            <input type="number" placeholder="Your Mobile Number"/>

                            <label htmlFor="">Ckeckin</label>
                            <input type="date" />

                            <label htmlFor="">Ckeckout</label>
                            <input type="date" />

                            <input type="submit" value="Submit" />
                        </form>
                            
                    </div>
                </ModalBody>
            </Modal>
            <button className={Styles.btn} onClick={() => setmodal(true)} >Book Now</button>
        </>
    )
}

export default Popup;