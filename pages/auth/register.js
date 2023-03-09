import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
// import Countries from "countries-api/lib/data/Countries.json";

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
  UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
import Apiclient, { REGISTER } from "../../services/Apiclient";

function Register() {
  const router = useRouter();
  const [countries, setCountries] = useState({});
  const [loanding, setLoanding] = useState(false);
  const [value, setValue] = useState({
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    fecha_nacimiento: "",
    tipo_documento: "",
    cedula: "",
    correo: "",
    password: "",
    nacionalidad: "",
    pais_residencia: "",
    ciudad: "",
    direccion: "",
    sexo: "",
    intereses: "",
    nivel_estudio: "",
    linea_investigacion: "",
    institucion: "",
    user_twitter: "",
    user_linkedin: "",
    rol: ""
  });
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
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const registrar = async (e) => {
    e.preventDefault();
    let data = {
      primer_nombre: value.primer_nombre,
      segundo_nombre: value.segundo_nombre,
      primer_apellido: value.primer_apellido,
      segundo_apellido: value.segundo_apellido,
      fecha_nacimiento: value.fecha_nacimiento,
      tipo_documento: value.tipo_documento,
      cedula: value.cedula,
      correo: value.correo,
      password: value.password,
      nacionalidad: value.nacionalidad,
      pais_residencia: value.pais_residencia,
      ciudad: value.ciudad,
      direccion: value.direccion,
      sexo: value.sexo,
      intereses: value.intereses,
      nivel_estudio: value.nivel_estudio,
      linea_investigacion: value.linea_investigacion,
      institucion: value.institucion,
      user_twitter: value.user_twitter,
      user_linkedin: value.user_linkedin,
      rol: value.rol,
    };
    console.log(data);
    // const isValid =  userSchema.isValid(data);
    setLoanding(true);
    const result = await Apiclient.post(REGISTER, data);
    setLoanding(false);

    console.log(result);
    if (result.status === "ok") {
      Swal.fire({
        title: "¡Felicitaciones!",
        text: "Te has registrado con éxito,  se te ha enviado la contraseña al correo electrónico ya puedes iniciar sesión ",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(function () {
        router.push("/auth/login");
      });

    } else {
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
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-2">
            <div className="text-muted text-center mt-2">
              <small>Registro de investigadores</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup>
                <label>Primer Nombre</label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      {/* <i className="ni ni-hat-3" /> */}
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    name="primer_nombre"
                    id="primer_nombre"
                    placeholder="Primer Nombre..."
                    autoComplete="on"
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Segundo Nombre</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="segundo_nombre"
                    id="surname"
                    placeholder="Segundo Nombre..."
                    autoComplete="on"
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Primer Apellido</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="primer_apellido"
                    id="first_lastname"
                    placeholder="Primer Apellido..."
                    autoComplete="on"
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Segundo Apellido</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="segundo_apellido"
                    id="second_lastname"
                    placeholder="Segundo Apellido..."
                    autoComplete="on"
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Fecha de nacimiento</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="date"
                    name="birthday"
                    id="birthday"
                    autoComplete="on"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Tipo de identificación</label>
                <InputGroup className="input-group-alternative mb-3">
                  <select
                    className="form-control"
                    id="type_document"
                    name="type_document"
                    onChange={handleChange}
                    required
                  >
                    <option>Seleccione tu tipo de identificación</option>
                    <option value="cc">Cédula de ciudadanía</option>
                    <option value="ce">Cédula de extranjería</option>
                  </select>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Número de identificación</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="number"
                    name="cedula"
                    id="document_id"
                    placeholder="Escribe tu número de identificación..."
                    autoComplete="on"
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Correo electrónico</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="email"
                    name="correo"
                    id="email"
                    placeholder="Correo electrónico..."
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Número de contacto</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Escriba su número de contacto..."
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Nacionalidad</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="nationality"
                    id="nationality"
                    placeholder="Escriba su nacionalidad..."
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Ciudad</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Escriba su lugar de residencia..."
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Dirección</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Escriba su Dirección..."
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Sexo</label>
                <InputGroup className="input-group-alternative mb-3">
                  <select
                    className="form-control"
                    id="sexo"
                    name="sexo"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione su sexo</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="no binario">No binario</option>
                    <option value="no responde">Prefiero no responder</option>
                  </select>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <label>Profesión</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="profesion"
                    id="profesion"
                    placeholder="Escriba su profesion..."
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              {/* <FormGroup>
                <label>Nombre del proyecto</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    type="text"
                    name="name_project"
                    id="name_project"
                    placeholder="Escriba su Dirección..."
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup> */}
              <FormGroup>
                <label>Institución</label>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="Institución por la que inscribe el proyecto"
                    type="text"
                    name="institution"
                    id="institution"
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              {/* <FormGroup>
                <label>Area del conocimiento</label>
                <InputGroup className="input-group-alternative mb-3">
                  <select
                    className="form-control"
                    id="conocimiento"
                    name="conocimiento"
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Seleccione un Area del conocimiento
                    </option>
                    <option value="ciencias_de_la_vida">
                      Ciencias de la Vida
                    </option>
                    <option value="ciencias humanas">Ciencias Humanas</option>
                    <option value="ciencias fisicas">Ciencias Fisicas</option>
                    <option value="ciencias de la tierra">
                      Ciencias de la tierra
                    </option>
                  </select>
                </InputGroup>
              </FormGroup> */}
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        Acepto los{" "}
                        <Link href="/terms" className="text-muted">
                          <a>política de datos</a>
                        </Link>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                {loanding == true ? (
                  <Loanding />
                ) : (
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={registrar}
                  >
                    Registrar
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

Register.layout = Auth;

export default Register;
