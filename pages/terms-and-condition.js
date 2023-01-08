import styles from "../styles/terms.module.css";

const Terms = () => {
  return (
    <>
      <div className={styles.terms_box_banner}>
        <div className={styles.terms_banner_wapper}>
          <h1>Terms and Condition</h1>
        </div>
      </div>
      <div className={`${styles.terms_content} container`}>
        <ul>
          <li>
            The primary guest must be at least 18 years of age to be able to
            check into the hotel.
          </li>
          <li>
            It is mandatory for guests to present valid photo identification at
            the time of check-in. According to government regulations, a valid
            Photo ID has to be carried by every person above the age of 18
            staying at the hotel. The identification proofs accepted are Aadhar
            Card, Driving License, Voter ID Card, and Passport. Without Original
            copy of valid ID the guest will not be allowed to check-in.
          </li>
          <li>
            Should any action by a guest be deemed inappropriate by the hotel,
            or if any inappropriate behaviour is brought to the attention of the
            hotel, the hotel reserves the right, after the allegations have been
            investigated, to take action against the guest.
          </li>
          <li>
            Certain destinations may have different policies for specific times
            during the year.
          </li>
          <li>
            Guests shall be liable for any damage, except normal wear and tear
            to Hotel asset. Guest shall keep the Hotel room in a good condition
            and maintain hygiene and cleanliness.
          </li>
          <li>
            Certain policies are booking specific and are informed to the
            customer while making the booking.
          </li>
          <li>
            Guests may be contacted closer to their check-in date to confirm the
            arrival status or arrival time through calls or messages. In case,
            we do not receive a response from the guest after multiple attempts,
            the booking may be put on hold or cancelled. In case of
            availability, The Postcard Hotel will try to reinstate your booking
            when you contact us back or make a payment through our multitude of
            payment options.
          </li>
          <li>
            As we continue to strive to improve our services, we may reach out
            to guests to get a feedback of their experience through calls or
            messages.
          </li>
          <li>
            Bookings made under packages will not be eligible for oscenox.com.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Terms;
