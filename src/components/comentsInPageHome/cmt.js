import { Col, Row } from "react-bootstrap";
import "./cmt.css";
function ComentUser({name,job,coment,image}) {
  return (
    <>
      
          <div className="card-coment overflow-hidden p-3">
            <div className="iconsStart">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
             {coment}
            </p>
            <div className="user mt-5 d-flex position-relative">
              <img
                className="img-fluid"
                src={image}
                alt=""
              />
              <h4>{name}</h4>
              <h6 className="position-absolute">{job}</h6>
            </div>
          </div>
       
    </>
  );
}

export default ComentUser;
