import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    let setstyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white'
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">{props.aboutText}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" >
                            <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" style={setstyle} />
                            <button className="btn btn-outline-success" type="submit" style={setstyle}>Search</button>
                        </form>
                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={() => props.togglemode('primary')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                            </div>
                            <div className="bg-danger rounded mx-2" onClick={() => props.togglemode('danger')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                            </div>
                            <div className="bg-success rounded mx-2" onClick={() => props.togglemode('success')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                            </div>
                            <div className="bg-warning rounded mx-2" onClick={() => props.togglemode('warning')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                            </div>
                            <div className="bg-dark rounded mx-2" onClick={() => props.togglemode('dark')} style={{ height: '30px', width: '30px', border :'1px solid white', cursor: 'pointer' }}>
                            </div>
                            <div className="bg-white rounded mx-2" onClick={() => props.togglemode('white')} style={{ height: '30px', width: '30px', border: '1px solid black', cursor: 'pointer' }}>
                            </div>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={() => props.togglemode(null)} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'default title',
    aboutText: 'default about'
};