"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import generator from "generate-password-ts";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TextField, Button, Slider } from "@mui/material";
import AlertMessage from "@/components/AlertMessage";

export default function Home() {
    const initialState = {
        tooWeak: false,
        weak: false,
        medium: false,
        strong: false,
    };

    // state to show the snack bar
    const [copyState, setcopyState] = useState(false);
    // set password length
    const [length, setLength] = useState(4);
    // state for text in the text field
    const [text, setText] = useState("");
    const [isLowerCase, setIsLowerCase] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(true);
    const [isSymbols, setIsSymbols] = useState(false);
    const [strength, setStrength] = useState("Too weak!");
    const [state, setState] = useState({ ...initialState, tooWeak: true });

    const generatePassword = () => {
        if (!isLowerCase && !isUpperCase && !isNumbers && !isSymbols) {
            return console.log("make one selection");
        }
        const pwd = generator.generate({
            length: length,
            lowercase: isLowerCase,
            uppercase: isUpperCase,
            numbers: isNumbers,
            symbols: isSymbols,
        });
        setText(pwd);
    };

    const onCopy = () => {
        if (text.length === 0) {
            setcopyState(false);
        } else {
            setcopyState(true);
        }
    };

    const onClose = () => {
        setcopyState(false);
    };

    const onChange = (evt) => {
        setLength(evt.target.value);
        if (evt.target.value < 6) {
            setStrength("Too weak!");
            setState({ ...initialState, tooWeak: true });
        } else if (evt.target.value < 12) {
            setStrength("weak");
            setState({ ...initialState, weak: true });
        } else if (evt.target.value < 16) {
            setStrength("Medium");
            setState({ ...initialState, medium: true });
        } else {
            setStrength("Strong");
            setState({ ...initialState, strong: true });
        }
    };

    return (
        <main className="flex flex-col items-center justify-between m-4 w-full max-w-[33.75rem]">
            <h1 className="text-[--grey] font-bold text-base mb-4">
                Password generator
            </h1>
            <div className="w-full flex flex-col gap-8">
                <div className="w-full relative">
                    <TextField
                        type="text"
                        className="bg-[--dark-grey] text-[white] w-full"
                        value={text}
                        id="password"
                        variant="outlined"
                        label="Password"
                        aria-live="polite"
                        tabIndex="-1"
                        disabled
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            style: { color: "white" },
                        }}
                        sx={{
                            input: { color: "white" },
                            "& .Mui-disabled": {
                                color: "white",
                                "-webkit-text-fill-color": "white",
                            },
                        }}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <CopyToClipboard
                        text={text}
                        onCopy={onCopy}
                        className="h-full flex justify-center items-center !absolute top-0 right-0 copy-container"
                    >
                        {/* single child to which event is applied*/}
                        <Button variant="contained">
                            {" "}
                            <Image
                                src="/images/icon-copy.svg"
                                alt=""
                                width={21}
                                height={24}
                            />
                            <span className="sr-only">Click to Copy</span>
                        </Button>
                    </CopyToClipboard>
                    <AlertMessage
                        open={copyState}
                        onClose={onClose}
                        text={
                            copyState
                                ? "Copied text"
                                : "Generate password first"
                        }
                    />
                </div>
                <div className="w-full bg-[--dark-grey] flex flex-col gap-8 p-4">
                    <div className="grid grid-cols-6 gap-8">
                        <label htmlFor="length" className="col-span-5">
                            Character length
                        </label>
                        <span aria-live="polite" className="justify-self-end">
                            {length}
                        </span>
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
                                    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":
                                        {
                                            boxShadow: "inherit",
                                            border: "2px solid hsla(0, 90%, 63%, 1)",
                                        },
                                    "&:before": {
                                        display: "none",
                                    },
                                },
                            }}
                        />
                    </div>
                    <fieldset className="flex flex-col gap-2">
                        <legend className="hidden">
                            Select character types
                        </legend>
                        <div>
                            <input
                                type="checkbox"
                                id="uppercase"
                                name="uppercase"
                                checked={isUpperCase}
                                onChange={() => setIsUpperCase(!isUpperCase)}
                            />
                            <label htmlFor="uppercase">{`Uppercase letters`}</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="lowercase"
                                name="lowercase"
                                checked={isLowerCase}
                                onChange={() => setIsLowerCase(!isLowerCase)}
                            />
                            <label htmlFor="lowercase">{`Lowercase letters`}</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="numbers"
                                name="numbers"
                                defaultChecked
                                onChange={() => setIsNumbers(!isNumbers)}
                            />
                            <label htmlFor="numbers">{`Numbers`}</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="symbols"
                                name="symbols"
                                checked={isSymbols}
                                onChange={() => setIsSymbols(!isSymbols)}
                            />
                            <label htmlFor="symbols">{`Symbols`}</label>
                        </div>
                    </fieldset>
                    <div className="flex justify-between bg-[--very-dark-grey] p-4">
                        <p>Strength</p>
                        <div className="flex gap-4">
                            <span id="strength" alia-live="polite">
                                {strength}
                            </span>
                            <div className="flex gap-2">
                                <div
                                    aria-live="polite"
                                    className={`w-2.5 h-7 border-2 ${
                                        state.tooWeak
                                            ? "bg-[--red] border-[--red]"
                                            : state.weak
                                            ? "bg-[--orange] border-[--orange]"
                                            : state.medium
                                            ? "bg-[--yellow] border-[--yellow]"
                                            : "bg-[--neon-green] border-[--neon-green]"
                                    } `}
                                ></div>
                                <div
                                    aria-live="polite"
                                    className={`w-2.5 h-7 border-2 ${
                                        state.tooWeak
                                            ? "bg-[transparent] border-white"
                                            : state.weak
                                            ? "bg-[--orange] border-[--orange]"
                                            : state.medium
                                            ? "bg-[--yellow] border-[--yellow]"
                                            : "bg-[--neon-green] border-[--neon-green]"
                                    }`}
                                ></div>
                                <div
                                    aria-live="polite"
                                    className={`w-2.5 h-7 border-2  ${
                                        state.tooWeak || state.weak
                                            ? "bg-[transparent] border-white"
                                            : state.medium
                                            ? "bg-[--yellow] border-[--yellow]"
                                            : "bg-[--neon-green] border-[--neon-green]"
                                    }`}
                                ></div>
                                <div
                                    aria-live="polite"
                                    className={`w-2.5 h-7 border-2  ${
                                        state.tooWeak ||
                                        state.weak ||
                                        state.medium
                                            ? "bg-[transparent] border-white"
                                            : "bg-[--neon-green] border-[--neon-green]"
                                    }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="contained"
                        onClick={generatePassword}
                        className="bg-[--neon-green] text-[--very-dark-grey] font-bold"
                    >
                        Generate
                    </Button>
                </div>
            </div>
        </main>
    );
}
