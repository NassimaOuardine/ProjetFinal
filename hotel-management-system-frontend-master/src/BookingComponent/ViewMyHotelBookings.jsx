import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const ViewMyHotelBookings = () => {
  let user = JSON.parse(sessionStorage.getItem("active-hotel"));

  const [allBookings, setAllBookings] = useState([]);

  const [bookingStatus, setBookingStatus] = useState([]);

  const [updateBookingStatus, setUpdateBookingStatus] = useState({
    bookingId: "",
    bookingStatus: "",
  });

  const handleInput = (e) => {
    setUpdateBookingStatus({
      ...updateBookingStatus,
      [e.target.name]: e.target.value,
    });
  };

  const retrieveAllBookingStatus = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/hotel/fetch/status"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllBooking = async () => {
      const allBooking = await retrieveAllBooking();
      if (allBooking) {
        setAllBookings(allBooking.bookings);
      }
    };

    const getAllBookingStatus = async () => {
      const allBookingStatus = await retrieveAllBookingStatus();
      if (allBookingStatus) {
        setBookingStatus(allBookingStatus);
      }
    };

    getAllBookingStatus();
    getAllBooking();
  }, []);

  const retrieveAllBooking = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/hotel/fetch/bookings?hotelId=" +
        user.hotelId
    );
    console.log(response.data);
    return response.data;
  };

  const updateHotelBookingStatus = (e) => {
    fetch("http://localhost:8080/api/book/hotel/update/status", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookingStatus),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log("response", res);
        setUpdateBookingStatus({
          bookingId: "",
          bookingStatus: "",
        });

        setAllBookings(res.bookings);
      });
    });

    e.preventDefault();
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card  mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>Réservations d'hôte</h2>
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
                  <th scope="col">Montant total à payer</th>
                  <th scope="col">Statut de la réservation</th>
                  <th scope="col">Mettre à jour le statut de la réservation</th>
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
                        <b>{booking.totalAmount}</b>
                      </td>
                      <td>
                        <b>{booking.status}</b>
                      </td>

                      <td>
                        {(() => {
                          if (booking.status === "Pending") {
                            return (
                              <Link
                                to={`/hotel/verify/booking/${booking.id}`}
                                className="nav-link active btn btn-sm"
                                aria-current="page"
                              >
                                <b className="text-color">
                                  Vérifier la réservation
                                </b>
                              </Link>
                            );
                          }
                        })()}
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

export default ViewMyHotelBookings;
