import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackContainer from "../content/backContainer";
import Draggable, { DraggableCore, Droppable } from 'react-draggable';
import html2canvas from 'html2canvas';
const useStyles = makeStyles((theme) => ({
    resurvedBox: {
        width: '100%',
        // backgroundColor: theme.palette.divider,
        border: "1px solid black",
        position: 'relative',
        overflow: 'auto',
        height: "300px",
        maxHeight: "150px",
        marginBottom: 4,
        marginTop: 50
    }
}));
// const im = (props) => {
//     return (<div>
//         {props.history.location.state.map((value, index) => (
//             <img style={{
//                 // marginLeft: value[0].width,
//                 marginTop: value[0].height,
//                 width: 70,
//                 height: 30
//             }} src={value[0].repos} />
//         ))}
//     </div>
//     )
// }
let obj = [{ src: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" },
{ src: "https://www.cnet.com/a/img/9dR_PSX2J0GAHuE0qEnm1T93iws=/940x0/2020/04/14/1705352e-1f1e-4bc9-8c23-8520ddc4cb31/kiss-emoji.png" },
{ src: "https://media.wired.com/photos/59273186cefba457b079c5e2/master/pass/LoveEmoji.jpg" },
{ src: "https://cdn1.vectorstock.com/i/1000x1000/15/85/gift-box-vector-1721585.jpg" },
{ src: "https://pngimg.com/uploads/gift/gift_PNG100228.png" }
]
const Simpleui = (props) => {
    const classes = useStyles();
    // const img1 = 'https://k3no.com/Meetup/hang-in-there.jpg'
    // const [image, setImage] = React.useState("");
    // useEffect(() => {
    //     // const catImage = new Image()
    //     const ctx = canvas.current.getContext('2d')
    //     const catImage = image.current;
    //     console.log(catImage)
    //     // catImage.src = 'https://k3no.com/Meetup/hang-in-there.jpg'
    //     // catImage.onload = () => setImage(catImage)
    //     catImage.onload = () => {
    //         ctx.drawImage(catImage, 0, 0)
    //         ctx.font = "40px Courier"
    //         ctx.images(im, 0, 0)
    //     }
    // }, [])
    // // console.log(image)
    // const canvas = useRef(null)
    // const image = useRef(null)
    // useEffect(() => {
    //     if (canvas && image) {
    //         const ctx = canvas.current.getContext('2d')

    //         //  console.log("It Loaded !");  
    //     }
    // }, [image, canvas])
    // const canvass = (im) => {

    //     // const img = image
    // }
    // canvass(image)
    const [cap, setCaption] = React.useState("");
    const [droped, setPosition] = React.useState([]);

    console.log(droped)
    const capture = useRef(null)
    const caption = useRef(null)

    const takePhoto = () => {
        html2canvas(capture.current, { allowTaint: true }).then(function (canvas) {
            document.body.appendChild(canvas);
        });
    }
    console.log(cap)
    console.log(props.history.location.state[0])
    console.log(props.history.location.state[0].map((value) => value.repos))
    function handleOnDragEnd(data) {
        console.log(data)
        setPosition([...droped, [{ width: data.changedTouches[0].clientX, repos: data.path[0].currentSrc, height: data.changedTouches[0].clientY }]])
    }
    function handleStart(e: DraggableEvent, data: DraggableData) {
        console.log(data)
        // setPosition([...droped, data])
    }
    return (
        <div>
            <BackContainer onClick={() => props.history.goBack('/lounch_info')} title="ADD CAPTION" />
            <div ref={capture}>
                <div className={classes.resurvedBox} style={{ backgroundImage: `url(${props.history.location.state[0].map((value) => value.repos)})` }}>
                    {props.history.location.state.map((value, index) => (
                        <Draggable
                        // onStop={handleOnDragEnd}
                        >
                            <img style={{
                                position: 'fixed',
                                left: value[0].width,
                                top: value[0].height,
                                width: 70,
                                height: 30
                            }} src={value[0].repos} />
                        </Draggable>
                    ))}
                    {droped && droped.map((value, index) => (
                        <Draggable
                        // onStop={handleOnDragEnd}
                        >
                            <img style={{
                                position: 'fixed',
                                left: value[0].width,
                                top: value[0].height,
                                width: 70,
                                height: 30
                            }} src={value[0].repos} />
                        </Draggable>
                    ))}
                </div>
            </div>
            <div>
                {obj.map((value) => (
                    <Draggable
                        onStart={handleStart}
                        onStop={handleOnDragEnd}
                    ><img style={{ width: "20%", height: "20%" }}
                        src={value.src} />

                    </Draggable>
                ))}
            </div>
            <button onClick={() => takePhoto()} type="button" style={{ alignContent: "center" }}>CAPTURE</button>
            {/* <div ref={caption} /> */}
        </div>
    );
}

export default Simpleui;