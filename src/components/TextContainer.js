import React from "react";
import { TextField } from "@mui/material";

function TextContainer({ text, updateText }) {
    return (
        <>
            <TextField
                type="text"
                className="bg-[--dark-grey] text-[white] w-full"
                value={text}
                id="password"
                variant="outlined"
                label="Password"
                aria-live="polite"
                tabIndex="-1"
                //disabled
                InputProps={{
                    readOnly: true,
                }}
                InputLabelProps={{
                    style: { color: "white" },
                }}
                sx={{
                    input: { color: "white" },
                    "& input .Mui-disabled": {
                        color: "white",
                    },
                }}
                onChange={updateText}
            />
        </>
    );
}

export default TextContainer;
