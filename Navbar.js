import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme='primary'>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Eevee
                </a>
                <div class="form-check form-switch d-inline-block align-text-mid mx-3">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

