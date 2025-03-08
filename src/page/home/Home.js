import { Container } from "react-bootstrap";
import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";
import CardCategori from "../../components/cardCategories/Categori";
import "./Home.css"
function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Container>
        {/* cardC=>cardCategori */}
        <section className=" cardC">
          <h2 >Shop by Categories</h2>
         <div>
         <CardCategori />
         </div>
        </section>
      </Container>
    </>
  );
}

export default Home;
