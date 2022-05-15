import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CompDetails() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userMe = useSelector((state) => state.userMe);

    const [myComp, setMyComp] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const myToken = localStorage.getItem("MyToken");
    const dataJson = JSON.parse(JSON.stringify(myToken));

    const [singleTech, setSingleTech] = useState("")
    const [compName, setCompName] = useState("")
    const [location, setLocation] = useState("")
    const [salary, setSalary] = useState("")
    const [experience, setExperience] = useState("")
    const [jobType, setJobType] = useState("")


    const fetchMyComp = async () => {
        try {
            let res = await fetch(`${process.env.REACT_APP_API_MAIN_URL}/users/me/companies`, {
                method: "GET",
                headers: {
                    authorization: dataJson,
                },
            });
            if (res.ok) {
                let data = await res.json();
                setMyComp(data);
                setIsLoading(false);
                console.log("my all comps", data);
            } else {
                console.log("fetch my comp error");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyComp();
    }, [])
    return (
        <div>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="mb-0" style={{ fontSize: "12px", fontWeight: "600" }}>Select company</Form.Label>
                <Form.Control className="shadow-none" as="select" onChange={(e) => setCompName(e.target.value)}>
                    {isLoading ? "" : myComp.map(comp => {
                        return <option key={comp._id}>{comp.name}</option>
                    })}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Job Location</Form.Label>
                <Form.Control className="shadow-none" type="text" onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Salary</Form.Label>
                <Form.Control className="shadow-none" type="text" onChange={(e) => setSalary(e.target.value)} placeholder="Enter Salary" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Experience</Form.Label>
                <Form.Control className="shadow-none" as="select" onChange={(e) => setExperience(e.target.value)}>
                    <option>0-2</option>
                    <option>2-4</option>
                    <option>4-6</option>
                    <option>6+</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Job Type</Form.Label>
                <Form.Control className="shadow-none" as="select" onChange={(e) => setJobType(e.target.value)}>
                    <option>B2B</option>
                    <option>Permanent</option>
                </Form.Control>
            </Form.Group>


            <Form.Group className="mr-1" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Tech stack</Form.Label>
                <Form.Control className="shadow-none" as="textarea" rows={3} onChange={(e) => setSingleTech(e.target.value)} />
            </Form.Group>


            <div className="mt-4 text-light d-flex justify-content-end">
                <Button
                    style={{ backgroundColor: "#564de5" }}
                    className="text-light"
                    variant="contained"
                >
                    Post Job
                </Button>
            </div>
        </div>
    )
}

export default CompDetails