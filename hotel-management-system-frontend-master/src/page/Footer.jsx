import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">
                    Système de réservation d'hôtel
                  </h5>

                  <p>
                    Être un hôtel ouvert 24h/24 et 7j/7 est l'un de nos
                    meilleurs équipements car nous pouvons offrir à nos clients
                    une liberté d'accès illimitée depuis du lever au coucher du
                    soleil et partout entre les deux. Tu n'es plus vous devez
                    vous soucier de quoi que ce soit à l'hôtel à tout moment !
                  </p>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Inscription gratuite</span>
                <Link to="/user/customer/register" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded bg-color text-color"
                  >
                    S'inscrire!
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
