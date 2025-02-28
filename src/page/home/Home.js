import { Container } from "react-bootstrap";
import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";

function Home() {
    return ( 
       <>
       <NavBar/>
       <Container>
        <Header/>
       </Container>
       </>

     );
}

export default Home;