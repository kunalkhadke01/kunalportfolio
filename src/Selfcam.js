import React from 'react';
import Webcam from "react-webcam";

var getBase64 = require('get-base64');
class Selfcam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            webcam: null,
            screenshot: [],
            currentscreenshot: '',
            cameraDirection: 'back'
        }
        this.setRef = this.setRef.bind(this);
        this.capture = this.capture.bind(this)
    }

    setRef(webcam) {
        this.webcam = webcam;
    }
    onAlert = () => {
        this.timer = setInterval(() => {
            this.capture();
        }, 5000);
        console.log(this.timer)
    };
    capture = () => {
        const imageSrc = this.webcam.getScreenshot({ width: 1920, height: 1080 });
        let screenshot = [...this.state.screenshot]
        screenshot.push(this.state.currentscreenshot)
        var image = getBase64(imageSrc);
        // console.log("this is img", imageSrc)
        // var url = URL.createObjectURL(imageSrc);
        // console.log(url);
        this.setState({ screenshot, currentscreenshot: imageSrc })
    };
    onStop = () => {
        console.log(this.timer);
        clearInterval(this.timer);
    }
    render(props) {
        const { cameraDirection } = this.state;
        const videoHeight = '60%';
        const videoWidth = '60%';
        console.log(this.props)
        return (
            <div className="container">
                <h4 style={{ textAlign: 'center' }}>welcome to webcam {this.props.location.state.username}</h4>
                <div className="row" style={{ marginTop: 40 }}>
                    <div className="col-lg-6" >
                        <div style={{ boxShadow: '0 2px 2px 0', width: "90%" }}>
                            <Webcam
                                cameraSelector={'back'}
                                fullResolutionScreenshot
                                className="videoStream"
                                audio={false}
                                height={videoHeight}
                                width={videoWidth}
                                ref={this.setRef}
                                screenshotFormat="image/jpeg"
                            />
                            <i class="fa fa-camera"
                                style={{
                                    fontSize: "40px",
                                    transform: 'translate(20%, -100%)',
                                    // textAlign: 'center',
                                    // paddingBottom: 60,
                                    color: 'blue'
                                }}
                                onClick={(screenshot) => { this.onAlert(screenshot) }}
                            ></i>

                            <i class="fa fa-stop-circle"
                                onClick={(screenshot) => { this.onStop(screenshot) }}
                                style={{
                                    fontSize: 40,
                                    transform: 'translate(-90%, -10%)',
                                    color: 'red'
                                }}>
                            </i>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div style={{ boxShadow: '0 2px 2px 0', width: "90%" }}>
                            <h5 style={{ padding: 10 }}>Image gallery</h5>
                            <div style={{
                                width: "250px",
                                height: "196px",
                                overflow: 'scroll'
                            }}>
                                {console.log(this.state.screenshot)}
                                {this.state.screenshot.map((img, index) => {
                                    return (
                                        < img style={{ width: '40%', height: '40%' }} src={`${img}`} class="img-thumbnail" />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default Selfcam;