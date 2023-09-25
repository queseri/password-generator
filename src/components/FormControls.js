import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

function FormControls({ id, name, checked, onChange, label }) {
    return (
        <>
            <FormControlLabel
                className="flex justify-start gap-4"
                control={
                    <Checkbox
                        id={id}
                        name={name}
                        checked={checked}
                        onChange={onChange}
                        sx={{
                            color: "hsla(127, 100%, 82%, 1)",
                            "&.Mui-checked": {
                                color: "hsla(127, 100%, 82%, 1)",
                            },
                        }}
                    />
                }
                label={label}
            />
        </>
    );
}

export default FormControls;
