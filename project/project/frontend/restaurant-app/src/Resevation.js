import React from "react";
import "./Reservation.css";

const ReservationForm = () => {
  return (
    <>
      <section className="banner">
        <h2>BOOK YOUR TABLE NOW</h2>
        <div className="card-container">
          <div className="card-img"></div>
          <div className="card-content">
            <h3>Reservation</h3>
            <form>
              <div className="form-row">
                <select name="days">
                  <option value="day select">select Days</option>
                  <option value="sunday">Sunday</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>

                <select name="hours">
                  <option value="select hours">Select Hours</option>
                  <option value="1.00">1 hour</option>
                  <option value="1.30">1.30 hour</option>
                  <option value="2.00">2 hour</option>
                  <option value="2.30">2.30 hour</option>
                </select>
              </div>
              <div className="form-row">
                <input type="text" placeholder="Full Name" />
                <input type="number" placeholder="Phone Number" />
              </div>
              <div className="form-row">
                <input type="number" placeholder="How Many Members?" min="1" />
                <button type="submit" className="submit">
                  BOOK TABLE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationForm;
