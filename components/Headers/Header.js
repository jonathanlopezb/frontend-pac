import React from "react";
import Link from "next/link";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Header() {
  return (
    <>
      <div className="header pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            {/* 
            <Row >
            {dataHeader.map((item, index) => (
              <Col lg="6" xl="6" key={index} >
                <Card className="card-stats mb-4 mb-xl-0 m-2">
                  <Link href="#">
                    <a>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          {item.title}
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                          <i className={item.icon} />
                        </div>
                      </Col>
                    </Row>
                    {/* <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> 
                  </CardBody>
                    </a>
                </Link>
                </Card>
              </Col>
             ))} 
            </Row> */}
          </div>
        </Container>
      </div>
    </>
  );
}

const dataHeader = [
  {
    title: "Resumen ejecutivo",
    description: "Resumen ejecutivo",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Planteamiento del Problema",
    description: "Planteamiento",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Estado del Arte",
    description: "Estado del Arte",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "objetivo",
    description: "objetivo",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Estado del Arte",
    description: "Resumen ejecutivo",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Metodología",
    description: "Resumen ejecutivo",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Trayectoria y Capacidad en Investigación",
    description: "Trayectoria y Capacidad en Investigacion",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Identificación y Caracterización",
    description: "Identificación y Caracterización",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Bibliografía",
    description: "bibliografia",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Impacto Ambiental del Proyecto",
    description: "Impacto Ambiental del Proyecto",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Aspectos de Propiedad Intelectual",
    description: "Aspectos de Propiedad Intelectual",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
  {
    title: "Posibles Evaluadores",
    description: "Posibles Evaluadores",
    href: "/admin/header",
    icon: "ni ni-collection",
  },
];


export default Header;
