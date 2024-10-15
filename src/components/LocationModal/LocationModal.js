

import React, {Fragment} from 'react';


import { Dialog, Grid, } from '@mui/material'

const LocationMap = ({ maxWidth, button, buttonClass , link_map}) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    return (
        <Fragment>
            <button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}
            >
                {button} See Location
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <button onClick={handleClose} className='event-close-btn'>
                    <i className='fa fa-close'></i>
                </button>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                        <iframe
                            title="map"
                            src={link_map}
                            width="600" // Set the width
                            height="450" // Set the height
                            style={{ border: 0 }} // Optional: Remove border
                            allowFullScreen // Optional: Allow full-screen
                        ></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap


