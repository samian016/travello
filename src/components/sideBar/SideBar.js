import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

import React from "react";

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button className="btn-danger" onClick={handleShow}>
          Covid
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Covid Situation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Globally, as of 4:40pm CEST, 29 October 2021, there have been
            245,373,039 confirmed cases of COVID-19, including 4,979,421 deaths,
            reported to WHO. As of 28 October 2021, a total of 6,838,727,352
            vaccine doses have been administered.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default SideBar;
