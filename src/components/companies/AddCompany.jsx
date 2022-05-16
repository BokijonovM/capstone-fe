import React, { useEffect, useState } from "react";
import "./addComp.css";
import { Row, Col, Form } from 'react-bootstrap'
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom'

function AddCompany() {
  const navigate = useNavigate()
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));

  const [compName, setCompName] = useState("")
  const [location, setLocation] = useState("")
  const [size, setSize] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [website, setWebsite] = useState("")
  const [linkedIn, setLinkedIn] = useState("")
  const [banner, setBanner] = useState("")
  const [cover, setCover] = useState("")

  const postComp = async () => {
    const newComp = {
      name: compName,
      description, description,
      location: location,
      companySize: size,
      established: date,
      banner: banner,
      cover: cover,
      linkedin: linkedIn,
      website: website
    }
    try {
      let res = await fetch(`${process.env.REACT_APP_API_MAIN_URL}/companies`, {
        method: "POST",
        body: JSON.stringify(newComp),
        headers: {
          Authorization: dataJson,
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        console.log("comp posted")
        navigate("/new-job")
      } else {
        console.log("post comp error");
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => { }, [])

  return (
    <div className="p-0 m-0 d-flex justify-content-center">
      <div className="add-new-comp-2nd-div">
        <Row className='m-0 mt-2 p-0 w-100 align-content-center align-items-start'>
          <Col><h4>Create company</h4></Col>
        </Row>
        <Row className='m-0 p-0 w-100 align-content-center align-items-start'>
          <Col md={6}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0 " style={{ fontSize: "12px", fontWeight: "600" }}>Company name*</Form.Label>
              <Form.Control onChange={(e) => setCompName(e.target.value)} className="shadow-none" type="text" placeholder="Enter the name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Company location*</Form.Label>
              <Form.Control onChange={(e) => setLocation(e.target.value)} className="shadow-none" type="text" placeholder="Company location" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Company size</Form.Label>
              <Form.Control onChange={(e) => setSize(e.target.value)} className="shadow-none" type="text" placeholder="Number of employees" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Description*</Form.Label>
              <Form.Control onChange={(e) => setDescription(e.target.value)} className="shadow-none" as="textarea" placeholder="About company" rows={7} />
            </Form.Group>

          </Col>
          <Col md={6}>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0" style={{ fontSize: "12px", fontWeight: "600" }}>Established date</Form.Label>
              <Form.Control onChange={(e) => setDate(e.target.value)} className="shadow-none" type="date" placeholder="Select the date" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Website</Form.Label>
              <Form.Control onChange={(e) => setWebsite(e.target.value)} className="shadow-none" type="text" placeholder="Website link" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>LinkedIn</Form.Label>
              <Form.Control className="shadow-none" onChange={(e) => setLinkedIn(e.target.value)} type="text" placeholder="LinkedIn link" />
            </Form.Group>
            <p className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Upload banner image</p>
            <div className="w-100 d-flex">
              <Form.Group className='mr-1' controlId="exampleForm.ControlInput1" style={{ width: "83%" }}>

                <Form.Control className="shadow-none" onChange={(e) => setBanner(e.target.value)} type="text" placeholder="Banner image link" />
              </Form.Group>
              <Button
                style={{ backgroundColor: "#564de5", width: "15%" }}
                className="text-light ml-auto"
                variant="contained"
              >
                UPLOAD
              </Button>
            </div>

            <p className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Upload cover image</p>
            <div className="w-100 d-flex">
              <Form.Group className='mr-1' controlId="exampleForm.ControlInput1" style={{ width: "83%" }}>

                <Form.Control className="shadow-none" onChange={(e) => setCover(e.target.value)} type="text" placeholder="Cover image link" />
              </Form.Group>
              <Button
                style={{ backgroundColor: "#564de5", width: "15%" }}
                className="text-light ml-auto"
                variant="contained"
              >
                UPLOAD
              </Button>
            </div>
            <div className='d-flex justify-content-end mt-5'>
              <Button
                style={{ backgroundColor: "#564de5", width: "15%" }}
                className="text-light ml-auto"
                variant="contained"
                onClick={postComp}
              >
                NEXT
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AddCompany;
