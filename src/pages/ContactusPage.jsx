import React from 'react'
import ContactUs from '../components/ContactUs';
import styles from "../style";

import {
  Service,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "../components";

const ContactusPage = () => {
  return (
    <div className=" w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar name={"About"} />
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
        {/* heading */}
            {/* <h1 className={`${styles.boxWidth} ${styles.heading2} text-gradient`}>Contact Us</h1>
            <p>
                
            </p> */}
            <ContactUs />

        </div>
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
  </div>
  )
}

export default ContactusPage
