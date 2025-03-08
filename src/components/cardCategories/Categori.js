import ethnic from "../../assets/img/pic/pic-01.png";
import "./Categori.css";
function CardCategori({categori,image}) {
  return (
    <>
      <div className="color  overflow-hidden">
        <div className="cardc position-relative">
          <h2 className="position-absolute model-categori">{categori}</h2>

          <div className="con-img position-relative">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <button className="position-absolute by">{categori} Wear</button>
        </div>

      </div>
    </>
  );
}

export default CardCategori;
