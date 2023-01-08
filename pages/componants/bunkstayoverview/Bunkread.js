import { useState } from "react";
import Styles from "../../../styles/read.module.css";
import useCollapse from "react-collapsed";

const Bunkread = () => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <>
      <div className={Styles.read_card}>
        <p>Are you a backpacker solo traveler or bachelor who is planning a trip to Rishikesh with companions and checking out the best hostels to stay in? Finally! Your quest ends up here. 
Oscenox Bunk Stay in Rishikesh is the perfect choice for you. where you will extend your stay but not your budget.  
</p>
      <section {...getCollapseProps()}> In 2020 on high demand from travelers. Oscenox launched its own hostel. named Oscenox Bunk Stay which is located just beside Swiss Cottage in Rishikesh and is specially designed for backpackers and solo travelers. Some special activities such as cycling. rafting. tracking. bonfires. live music performances. stand-up comedy DJ nights and yoga sessions. are facilitated at much lower prices than others to keep up our guests' adventurous spirit and nightlife amusement. along with some complimentary amenities such as free parking free WiFi. both AC and non-AC rooms. and free internet services to make their visit worth remembering. 
      <br /> <br />  Oscenox Bunk Stay near Tapovan Bypass in Rishikesh is sheltered just beside the Swiss Cottage by Oscenox situated at the hilltop showcasing the bluish-green waters of the Ganga and enchanting mountain views. The property is located between the well-known Lakshman Jhula and Ram Jhula. Every morning. the fresh breeze of the divine river Ganges from 500 meters away surrounds and purifies the property of Oscenox. Trivedi ghat is also the most visited place; it is situated on the bank of the holy river and is only 3.5 km away from the
      <br /> <br />  We are located close to TAPOVAN BYPASS. near Lakshman Jhula & Ram Jhula. 
      The property is just a distance of 500 m from Ganga Valley whereas Trivedi Ghat is just a 
      distance of 3.5 km  <br /> <br/> accommodation. Dwelling here will allow you to hit upon the best niches and amazing natural beauty in Rishikesh.  <br/> <br/> Oscenox Bunk Stay provides you with a hostel that has almost all the amenities of a well-equipped resort at just the cost of an ordinary bunk stay. Additionally. it has a restaurant and cafe on-site. where guests can enjoy all sorts of foods and beverages. Some nightlife entertainment and yoga sessions are also organized to make the visit memorable. The area is popular for adventure activities like rafting. tracking. cycling. and many more. Bike hire and car hire are also available at the accommodation. which will engage all the backers and solo travelers. To make your visit hassle-free. Oscenox bunk stays in Rishikesh offer all complimentary amenities at affordable prices. The natural beauty. special amenities. and decor of Oscenox go perfectly with photography. creating reels. and vlogging as well. 
      Choose to visit Rishikesh and stay in the Oscenox Bunk Stay to explore the evergreen adventures. magnificence. and glory of Rishikesh in charming style and cozy comfort.
   </section>
     <div className={Styles.read_btn}>
     <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded)
        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
     </div>
    </div>
    </>
  )
}

export default Bunkread
