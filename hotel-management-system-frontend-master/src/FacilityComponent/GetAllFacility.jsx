import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GetAllFacility = () => {
  const [facilities, setFacilities] = useState([]);

  const retrieveAllFacilities = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/facility/fetch"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllFacilities = async () => {
      const allFacilities = await retrieveAllFacilities();
      if (allFacilities) {
        setFacilities(allFacilities.facilities);
      }
    };

    getAllFacilities();
  }, []);

  return (
    <div className="list-group form-card border-color">
      <Link
        to="#"
        className="list-group-item list-group-item-action bg-color custom-bg-text"
      >
        <b>Tous les équipements</b>
      </Link>

      {facilities.map((facility) => {
        return (
          <Link
            to="#"
            className="list-group-item list-group-item-action text-color custom-bg"
          >
            <b>{facility.name}</b>
          </Link>
        );
      })}
    </div>
  );
};

export default GetAllFacility;
