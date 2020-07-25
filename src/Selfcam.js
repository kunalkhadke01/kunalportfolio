import React from 'react';
import Webcam from "react-webcam";

var getBase64 = require('get-base64');
class Selfcam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            webcam: null,
            screenshot: '',
            cameraDirection: 'back'
        }
        this.setRef = this.setRef.bind(this);
        this.capture = this.capture.bind(this)
    }

    setRef(webcam) {
        this.webcam = webcam;
    }


    capture = () => {
        const imageSrc = this.webcam.getScreenshot({ width: 1920, height: 1080 });

        // var image = getBase64(imageSrc);
        // console.log("this is img", image)
        this.setState({ screenshot: imageSrc })
    };
    render(props) {
        const { cameraDirection } = this.state;
        const videoHeight = '10%';
        const videoWidth = '60%';
        console.log(this.props)
        return (
            <div className="page-wrap">
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-lg-12">
                        <h1>welcome to webcam {this.props.location.state.username}</h1>
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

                    </div>
                </div>
                <div className="row" style={{ textAlign: "center" }}>
                    {/* <button className="btn btn-primary"
                        type="button"
                        style={{
                            backgroundColor: "black",
                            borderRadius: '50%',
                            fontSize: 50,
                            color: 'white',
                            transform: 'translate(-50%, -50%)',
                        }} >
                        +
                    </button> */}
                    <i class="fa fa-camera"
                        style={{
                            fontSize: "50px",
                            transform: 'translate(-50%, -50%)',
                            paddingBottom: 60,
                            color: 'blue'
                        }}
                        onClick={(screenshot) => { this.capture(screenshot) }}
                    ></i>
                    <div>
                        {console.log(`data:image/jpeg;base64,${this.state.screenshot}`)}
                        <img src={`data:image/jpeg;base64,${this.state.screenshot}`} />
                    </div>
                </div>
            </div>
        )
    }

};

export default Selfcam;