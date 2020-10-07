import React, { Fragment } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function KeySkills() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <DialogTitle id="alert-dialog-slide-title">{"Key Skills"}<hr></hr></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <h3>Technological Skills</h3>
                    <ul>
                        <li><h5>Web Technologies & Frameworks: React.js,HTML5, SASS, CSS,Mongodb,mySQL, Angular2.</h5></li>
                        <li><h5>Scripts/UI: Javascript, ES6, Bootstrap.</h5></li>
                        <li><h5>Web debug tools: GIT</h5></li>
                    </ul>
                    <h3>Managerial skills </h3>
                    <ul>
                        <li><h5>Project management</h5></li><li><h5> Client Relationship management</h5> </li>
                        <li><h5>Requirement gathering</h5></li><li><h5>Issue resolution</h5></li>
                        <li><h5>Documentation & reporting</h5></li><li><h5>Api/query implementation(mySql)</h5></li>
                    </ul>
                </DialogContentText>
            </DialogContent>
        </Fragment>
    );
}
