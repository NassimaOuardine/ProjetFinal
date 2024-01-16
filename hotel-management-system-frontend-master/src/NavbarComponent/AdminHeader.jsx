import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    window.location.reload(true);
    navigate("/home");
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/admin/add-location"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Ajouter un emplacement</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/add-facility"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Ajouter une installation</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/hotel/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Inscrire l'utilisateur de l'hôtel</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/hotel/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Ajouter un hôtel</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="user/admin/booking/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Voir toutes les réservations</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to=""
          className="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Déconnexion</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
