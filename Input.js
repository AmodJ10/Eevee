import React, { useState } from "react";
// import axios from 'axios';

const Input = () => {
    const [Vehicle, setVehicle] = useState("");
    const [City, setCity] = useState("");

    const handle1OnChange = (event) => {
        setVehicle(event.target.value);
    };
    const handle2OnChange = (event) => {
        setCity(event.target.value);
    };
    const handleSubmit = () => {
        console.log(Vehicle);
        console.log(City);
    };
    const handlePost = async () => {
        console.log("Name : " + City);
        let data = await fetch("http://127.0.0.1:5000/nearestLocations/" + City, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let parsedData = await data.json()
        console.log(parsedData)
    }

    return (
        <>
            <div
                className="container-fluid"
                style={{
                    position: "absolute",
                    top: "180px",
                    right: "32%",
                    height: "150px",
                    width: "500px",
                }}
            >
                <h2>Enter The Required Parameters</h2>
                <button
                    type="submit"
                    class=" btn border-success text-success "
                    onClick={handlePost}
                >
                    Submit
                </button>
                <form>
                    <div className="form-group my-3">
                        <label htmlFor="inputPara" style={{ fontSize: "20px" }}>
                            Vehicle
                        </label>
                        <input
                            type="Para"
                            class="form-control my-2"
                            id="exampleInputPara1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Vehicle Type"
                            style={{ height: "70px", fontSize: "16px" }}
                            onChange={handle1OnChange}
                            value={Vehicle}
                        />
                    </div>
                    <div class="form-group my-3">
                        <label htmlFor="inputPara" style={{ fontSize: "20px" }}>
                            City
                        </label>
                        <input
                            type="Para"
                            class="form-control my-2"
                            id="exampleInputPara4"
                            aria-describedby="emailHelp"
                            placeholder="Enter City Here"
                            style={{ height: "70px" }}
                            onChange={handle2OnChange}
                            value={City}
                        />
                    </div>
                    <button
                        type="submit"
                        class=" btn border-success text-success "
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Input;
