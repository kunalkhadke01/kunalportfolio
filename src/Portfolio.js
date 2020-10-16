import React from 'react';
import './App.css';
import sample from './ScreenCaptureProject2.mp4';
import profile from './VIR_1389.JPG';
import AboutMe from './AboutMe';
import KeySkills from './KeySkills';
import Education from './Education';
import PersonalInfo from './PersonalInfo';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class Portfolio extends React.Component {
    state = {
        open: false,
        openKeySkills: false,
        Education: false,
        personalinfo: false
    }

    handleOpen = () => {
        this.setState({ open: true })
    }
    handleOpen1 = () => {
        this.setState({ openKeySkills: true })
    }
    handleOpen2 = () => {
        this.setState({ Education: true })
    }
    handleOpen3 = () => {
        this.setState({ personalinfo: true })
    }
    handleClose = () => {
        this.setState({ open: false })
        this.setState({ openKeySkills: false })
        this.setState({ Education: false })
        this.setState({ personalinfo: false })
    }

    declaration = () => {
        alert(" I do hereby declare that,the above detail is true to the best of my knowledge.\nThank you for visiting Me.\ncontact no:9096324272")
    }
    render(props) {
        // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
        const button = {
            margin: 12
        }
        const avatar = {
            // verticalAlign: "middle",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            textAlign: "center"
        }
        return (
            <div class="container">
                {/* <nav className="Header">
                    <h1>productmania</h1>
                </nav> */}
                <div class="row">
                    <div class="col-xs-4" style={{ backgroundColor: "#ff8080" }}>
                        <div>
                            <div class="col-sm-12" style={{ margin: 10 }} >
                                <img src={profile} name="myimage" alt="profile" style={avatar} />
                                <h4>Kunal Mukund Khadke</h4>
                                <p>React.js developer</p>
                                <p>Pune,Maharashtra</p>
                            </div>

                        </div>
                        <div class="col-xs-12">
                            <h4>Contact</h4>
                            <div class="col-sm-2">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="col-sm-10">
                                <p>9096324272 </p>
                            </div>
                            <div class="col-sm-2">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="col-sm-10">
                                <p>kumarkhadke01@gmail.com </p>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <h4>Follow Me</h4>
                            <div class="col-xs-2">
                                <i class="fa fa-linkedin-square" style={{ fontSize: "25px" }}></i>
                            </div>
                            <div class="col-xs-10">
                                <p><a href="https://www.linkedin.com/in/kunal-khadke-5bb25317b/">https://www.linkedin.com/in/kunal-khadke-5bb25317b/</a></p>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <h4>Interest</h4>
                            <div>
                                <p>yoga </p>
                            </div>
                            <div>
                                <p>playing guitar </p>
                            </div>
                            <div>
                                <p>singing </p>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <h4>Languadge</h4>
                            <div>
                                <p>English:
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>  </p>
                            </div>
                            <div>
                                <p>Marathi:
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span></p>
                            </div>
                            <div>
                                <p>Hindi:
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-8">
                        <div class="col-sm-2">
                            <video height="240" style={{ marginTop: 24 }} autoPlay>
                                <source src={sample} type="video/mp4"></source>
                            </video>

                        </div>
                        <div class="col-sm-10">
                            <h3>Experience</h3>
                            <h6 >01-feb-2019 to 20-feb-2020</h6>
                            <h6>[React.js Developer], [HYbrowlabs technologies,pune]</h6>
                            <h6>My experiential work in previous company is, creating website layout/user
                            interfaces by using standard HTML/CSS practices or by using react material
                            and collect the requirement of client. Integrating data from various back-end
                            services and databases. Writing the well designed, testable code in visual
                                  studio and deploy.</h6>
                            <h5>Project:</h5>
                            <h6>Project title : i-trak</h6>
                            <h6>Client : Pidilite Industries</h6>
                            <h6> Website:pd-itrak.netlify.com</h6>

                            <h6>Project Detail:

                            This project built in react.js technology .i-trak is a web application .In this app  Basically Fevicol user(Dealer) can handle there meetings ,lead users,
                            new contractors and adding new contractor .
                            They also seen there banking history like bonus points on products ,
                            billing and also add there bonus point with the help of barcode scanner.</h6>
                        </div>

                        <div class="col-sm-12">
                            <h3>Want to know about my profile? click the buttons</h3>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button} onClick={this.handleOpen}>About Me</button>
                                <Dialog
                                    open={this.state.open}
                                    TransitionComponent={this.Transition}
                                    keepMounted
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <AboutMe />
                                </Dialog>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button} onClick={this.handleOpen1}>Key Skills</button>
                                <Dialog
                                    open={this.state.openKeySkills}
                                    TransitionComponent={this.Transition}
                                    keepMounted
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <KeySkills />
                                </Dialog>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button} onClick={this.handleOpen2}>Education</button>
                                <Dialog
                                    open={this.state.Education}
                                    TransitionComponent={this.Transition}
                                    keepMounted
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <Education />
                                </Dialog>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button} onClick={this.handleOpen3}>Personal Information</button>
                                <Dialog
                                    open={this.state.personalinfo}
                                    TransitionComponent={this.Transition}
                                    keepMounted
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <PersonalInfo />
                                </Dialog>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-primary btn-block" style={button} onClick={this.declaration}>Declaration</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;