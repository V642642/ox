import Link from "next/link";
import styles from "../styles/Cancellation.module.css";

const cancellation = () => {
  return (
    <>
      <div>
        <div className={styles.cancellation_box}>
          <div className={styles.cancellation_banner_wapper}>
            <h1>Cancellation and Refund</h1>
          </div>
        </div>
      </div>
      <div className={`${styles.custom_pagi} container-fluid p-3`}>
        <Link href="/">HOME </Link> <span>&gt; cancellation-refund</span>
      </div>
      <div className={`${styles.cancellation_content} container`}>
        <div>
          <h1>Cancellation policy</h1>
          <ul className="px-5 mt-4">
            <li>
              Cancelling a reservation at www.oscenox.com is as fast and easy as
              booking one.
            </li>
            <li>
              We would love to have you but in case your plans change, our
              simple cancellation process makes sure you receive a quick
              confirmation and fast refunds.
            </li>
            <li>
              We do not charge cancellation fees for bookings cancelled before
              12 noon (local hotel time) 15 days from the date of arrival.
              However, for reservations cancelled (late cancellation) within 15
              days of arrival, post 12 noon (local hotel time) or in case of a
              non-arrival on the date of check-in, the total stay charges in
              full or equivalent to the deposit made (whichever is higher) will
              be levied.
            </li>
          </ul>
        </div>
        <div>
          <h1>Cancellation policy during black-out period</h1>
          <ul className="px-5 mt-4">
            <li>
              20th December to 5th January - no cancellation charge if cancelled
              before 90 days from the date of arrival, thereafter total stay in
              full or 100% deposit will be charged.
            </li>
          </ul>
        </div>
        <div>
          <h1>Cancellations during the stay</h1>
          <ul className="px-5 mt-4">
            <li>
              In case you decide to shorten your booking post the check-in date,
              you will be charged for the entire stay for which the reservation
              was originally made for.
            </li>
          </ul>
        </div>
        <div>
          <h1>Refund policy</h1>
          <ul className="px-5 mt-4">
            <li>
              In case of a reservation cancelled outside the 15 day period from
              the date of arrival, the refund will be processed within 15
              working days from the date of receipt of bank account details from
              the customer.(not valid for black-out period)
            </li>
            <li>
              Credit card transaction or processing fee if any will be deducted
              from the refund.
            </li>
            <li>Refund will be processed in local currency only.</li>
          </ul>
        </div>
        <div>
          <h1>Refund for late cancellations</h1>
          <ul className="px-5 mt-4">
            <li>
              No refund will be processed for late cancellations (cancellations
              received within 15 days from the arrival date) or for the no-shows
              on the date of arrival in any case whatsoever.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default cancellation;
