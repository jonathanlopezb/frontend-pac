import React, { useState } from 'react';
import { useRouter } from "next/router";

import {
    Button,
    Card,
    FormGroup,
    Form,
    Input,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    CardTitle,
    Row,
    Col,
} from "reactstrap";
// layout for this page
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2,
} from "variables/charts.js";

import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import Footer from "../../../components/Footers/AdminFooter";


const App = () => {
    const router = useRouter();

    const [fields, setFields] = useState(['']);


    // <-- Componente Input Field -->
    const FieldComponent = ({ fields, setFields }) => {
        const handleAddField = () => {
            setFields([...fields, '']);
        };

        const handleRemoveField = (index) => {
            const newFields = [...fields];
            newFields.splice(index, 1);
            setFields(newFields);
        };

        const handleFieldChange = (event, index) => {
            const newFields = [...fields];
            newFields[index] = event.target.value;
            setFields(newFields);
        };

        return (
            <div>
                {fields.map((field, index) => (
                    <div key={index}>
                        <Input value={field} onChange={(event) => handleFieldChange(event, index)} />
                        <Button onClick={() => handleRemoveField(index)}>Eliminar campo</Button>
                    </div>
                ))}
                <Button onClick={handleAddField}>Agregar campo</Button>
            </div>
        );
    };
    // <-- // Componente Input Field -->




    const voler = () => {
        router.back();
    };

    return (
        <>
            <AdminNavbar />
            <Container className="mt-3">
                <div className="pl-lg-4">
                    <FormGroup>
                        <label>Palabras claves</label>
                        {/* {inputs.map((input, index) => (
                            <Input
                                className="form-control-alternative m-3"
                                key={index}
                                type="text"
                                value={input}
                                placeholder="Escribe el texto aquí " />

                        ))} */}
                <FieldComponent fields={fields} setFields={setFields} />


                        <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                        >
                            Guardar Cambios
                        </Button>
                        <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                            onClick={voler}
                        >
                            Volver
                        </Button>
                    </FormGroup>
                </div>
            </Container>
            <Footer />

        </>
    );
};

export default App;