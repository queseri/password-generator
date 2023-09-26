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
                //  helperText={text.length === 0 && "Generate password first"}
                //  error={text.length === 0}
                InputProps={{
                    readOnly: true,
                }}
                InputLabelProps={{
                    style: {
                        color:
                            text.length === 0
                                ? "hsla(252, 9%, 53%, 1)"
                                : "white",
                    },
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
