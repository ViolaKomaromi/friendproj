// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import {Container} from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function TransitionsModal() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//       <Container>
//     <div style={{margin: "0 auto", marginTop: "300px", marginLeft: "300px"}}>
//       <button type="button" onClick={handleOpen}>
//         My Friends List
//       </button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <li>Mathilde Gee</li>
//             <li>Larue House</li>
//             <li>Kerrie Suh</li>
//             <li>Shanon Petrus</li>
//             <li>Hiroko Deibert</li>
//             <li>Thad Mouser</li>
//             <li>Loyce Apodaca</li>
//             <li>Dannielle Humphery</li>
//             <li>Tanika Gildersleeve</li>
//             <li>Cleotilde Mckennon</li>
//             <li>Erlene Surrett</li>
//             <li>Lilliana Haskins</li>
//             <li>Nakisha Cashen</li>
//             <li>Adriana Close</li>
//             <li>Meryl Kappler</li>
//             <li>Bethann Tevis</li>
//             <li>Larraine Appleby</li>
//             <li>Leda Klippel</li>
//             <li>Monet Griner</li>
//             <li>Vonnie Asencio</li>
//             {/* <li>Andres Hardy</li>
//             <li>Erlene Macauley</li>
//             <li>Drusilla Scurlock</li>
//             <li>Kandis Sala</li>
//             <li>Hisako Delpriore</li>
//             <li>Flavia Bobby</li>
//             <li>Evette Torkelson</li> */}
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//     </Container>
//   );
// }


import React from "react";
import ImageUploading from "react-images-uploading";

import "./Notify.css";



<style>
    
</style>

export default function Notifications() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
