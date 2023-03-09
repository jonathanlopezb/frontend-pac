import React from "react";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
import Swal from "sweetalert2";
import Apiclient, { SESION } from "../../services/Apiclient";
import { storeSession, validSession } from "../../services/sessionStore";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [loanding, setLoanding] = useState(false);
  const router = useRouter();

  const Loanding = () => {
    return (
      <button className="btn btn-primary btn-sm mb-2" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Cargando...
      </button>
    );
  };

  const login = async (e) => {
    e.preventDefault();
    if (correo || password !== "") {
      setLoanding(true);
      const response = await Apiclient.post(SESION, { correo, password });
      console.log(response)
      setLoanding(false);
      if (response.status === "ok") {
        await storeSession(response.data);
        console.log(response.data);
        router.push("/admin/dashboard");
      }else {
        console.log("error");
        Swal.fire({
          title: "¡Datos incorrectos!",
          text: "Verifica en tu email electrónico y vuelve a ingresarlos.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }else {
      console.log("error");
      Swal.fire({
        title: "¡Error!",
        text: "Verifique los datos ingresados",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent">
            <div className="h2 text-center mt-2 mb-3">
              <small>Inicia Sesión</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    name="correo"
                    className="searchText"
                    placeholder="Escribe tu email electrónico..."
                    autoComplete="on"
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    name="password"
                    className="searchText"
                    placeholder="Escribe tu contraseña..."
                    autoComplete="on"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                {loanding == true ? (
                  <Loanding />
                ) : (
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={login}
                  >
                    Ingresar
                  </Button>
                )}
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
