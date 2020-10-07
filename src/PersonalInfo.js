import React, { Fragment } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PersonalInfo() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <DialogTitle id="alert-dialog-slide-title">{"Personal Informaton"}<hr></hr></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <h5>Permanent address:
                  9,sadoba nager, mrudagandha , old nashirabad road , Jalgaon 425001</h5>
                    <h5> Gender :male </h5>
                    <h5>DOB :05th march 1990 </h5>
                    <h5>passport status :No</h5>
                    <h5> Nationality :Indian</h5>
                    <h5> Marital status :Unmarried</h5>
                    <h5>Language :English ,Marathi , Hindi</h5>

                </DialogContentText>
            </DialogContent>
        </Fragment>
    );
}