import { Card, Row } from "react-bootstrap";
import frases from "../Frases";

const Recordatorio = () => {
    const frase = frases;

    return (
        <Row as="section" className="justify-content-center mt-5">
            <Card border="info" className="tarjeta">
                <Card.Body>
                    <Card.Text className="text-center">
                        {frase[Math.floor(Math.random() * frase.length)]}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )
};

export default Recordatorio;