import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { BotonContext } from "../Contextos/BotonContext";
import Recordatorio from "./Recordatorio";

const Boton = () => {
    const [presiona, setPresiona] = useState(false);

    return (
        <BotonContext.Provider value={{ presiona, setPresiona }}>
            <Row as="div" className="justify-content-center mt-5">
                <Button onClick={() => setPresiona(!presiona)} variant="info" size="lg">Recordatorio</Button>
            </Row>
            { presiona && <Recordatorio />}
        </BotonContext.Provider>
    )

}

export default Boton;