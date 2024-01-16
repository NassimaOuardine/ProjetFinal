import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewAllBooking = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    const getAllBooking = async () => {
      const allBooking = await retrieveAllBooking();
      if (allBooking) {
        setAllBookings(allBooking.bookings);
      }
    };

    getAllBooking();
  }, []);

  const retrieveAllBooking = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/hotel/fetch/all"
    );
    console.log(response.data);

    return response.data;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>Toutes les réservations</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Hôtel</th>
                  <th scope="col">Nom de l'hôtel</th>
                  <th scope="col">Email de l'hôtel</th>
                  <th scope="col">Contact de l'hôtel</th>
                  <th scope="col">ID de réservation</th>
                  <th scope="col">Nom du client</th>
                  <th scope="col">Contact du client</th>
                  <th scope="col">Arrivée</th>
                  <th scope="col">Départ</th>
                  <th scope="col">Chambres totales</th>
                  <th scope="col">Jours totaux</th>
                  <th scope="col">Statut de la réservation</th>
                  <th scope="col">Montant total à payer</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={
                            "http://localhost:8080/api/hotel/" +
                            booking.hotelImage
                          }
                          className="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{booking.hotelName}</b>
                      </td>
                      <td>
                        <b>{booking.hotelEmail}</b>
                      </td>
                      <td>
                        <b>{booking.hotelContact}</b>
                      </td>
                      <td>
                        <b>{booking.bookingId}</b>
                      </td>
                      <td>
                        <b>{booking.customerName}</b>
                      </td>
                      <td>
                        <b>{booking.customerContact}</b>
                      </td>
                      <td>
                        <b>{booking.checkIn}</b>
                      </td>
                      <td>
                        <b>{booking.checkOut}</b>
                      </td>
                      <td>
                        <b>{booking.totalRoom}</b>
                      </td>

                      <td>
                        <b>{booking.totalDay}</b>
                      </td>
                      <td>
                        <b>{booking.status}</b>
                      </td>
                      <td>
                        <b>{booking.totalAmount}</b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllBooking;
