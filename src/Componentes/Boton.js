import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import Recordatorio from "./Recordatorio";

const Boton = () => {
    const [presiona, setPresiona] = useState(false);

    return (
        <>
            <Row as="div" className="justify-content-center mt-5">
                <Button onClick={() => setPresiona(true)} variant="info" size="lg">Recordatorio</Button>
            </Row>
            { presiona && <Recordatorio />}
        </>
    )

}

export default Boton;