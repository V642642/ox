import Image from "next/image";
import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "../../../styles/Navbar.module.css";
import Popup from "../frompopup/Popup"
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={expanded}
        fixed="top"
        bg="light"
        variant="light"
        className={`${styles.nav_bar}`}
      >
        <Container>
          <Link href="/">
            <Image
              src="/image/logo-removebg-preview.webp"
              width={190}
              height={40}
              alt="OSCENOX"
            ></Image>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.modified_nav} onClick={() => setExpanded(false)}>
              <Link href="#hotel" className={styles.nav_items}>
                Hotel
              </Link>
              <Link href="#Restaurant" passHref className={styles.nav_items}>
                Restaurant
              </Link>
              <Link href="#"  className={styles.nav_items}>
                Bunk Stay
              </Link>
              <Link href="#activity" passHref  className={styles.nav_items}>
                Activity
              </Link>
              <Link href="/experience" passHref className={styles.nav_items}>
                Experience
              </Link>
              <Link href="/about" passHref className={styles.nav_items}>
                About us
              </Link>
              <Link href="/contact" passHref className={styles.nav_items}>
                Contact us
              </Link>
              <Popup>
                <Button variant="success" className={styles.buttn} onClick={() => setmodal(true)}>
                  BOOKING
                </Button>
                </Popup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
