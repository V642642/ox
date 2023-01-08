import Accordion from "react-bootstrap/Accordion";

const Accordian = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="m-1">
            <Accordion.Header>
              Is it the best place to stay in Rishikesh?
            </Accordion.Header>
            <Accordion.Body>
              Swiss Cottage in Rishikesh by Oscenox is surrounded by beautiful
              Mountains and the Holy river Ganga offers authentic views and
              fresh air from the balcony during the sunrise and sunset as well.
              Talking about the second most important requirement is food, Swiss
              cottage in Rishikesh has a restaurant that has the best and all
              kinds of food in Rishikesh. The resort offers the best travel and
              adventure solutions with all basic amenities that will make your
              vacation hassle-free. It is a family-friendly resort with a high
              number of guest satisfaction ratings.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="m-1">
            <Accordion.Header>
              What is the benefit to book directly?
            </Accordion.Header>
            <Accordion.Body>
              We provide 10% - 20% off for guests who book directly. There are
              some other perks included as per the policies of Swiss Cottage in
              Rishikesh.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="m-1">
            <Accordion.Header>
              What are the check-in and check-out times of a resort?
            </Accordion.Header>
            <Accordion.Body>
              Tentative timings for check-in is 10:00 AM and Check-out timing is
              11:30 AM and may change as per the convenience of guests.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="m-1">
            <Accordion.Header>
              Can I book Swiss Cottage in Rishikesh by Oscenox for Events?
            </Accordion.Header>
            <Accordion.Body>
              Yes, Please call our sales team at 8882007004 Swiss Cottage in
              Rishikesh facilitates paid Events such as Stand-up comedy, Themed
              dinner nights, Happy hour, and live music performances. Whereas
              yoga classes are organized for free.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="m-1">
            <Accordion.Header>
              Is Bhandari Swiss cottage in Rishikesh owned by Oscenox?
            </Accordion.Header>
            <Accordion.Body>
              Yes. Bhandari Swiss Cottage in Rishikesh was acquired by Oscenox.
              Oscenox not only renamed it Swiss Cottage in Rishikesh but also
              renovated and redesigned its interior and put in luxurious
              facilities. It also added activities like camping, rafting, and
              much more keeping in mind the affordability and convenience of
              guests. After the acquisition, the guest satisfaction rating has
              taken a hike.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="m-1">
            <Accordion.Header>
              Are Swiss cottage in Rishikesh scenes located next to the Ganga
              riverside?
            </Accordion.Header>
            <Accordion.Body>
              Yes, Our Swiss Cottage in Rishikesh by Oscenox is the only Resort
              near the Ganga river, just at a distance of 1.5 km. Swiss Cottage
              in Rishikesh is surrounded by authentic beautiful mountains and
              the divine Ganga river flows by, As it is A River And Mountain
              facing resort. We offer 24 hrs of the best hospitality along with
              beautiful balcony views.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="m-1">
            <Accordion.Header>
              Resort distance from Lakshmana Jhula & Ram Jhula?
            </Accordion.Header>
            <Accordion.Body>
              Lakshman Jhula is approximately 1.2 km away and Ram Jhula is
              nearly 650 m away from the property. Swiss Cottage in Rishikesh
              offers in-and-out travel solutions from interstate taxis, rental
              cars, Air-Bus-Train tickets, local taxis, and much more at
              affordable prices
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className="m-1">
            <Accordion.Header>
              What are the services available in the Swiss cottage in Rishikesh?
            </Accordion.Header>
            <Accordion.Body>
              Swiss Cottage in Rishikesh by oscenox offers <br />
              • Entertainment and family services with indoor and outdoor play
              areas. <br />
              • Food and Drink on additional charges, a coffee house on site,
              and special diet menus on request. <br />
              • Wheelchair accessibility <br />
              • Outdoor Fireplace, picnic area, outdoor furniture, sun terrace,
              and BBQ facilities (additional charges)
              <br />
              • General facilities such as shared lounge/ TV area, Special
              facilities for disabled guests and pets, soundproof rooms, packed
              lunches, car hire, Designated smoking rooms, non-smoking rooms,
              and shuttle service is on additional charges. <br />
              • Public transport and tickets are additional charges. <br />
              • Business facilities such as Fax/ photocopying and
              meeting/banquet facilities. <br />
              • Full-furnished safety and security services.
              <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className="m-1">
            <Accordion.Header>
              Are pick-up and drop-off services available at Swiss Cottage in
              Rishikesh?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we provide pick-up and drop-off services on guest&apos;s special
              requests
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Accordian;
