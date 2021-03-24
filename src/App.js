import { Alert, Col, Container, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import Boton from "./Componentes/Boton";
import { DateTime } from "luxon";

function App() {
  return (
    <Container fluid>
      <Row as="header" className="text-center">
        <Col as="h1" className="mt-5">Presiona el botón para obtener tu recordatorio diario</Col>
      </Row>
      <Boton />
      <Alert as="footer" variant="dark" className="mt-5 text-center fixed-bottom" >
        {DateTime.now().toLocaleString(DateTime.DATETIME_MED)}
      </Alert>
    </Container>

  );
}

export default App;