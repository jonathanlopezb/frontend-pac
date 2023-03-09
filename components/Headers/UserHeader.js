import React from "react";
import { useState, useEffect } from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { getSession } from "../../services/sessionStore";

function UserHeader() {
  const [user, setUser] = useState({});
  const session = getSession();

  const hasSession = async () => {
    // const session = await validSession();
    // setSession(session);
    // console.log("session", session);
    const usuario = await getSession();
    setUser(usuario);
  };

  useEffect(() => {
    hasSession();
  }, []);


  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("assets/img/theme/img-1-1000x600.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="10" md="10">
              <h1 className="display-2 text-white"> {user.name} {user.firt_lastname} {user.second_lastname}</h1>
              <p className="text-white mt-0 mb-5">
                Proyecto - {user.name_project}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserHeader;
