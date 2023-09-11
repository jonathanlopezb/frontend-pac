// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// // node.js library that concatenates classes (strings)
// import classnames from "classnames";
// // javascipt plugin for creating charts
// import Chart from "chart.js";
// // react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
// // reactstrap components
// import {
//   Button,
//   Card,
//   FormGroup,
//   Form,
//   Input,
//   CardHeader,
//   CardBody,
//   NavItem,
//   NavLink,
//   Nav,
//   InputGroup,
//   Table,
//   Container,
//   CardTitle,
//   Row,
//   Col,
// } from "reactstrap";
// // layout for this page
// import {
//   chartOptions,
//   parseOptions,
//   chartExample1,
//   chartExample2,
// } from "variables/charts.js";
// import Swal from "sweetalert2";

// import Apiclient, { PROJECT_TITLE } from "../../../services/Apiclient";
// import { getSession } from "../../../services/sessionStore";

// import AdminNavbar from "../../../components/Navbars/AdminNavbar";
// import Footer from "../../../components/Footers/AdminFooter";

// export default function Actividades() {
//   const router = useRouter();
//   const [value, setValue] = useState("");

//   const [fields, setFields] = useState(['']);


//   // <-- Componente Input Field -->
//   const FieldComponent = ({ fields, setFields }) => {
//     const handleAddField = () => {
//       setFields([...fields, '']);
//     };

//     const handleRemoveField = (index) => {
//       const newFields = [...fields];
//       newFields.splice(index, 1);
//       setFields(newFields);
//     };

//     const handleFieldChange = (event, index) => {
//       const newFields = [...fields];
//       newFields[index] = event.target.value;
//       setFields(newFields);
//     };

//     return (
//       <>
//         {fields.map((field, index) => (
//           <>
//           <tr>
//           <th scope="row">
//             <InputGroup className="input-group-alternative mb-3">
//               <Input
//                 type="text"
//                 name=""
//                 id=""
//                 // onChange={handleChange}
//                 required
//               />
//             </InputGroup>
//           </th>

//           <td>
//             <InputGroup className="input-group-alternative mb-3">
//               <Input
//                 type="text"
//                 name=""
//                 id=""
//                 // onChange={handleChange}
//                 required
//               />
//             </InputGroup>
//           </td>
//           <td>
//             <InputGroup className="input-group-alternative mb-3">
//               <Input
//                 type="text"
//                 name=""
//                 id=""
//                 // onChange={handleChange}
//                 required
//               />
//             </InputGroup>
//           </td>
//           <td>
//             <InputGroup className="input-group-alternative mb-3">
//               <Input
                
//                 name=""
//                 id=""
//                 // onChange={handleChange}
//                 required
//               />
//             </InputGroup>
//           </td>

//         </tr>


//                 <Button onClick={() => handleRemoveField(index)}>Eliminar fila</Button>
//                 </>
//         ))}
//         <Button onClick={handleAddField}>Agregar fila</Button>
//         </>
//     );
//   };
//   // <-- // Componente Input Field -->

//   const stoteTitle = async () => {
//     const user = await getSession();
//     const data = {
//       titulo: value,
//       id_user: user.id,
//     };
//     console.log(data);
//     const res = await Apiclient.post(PROJECT_TITLE, data);
//     console.log(res);
//     if (res.status === "ok") {
//       Swal.fire({
//         title: "Felicidades!",
//         text: "Tu Título del proyecto ha sido guardada satisfactoriamente",
//         icon: "success",
//         confirmButtonText: "Aceptar",
//       });
//       router.push("/admin/dashboard");
//     } else {
//       alert("error");
//     }
//   };

//   const voler = () => {
//     router.back();
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <Container className="mt-4">
//         <div className="pl-lg-4">
//           <FormGroup>
//             <label>Cronograma de Actividades</label>
//             <Table className="align-items-center table-flush" responsive>
//               <thead className="thead-dark text-lg-center">
//                 <tr>
//                   <th scope="col" style={{ color: " #fff" }}>
//                     Descripción Actividad{" "}
//                   </th>
//                   <th scope="col" style={{ color: " #fff" }}>
//                     Inicio{" "}
//                   </th>
//                   <th scope="col" style={{ color: " #fff" }}>
//                     Final{" "}
//                   </th>
//                   <th scope="col" style={{ color: " #fff" }}>
//                     Ejecución en n° meses
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">
//                     <InputGroup className="input-group-alternative mb-3">
//                       <Input
//                         type="text"
//                         name=""
//                         id=""
//                         // onChange={handleChange}
//                         required
//                       />
//                     </InputGroup>
//                   </th>

//                   <td>
//                     <InputGroup className="input-group-alternative mb-3">
//                       <Input
//                         type="text"
//                         name=""
//                         id=""
//                         // onChange={handleChange}
//                         required
//                       />
//                     </InputGroup>
//                   </td>
//                   <td>
//                     <InputGroup className="input-group-alternative mb-3">
//                       <Input
//                         type="text"
//                         name=""
//                         id=""
//                         // onChange={handleChange}
//                         required
//                       />
//                     </InputGroup>
//                   </td>
//                   <td>
//                     <InputGroup className="input-group-alternative mb-3">
//                       <Input
                        
//                         name=""
//                         id=""
//                         // onChange={handleChange}
//                         required
//                       />
//                     </InputGroup>
//                   </td>

//                 </tr>
//                   <FieldComponent value="" fields={fields} setFields={setFields} />
//               </tbody>
//             </Table>
//             <Button
//               className="mt-4"
//               color="primary"
//               type="button"
//               onClick={stoteTitle}
//             >
//               Guardar Cambios
//             </Button>
//             <Button
//               className="mt-4"
//               color="primary"
//               type="button"
//               onClick={voler}
//             >
//               Volver
//             </Button>
//           </FormGroup>
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// }




import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import Apiclient, { UPDATE_PROJECT } from "../../../services/Apiclient";

import {
  Button,
  Card,
  Label,
  FormText,
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
import { getSession } from "../../../services/sessionStore";
import Swal from "sweetalert2";

export default function Objetivo() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const store = async () => {
    const user = await getSession();
    var data = {
      actividades: value.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
    };

    console.log(data);
    const res = await Apiclient.post(`${UPDATE_PROJECT}/${user.id}`, data);
    if (res.status === "ok") {
      Swal.fire({
        title: "Felicidades!",
        text: "Tu fase ha sido guardada",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      router.push("/admin/dashboard");
    } else {
      alert("error");
    }
    console.log("dat", res);
  };

  const voler = () => {
    router.back();
  };

  return (
    <>
      <AdminNavbar />
      <Container className="mt-3">
        <div className="pl-lg-4">
          <FormGroup>
            <label>Cronograma de Actividades</label>
            <FormGroup>
              <Input
                id="actividades"
                name="actividades"
                type="file"
                onChange={(v) => setValue(v.target.value)}
              />
            </FormGroup>
            <Button
              className="mt-4"
              color="primary"
              type="button"
              onClick={store}
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
}
