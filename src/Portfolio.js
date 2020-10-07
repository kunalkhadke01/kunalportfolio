import React from 'react';
import './App.css';
import sample from './ScreenCaptureProject2.mp4';
import profile from './VIR_1389.JPG';

class Portfolio extends React.Component {

    render() {
        const button = {
            margin: 12
        }
        const avatar = {
            verticalAlign: "middle",
            width: "180px",
            height: "180px",
            borderRadius: "50%"
        }
        return (
            <div class="container">
                {/* <nav className="Header">
                    <h1>productmania</h1>
                </nav> */}
                <div class="row">
                    <div class="col-xs-6" style={{ backgroundColor: "#ff8080" }}>
                        <div>
                            <div class="col-sm-6" >
                                <img src={profile} name="myimage" alt="profile" style={avatar} />
                                <p>Kunal Mukund Khadke</p>
                                <p>React.js developer</p>
                            </div>

                        </div>
                        <div class="col-xs-12">
                            <h1>Contact</h1>
                            <div class="col-xs-6">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="col-xs-6">
                                <p>phone </p>
                            </div>
                            <div class="col-xs-6">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="col-xs-6">
                                <p>email </p>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <h1>Follow Me</h1>
                            <div class="col-xs-6">
                                <i class="fa fa-linkedin-square" style={{ fontSize: "25px" }}></i>
                            </div>
                            <div class="col-xs-6">
                                <p>linkedin </p>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <h1>Interest</h1>
                            <div>
                                <p>yoga </p>
                            </div>
                            <div>
                                <p>play guitar </p>
                            </div>
                            <div>
                                <p>singing </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-6">
                        <div class="col-sm-12">
                            <video height="240" autoPlay>
                                <source src={sample} type="video/mp4"></source>
                            </video>
                        </div>
                        <h3>want to know about my profile click the buttons</h3>
                        <div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button}>About Me</button>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button}>About Me</button>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button}>About Me</button>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button}>About Me</button>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button}>About Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;