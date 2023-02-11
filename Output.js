import React from 'react';
import "./Output.css"

const Output = () => {
    return (
        <div className="container">
            <div className='container-fluid' >
                <h2>Nearest Charging Station</h2>
                <form>
                    <div className="form-group my-5" >
                        <label htmlFor="inputPara" style={{ fontSize: '20px' }} >City</label>
                        <input type="Para" className="form-control my-2" id="exampleInputPara1" aria-describedby="emailHelp" style={{ height: "70px", fontSize: '16px' }} />
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="inputPara" style={{ fontSize: '20px' }}>Waiting Time</label>
                        <input type="Para" className="form-control my-2" id="exampleInputPara4" aria-describedby="emailHelp" style={{ height: "70px" }} />
                    </div>
                </form>
            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Output;
