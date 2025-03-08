import ethnic from "../../assets/img/pic/pic-01.png";
import "./Categori.css"
function CardCategori() {
  return (
    <>
    
    <div className="cardc position-relative">
        <h2 className="position-absolute">Ethnic</h2>
      <div className="con-img">
        <img className="img-fluid" src={ethnic} alt="" />
      </div>
      <button>Ethnic Wear</button>
    </div>
    </>
  );
}

export default CardCategori;
