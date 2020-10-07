import React, { Fragment } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Education() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <DialogTitle id="alert-dialog-slide-title">{"Education"}<hr></hr></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <h4>Bachelor of Engineering , North Mharashtra University</h4>
                    <h5>• Degree in electronics and telecommunication with 6.68 CGPA  in 2017</h5>
                    <h4>Diploma Engineering ,at gulabrao deokar college,Jalgaon (MSBTE) </h4>
                    <h5>• Diploma in electronics and telecommunication with 61.25% in 2012</h5>

                </DialogContentText>
            </DialogContent>
        </Fragment>
    );
}