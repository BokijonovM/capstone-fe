import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from "@mui/material/Button";
import { setTechStackAction } from '../../../redux/action/index.js'
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

    const [techStack, setTechStack] = useState([])
    const [singleTech, setSingleTech] = useState("")

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
        fetchMyComp()
        console.log("texhxxxx", techStack)
    }, [])
    return (
        <div>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="mb-0" style={{ fontSize: "12px", fontWeight: "600" }}>Select company</Form.Label>
                <Form.Control className="shadow-none" as="select">
                    {isLoading ? "" : myComp.map(comp => {
                        return <option key={comp._id}>{comp.name}</option>
                    })}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Job Location</Form.Label>
                <Form.Control className="shadow-none" type="text" placeholder="Enter location" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Salary</Form.Label>
                <Form.Control className="shadow-none" type="text" placeholder="Enter Salary" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Experience</Form.Label>
                <Form.Control className="shadow-none" as="select">
                    <option>0-2</option>
                    <option>2-4</option>
                    <option>4-6</option>
                    <option>6+</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Job Type</Form.Label>
                <Form.Control className="shadow-none" as="select">
                    <option>B2B</option>
                    <option>Permanent</option>
                </Form.Control>
            </Form.Group>
            <p className="mb-0 mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>Tech stack</p>
            <div className='d-flex align-items-center align-content-center'>
                <Form.Group className="mr-1" controlId="exampleForm.ControlTextarea1" style={{ width: "85%" }}>
                    <Form.Control className="shadow-none" onChange={(e) => setSingleTech(e.target.value)} />
                </Form.Group>
                <Button
                    style={{ backgroundColor: "#564de5", width: "10%" }}
                    className="text-light  ml-auto"
                    variant="contained"
                    onClick={() => {
                        dispatch(setTechStackAction(singleTech))
                        setTechStack(singleTech)
                        console.log(techStack)
                    }}
                >
                    Add
                </Button>
            </div>

            <div className="mt-5 text-light d-flex justify-content-end">
                <Button
                    style={{ backgroundColor: "#564de5" }}
                    className="text-light mt-4"
                    variant="contained"
                >
                    Post Job
                </Button>
            </div>
        </div>
    )
}

export default CompDetails