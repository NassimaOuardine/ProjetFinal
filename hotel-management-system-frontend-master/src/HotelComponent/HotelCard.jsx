import { Link } from "react-router-dom";
import LocationNavigator from "../LocationComponent/LocationNavigator";
import HotelCarousel from "./HotelCarousel";

const HotelCard = (hotel) => {
  return (
    <div className="col">
      <div className="card border-color rounded-card card-hover product-card custom-bg h-100">
        <img
          src={"http://localhost:8080/api/hotel/" + hotel.item.image2}
          className="card-img-top rounded mx-auto d-block m-2"
          alt="img"
          style={{
            maxHeight: "270px",
            maxWidth: "100%",
            width: "auto",
          }}
        />

        <div className="card-body text-color">
          <h5 className="card-title d-flex justify-content-between">
            <div>
              <b>{hotel.item.name}</b>
            </div>
            <LocationNavigator
              item={{
                id: hotel.item.location.id,
                city: hotel.item.location.city,
              }}
            />
          </h5>
          <p className="card-text">{hotel.item.description}</p>
          <p className="text-color">
            <b>
              <i>Chambre totale :</i> {hotel.item.totalRoom}
            </b>
          </p>
        </div>
        <div className="card-footer">
          <div className="text-center text-color">
            <p>
              <span>
                <h4>Prix par jour : DH {hotel.item.pricePerDay}</h4>
              </span>
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to={`/hotel/${hotel.item.id}/location/${hotel.item.location.id}`}
              className="btn bg-color custom-bg-text"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
