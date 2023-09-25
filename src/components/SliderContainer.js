import React from "react";
import { Slider } from "@mui/material";

function SliderContainer({ length, onChange }) {
    return (
        <>
            <Slider
                value={length}
                onChange={onChange}
                min={4}
                max={24}
                className="col-span-6"
                aria-label="Character length"
                marks={true}
                size="medium"
                sx={{
                    color: "hsla(127, 100%, 82%, 1)",
                    height: 8,
                    cursor: "pointer",
                    "& .MuiSlider-track": {
                        border: "none",
                    },
                    "& .MuiSlider-thumb": {
                        height: 24,
                        width: 24,
                        backgroundColor: "#fff",
                        border: "2px solid currentColor",
                        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                            boxShadow: "inherit",
                            border: "2px solid hsla(0, 90%, 63%, 1)",
                        },
                        "&:before": {
                            display: "none",
                        },
                    },
                }}
            />
        </>
    );
}

export default SliderContainer;
