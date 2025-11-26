import "./App.css";
import Slider from "./Slider";

import logo from "./assets/logo.jpg";
import headerImg from "./assets/header.jpg";

import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";

import kafe1 from "./assets/kafe.jpg";
import kafe2 from "./assets/kafe2.jpg";
import makan from "./assets/makan.jpg";
import minum from "./assets/minum.jpg";

import spa1 from "./assets/bawah.jpg";
import spa2 from "./assets/refleksi.jpg";
import spa3 from "./assets/roomcouple.jpg";
import spa4 from "./assets/singleroom.jpg";
import spaMenu from "./assets/menuspa.jpg";

import standar1 from "./assets/standar1.jpg";
import standar2 from "./assets/standar2.jpg";
import standar3 from "./assets/standar3.jpg";
import VIP1 from "./assets/VIP1.jpg";
import VIP2 from "./assets/VIP2.jpg";
import VIP3 from "./assets/VIP3.jpg";

import { useState } from "react";

function App() {
  const [popupType, setPopupType] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [addSecondMenu, setAddSecondMenu] = useState(false);

  const spaMenuList = [
    "Balinesse Massage",
    "Foot Reflexology",
    "Body scrub + body mask",
    "Totok wajah",
    "bubble bath/mandi busa",
    "paket 1",
    "paket 2",
    "paket 3",
    "paket 4",
    "paket 5"
  ];

  // When opening popup, reset addSecondMenu so form starts clean
  const openPopup = (type) => {
    setAddSecondMenu(false);
    setPopupType(type);
  };
  const closePopup = () => {
    setAddSecondMenu(false);
    setPopupType("");
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const submitReservation = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name?.value || "";
    const whatsapp = form.whatsapp?.value || "";
    const guests = form.guests?.value || "";
    const date = form.date?.value || "";
    const time = form.time?.value || "";
    const notes = form.notes?.value || "";
    const menuSpa = form.menuSpa?.value || "";
    const duration1 = form.duration1?.value || "";
    const menuSpa2 = form.menuSpa2?.value || "";
    const duration2 = form.duration2?.value || "";

    if (!name || !whatsapp || !guests || !date || !time) {
      alert("Please fill all required fields");
      return;
    }

    let message = `Hello, I want to make a reservation for ${popupType === "spa" ? "Spa" : "Coffee"}.\n`;
    message += `Name: ${name}\nWhatsApp: ${whatsapp}\nGuests: ${guests}\n`;

    if (popupType === "spa") {
      message += `Menu 1: ${menuSpa} | Duration: ${duration1}\n`;
      if (menuSpa2) {
        message += `Menu 2: ${menuSpa2} | Duration: ${duration2}\n`;
      }
    }

    message += `Date: ${date}\nTime: ${time}\nNotes: ${notes}`;

    const url = `https://wa.me/6282310311117?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    closePopup();
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <nav>
          <img src={logo} alt="C21 Logo" />
          <div className="header-title">C21 Coffee, Spa, & Apartment</div>

          <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className={`desktop-menu ${menuOpen ? "show" : ""}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li className="dropdown">
              <a href="#coffee" onClick={() => setMenuOpen(false)}>C21</a>
              <ul>
                <li><a href="#coffee" onClick={() => setMenuOpen(false)}>C21 Coffee</a></li>
                <li><a href="#spa" onClick={() => setMenuOpen(false)}>C21 Spa</a></li>
                <li><a href="#apartment" onClick={() => setMenuOpen(false)}>C21 Apartment</a></li>
              </ul>
            </li>
            <li><a href="#reservation" onClick={() => setMenuOpen(false)}>Reservation</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="welcome" className="hero">
        <img src={headerImg} alt="Welcome background" />
        <div className="content">
          <h1>Welcome to C21!</h1>
          <p>Where comfort, coffee, and calm meet in one place.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We’re all about creating spaces and experiences that make your day better.
          From cozy apartments to relaxing spa moments, and our coffee spot where
          you can enjoy great drinks and tasty bites, we’ve got a little something
          for everyone. Come explore C21!
        </p>
        <Slider images={[home1, home2, home3]} width="100%" maxHeight="400px" />
      </section>

      {/* COFFEE */}
      <section id="coffee" className="coffee">
        <h2>C21 Coffee</h2>
        <Slider images={[kafe1, kafe2]} width="100%" maxHeight="400px" />
        <p>Step into our cozy coffee spot — the perfect place to unwind.</p>
        <h3>Our Menu</h3>
        <Slider images={[makan, minum]} width="100%" maxHeight="400px" />
      </section>

      {/* SPA */}
      <section id="spa" className="spa">
        <h2>C21 Spa</h2>
        <Slider images={[spa1, spa2, spa3, spa4]} width="100%" maxHeight="400px" />
        <p>Relax and refresh your mind and body in our luxurious spa.</p>
        <h3>Our Menu</h3>
        <Slider images={[spaMenu]} width="100%" maxHeight="400px" />
      </section>

      {/* APARTMENT */}
      <section id="apartment" className="apartment">
        <h2>C21 Apartment</h2>
        <p>Experience modern living with comfort and style.</p>
        <h3>Standard Room Type</h3>
        <Slider images={[standar1, standar2, standar3]} width="100%" maxHeight="400px" />
        <h3>VIP Room Type</h3>
        <Slider images={[VIP1, VIP2, VIP3]} width="100%" maxHeight="400px" />
      </section>

      {/* RESERVATION */}
      <section id="reservation" className="reservation">
        <h2>Reservation</h2>
        <div className="reservation-container">
          <div className="reservation-card">
            <h3>Spa Reservation</h3>
            <p>Enjoy a relaxing spa experience</p>
            <button className="btn-reserve" onClick={() => openPopup("spa")}>Reserve Now</button>
          </div>
          <div className="reservation-card">
            <h3>Coffee Reservation</h3>
            <p>Book your cozy coffee table</p>
            <button className="btn-reserve" onClick={() => openPopup("coffee")}>Reserve Now</button>
          </div>
        </div>
      </section>

      {/* POPUP FORM */}
      <div id="reservationPopup" className={popupType ? "show" : ""}>
        <div className="popup-content">
          <span className="close-btn" onClick={closePopup}>&times;</span>
          <h2>{popupType === "spa" ? "Spa Reservation" : "Coffee Reservation"}</h2>
          <form onSubmit={submitReservation}>
            <input type="text" name="name" placeholder="Name *" required />
            <input type="text" name="whatsapp" placeholder="WhatsApp Number *" required />
            <input type="number" name="guests" placeholder="Number of Guests *" required min="1" />

            {popupType === "spa" && (
              <>
                <label className="label-spa">Spa Menu 1</label>
                <select name="menuSpa" required>
                  <option value="">Select Spa Menu</option>
                  {spaMenuList.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
                </select>

                <input type="text" name="duration1" placeholder="Duration 1 (ex: 60 minutes) *" required />

                {!addSecondMenu && (
                  <button
                    type="button"
                    className="add-menu-btn"
                    onClick={() => setAddSecondMenu(true)}
                  >
                    + Add Another Spa Menu
                  </button>
                )}

                {addSecondMenu && (
                  <>
                    <label className="label-spa">Spa Menu 2 (Optional)</label>
                    <select name="menuSpa2">
                      <option value="">Select Additional Spa Menu</option>
                      {spaMenuList.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
                    </select>

                    <input type="text" name="duration2" placeholder="Duration 2 (ex: 30 minutes)" />
                  </>
                )}
              </>
            )}

            <input type="date" name="date" required />
            <input type="time" name="time" required />
            <textarea name="notes" placeholder="Notes (Optional)"></textarea>
            <button type="submit" className="submit-btn">Send to WhatsApp</button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact">
        <h3>Contact Us</h3>
        <div className="opening-hours">
          <p>We’re Open!</p>
          <p>Come visit us anytime between 09:00 AM – 10:00 PM WITA. We’re here every day to serve you coffee, relaxation, and comfort!</p>
        </div>
        <div className="footer-links">
          <a href="https://wa.me/6282310311117" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/c21coffeespa" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@c21.spa" target="_blank" rel="noopener noreferrer">Tiktok</a>
          <a href="https://share.google/bIy2SBOm2B4ygy7Zo" target="_blank" rel="noopener noreferrer">Location</a>
        </div>
      </footer>
    </>
  );
}

export default App;
