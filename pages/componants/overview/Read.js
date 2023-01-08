import { useState } from "react";
import useCollapse from "react-collapsed";
import Styles from "../../../styles/read.module.css";

const Read = () => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <>
      <div className={Styles.read_card}>
        <p>Are you a Mountain person, Fun lover, Party person, or Adventurer, looking for the best hotel
        or resort to stay in Rishikesh with all facilities that suit your vacation choices and can make your
        visit memorable? Then you have reached the right spot.</p>
      <section {...getCollapseProps()}> Swiss Cottage Rishikesh by Oscenox is situated at the hilltop and the 
      divine Ganga river flows by. It is the best resort in Rishikesh that is all prepared and set to serve you 
      and make your trip exciting. It is the best place to spend you
      vacation experiencing a wide range of natural vibes that are splendor like no other. 
      The property is fully furnished and well-decorated. 
      The warm and cozy rooms with beautiful balcony views will provide you with the comfort that will make you 
      re-energize yourself for the day. It has an excellent interior to provide you with a luxurious stay and the 
      finest amenities and services to enrich your stay with us. If you ever dreamed of knowing how it feels to be 
      living on a hilltop surrounded by Mother Nature, the Swiss cottage in Rishikesh is the best resort to fulfill 
      your dreams.  <br /> <br /> We have a restaurant, a cafe, and a bar on site that serves all sorts of foods 
      and beverages. Banquets include veg, non-veg, local cuisine, Chinese, Indian and south Indian as well. The food 
      offered here is hygienic, delicious, cooked, and served with love. To make your visit hassle-free this hotel in 
      Rishikesh offers you some complimentary amenities such as free parking, free WiFi, both AC, and non-AC rooms, 
      free toiletries, and internet services. A Group of kind staff is assigned to assist the guests personally. 
      Swiss Cottage by Oscenox is the only resort in Rishikesh that is easily accessible to you at affordable prices 
      and is family-friendly with additional perks of activities like Camping in Rishikesh, Rafting, walking tour, 
      bike tour, Air Safari, BBQ facilities, Bonfire, etc. Events like live music performances, standup comedy, 
      DJ nights, and yoga sessions are also facilitated. Whether you are a party person, nature lover, or adventurer, 
      staying here will make you feel closer to nature during the day and take your enjoyment to the next level with 
      amazing events at night. 
      <br /> <br />  Swiss Cottage Rishikesh is owned and managed by Oscenox which serves major sustainable goals. 
      It is a hospitality company that serves people with its best services in states like Uttarakhand, Delhi, 
      and Himachal Pradesh, and cities like Rishikesh, Shimla, Manali, and Gurgaon. 
      It is a one-stop destination that fulfills all the introductory requirements for a fun and soothing vacation. 
      Being a new-age budget boutique hotel brand, oscenox offers its restaurant, Bar, 
      and in-and-out travel solutions at convenient & affordable prices. It majorly works according to the culture 
      and environment of the city, reviews, and requests put on by guests.
      <br /> <br />  We are located close to TAPOVAN BYPASS, near Lakshman Jhula & Ram Jhula. 
      The property is just a distance of 500 m from Ganga Valley whereas Trivedi Ghat is just a 
      distance of 3.5 km   </section>
     <div className={Styles.read_btn}>
     <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
     </div>
    </div>
    </>
  )
}

export default Read



