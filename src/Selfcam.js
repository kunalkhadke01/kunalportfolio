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

    render() {
        const { cameraDirection } = this.state;
        const videoHeight = '10%';
        const videoWidth = '60%';
        return (
            <div className="page-wrap">
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-lg-12">

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
                    <button className="btn btn-primary" type="button" style={{ backgroundColor: "lightblue", padding: 10 }} onClick={(screenshot) => { this.capture(screenshot) }}>
                        capture
                    </button>
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