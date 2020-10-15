import React, { Fragment } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AboutMe() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <DialogTitle id="alert-dialog-slide-title">{"About Me"}<hr></hr></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <h5>Enthusiastic learner who grasp new concepts and technological skills.
                    A highly motivated,energetic individual and a team player with good communication and interpersonal skills.
                    Work with +ve attitude to contribute the healthy functionality of the organization.</h5>
                </DialogContentText>
            </DialogContent>
        </Fragment>
    );
}
