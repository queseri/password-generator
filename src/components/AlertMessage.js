import React from "react";
import { Alert, Snackbar } from "@mui/material";

function AlertMessage({ open, onClose, text }) {
    return (
        <Snackbar
            // invoke snack bar when open is true
            open={open}
            // close after three seconds
            autoHideDuration={3000}
            // function called after three seconds
            onClose={onClose}
            // where the snack bar must be shown
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <Alert
                // function called by clicking the close icon
                onClose={onClose}
                // color of snack bar
                severity="success"
                sx={{ width: "100%" }}
            >
                {text}
            </Alert>
        </Snackbar>
    );
}

export default AlertMessage;
