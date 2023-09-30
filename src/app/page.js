"use client";
import React, { useState } from "react";
// import { jetBrainsMono } from "./layout";
import Image from "next/image";
import generator from "generate-password-ts";
import TextContainer from "@/components/TextContainer";
import FormControls from "@/components/FormControls";
import { Button, Box, createTheme, ThemeProvider } from "@mui/material";
import AlertMessage from "@/components/AlertMessage";
import CopyToClipboardText from "@/components/CopyToClipboardText";
import SliderContainer from "@/components/SliderContainer";

let theme = createTheme({
    palette: {
        // primary: {
        // light: "hsla(215, 31%, 21%, 1)",
        //  main: "hsla(0, 0,100%, 1)",
        //  },
    },
    typography: {
        fontFamily: "--font-jet-brains-mono",
    },
});

theme.typography.button = {
    fontFamily:  "--font-jet-brains-mono",
    textTransform: "uppercase",
    fontWeight: 700,
};

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
    const [generatePasswordError, setGeneratePasswordError] = useState(false);

    const generatePassword = () => {
        if (!isLowerCase && !isUpperCase && !isNumbers && !isSymbols) {
            return setGeneratePasswordError(true);
        }
        const pwd = generator.generate({
            length: length,
            lowercase: isLowerCase,
            uppercase: isUpperCase,
            numbers: isNumbers,
            symbols: isSymbols,
        });
        setGeneratePasswordError(false);
        setText(pwd);
    };

    const onCopy = () => {
        console.log(text.length);
        if (text.length === 0) {
            return setcopyState(false);
        } else {
            return setcopyState(true);
        }
    };

    const onClose = () => {
        setcopyState(false);
    };

    // update checkboxes
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

    // update textfield
    const updateText = (evt) => {
        setText(evt.target.value);
    };

    const firstBar = () => {
        if (state.tooWeak) {
            return "bg-[--red] border-[--red]";
        } else if (state.weak) {
            return "bg-[--orange] border-[--orange]";
        } else if (state.medium) {
            return "bg-[--yellow] border-[--yellow]";
        } else {
            return "bg-[--neon-green] border-[--neon-green]";
        }
    };

    const secondBar = () => {
        if (state.tooWeak) {
            return "bg-[transparent] border-white";
        } else if (state.weak) {
            return "bg-[--orange] border-[--orange]";
        } else if (state.medium) {
            return "bg-[--yellow] border-[--yellow]";
        } else {
            return "bg-[--neon-green] border-[--neon-green]";
        }
    };

    const thirdBar = () => {
        return state.tooWeak || state.weak
            ? "bg-[transparent] border-white"
            : state.medium
            ? "bg-[--yellow] border-[--yellow]"
            : "bg-[--neon-green] border-[--neon-green]";
    };

    const fourthBar = () => {
        return state.tooWeak || state.weak || state.medium
            ? "bg-[transparent] border-white"
            : "bg-[--neon-green] border-[--neon-green]";
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                component={"form"}
                noValidate
                className="flex flex-col items-center justify-between m-4 w-full max-w-[33.75rem]"
            >
                <h1 className="text-[--grey] font-bold text-base md:text-2xl my-8">
                    Password generator
                </h1>
                <div className="w-full flex flex-col gap-8">
                    <div className="w-full relative">
                        <TextContainer text={text} onChange={updateText} />
                        <CopyToClipboardText text={text} onCopy={onCopy} />
                        <AlertMessage
                            open={copyState}
                            onClose={onClose}
                            text={"Copied text"}
                        />
                    </div>
                    <div className="w-full bg-[--dark-grey] flex flex-col gap-8 p-4">
                        <div className="grid grid-cols-6 gap-8">
                            <label
                                htmlFor="length"
                                className="col-span-5 text-base md:text-lg"
                            >
                                Character length
                            </label>
                            <span
                                aria-live="polite"
                                className="justify-self-end text-2xl md:text-[2rem]"
                            >
                                {length}
                            </span>

                            <SliderContainer
                                length={length}
                                onChange={onChange}
                            />
                        </div>
                        <fieldset className="flex flex-col gap-2 relative">
                            <legend className="hidden">
                                Select character types
                            </legend>
                            <FormControls
                                id="uppercase"
                                name="uppercase"
                                checked={isUpperCase}
                                onChange={() => setIsUpperCase(!isUpperCase)}
                                label="Include Uppercase Letters"
                            />
                            <FormControls
                                id="lowercase"
                                name="lowercase"
                                checked={isLowerCase}
                                onChange={() => setIsLowerCase(!isLowerCase)}
                                label="Include Lowercase Letters"
                            />
                            <FormControls
                                id="numbers"
                                name="numbers"
                                checked={isNumbers}
                                onChange={() => setIsNumbers(!isNumbers)}
                                label="Include Numbers"
                            />
                            <FormControls
                                id="symbols"
                                name="symbols"
                                checked={isSymbols}
                                onChange={() => setIsSymbols(!isSymbols)}
                                label="Include Symbols"
                            />
                            {generatePasswordError && (
                                <span
                                    id="hidden-text"
                                    className={`text-[--red] absolute -bottom-8 `}
                                >
                                    Select at least one option
                                </span>
                            )}
                        </fieldset>
                        <div className="flex justify-between bg-[--very-dark-grey] p-4 mt-4">
                            <p className="text-base md:text-lg">Strength</p>
                            <div className="flex gap-4">
                                <span
                                    id="strength"
                                    alia-live="polite"
                                    className="text-lg md:text-2xl"
                                >
                                    {strength}
                                </span>
                                <div className="flex gap-2">
                                    <div
                                        className={`w-2.5 h-7 border-2 ${firstBar()} `}
                                    ></div>
                                    <div
                                        className={`w-2.5 h-7 border-2 ${secondBar()}`}
                                    ></div>
                                    <div
                                        className={`w-2.5 h-7 border-2  ${thirdBar()}`}
                                    ></div>
                                    <div
                                        aria-live="polite"
                                        className={`w-2.5 h-7 border-2  ${fourthBar()}`}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <Button
                            variant="contained"
                            onClick={generatePassword}
                            aria-controls="hidden-text password"
                            aria-expanded={generatePasswordError}
                            className="bg-[--neon-green] text-[--very-dark-grey] py-4 font-bold flex justify-center items-center gap-4 text-base md:text-lg"
                        >
                            Generate
                            <Image
                                src="/images/icon-arrow-right.svg"
                                alt=""
                                width={12}
                                height={12}
                            />
                        </Button>
                    </div>
                </div>
            </Box>
        </ThemeProvider>
    );
}
