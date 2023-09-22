"use client";
import Image from "next/image";
// react import
import React, { useState } from "react";
import generator from "generate-password-ts";
// import the CopyToClipboard component
import { CopyToClipboard } from "react-copy-to-clipboard";
// imports from Material UI
import { TextField, Button, MuiAlert, Snackbar } from "@mui/material";

export default function Home() {
    // state to show the snack bar
    const [copyState, setcopyState] = useState(false);
    // set password length
    const [length, setLength] = useState(10);
    // state for text in the text field
    const [text, setText] = useState("");
    const [isLowerCase, setIsLowerCase] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(true);
    const [isSymbols, setIsSymbols] = useState(false);

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

    return (
        <main className="flex flex-col items-center justify-between p-4 max-w-[33.75rem]">
            <h1>Password generator</h1>
            <div className="container">
                <TextField
                    type="text"
                    className="bg-white"
                    value={text}
                    id="password"
                    variant="outlined"
                    label="text"
                    placeholder="Type some text here"
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={(e) => setText(e.target.value)}
                />
                <CopyToClipboard text={text} onCopy={() => setcopyState(true)}>
                    {/* single child to which event is applied*/}

                    <div className="copy-area">
                        {/*button to copy text */}
                        <Button variant="contained">Click to Copy</Button>
                    </div>
                </CopyToClipboard>
            </div>
            <div className="settings">
                <div className="grid grid-cols-6">
                    <label htmlFor="length" className="col-span-5">
                        Character length
                    </label>
                    <span aria-live="polite" className="justify-self-end">
                        {length}
                    </span>
                    <input
                        type="range"
                        id="length"
                        className="col-span-6"
                        name="length"
                        min={4}
                        max={20}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                </div>
                <fieldset>
                    <legend className="hidden">Select character types</legend>
                    <div>
                        <input
                            type="checkbox"
                            id="uppercase"
                            name="uppercase"
                            checked={isUpperCase}
                            onChange={() => setIsUpperCase(!isUpperCase)}
                        />
                        <label htmlFor="uppercase">{`Uppercase letters ${isUpperCase}`}</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="lowercase"
                            name="lowercase"
                            checked={isLowerCase}
                            onChange={() => setIsLowerCase(!isLowerCase)}
                        />
                        <label htmlFor="lowercase">{`Lowercase letters ${isLowerCase}`}</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="numbers"
                            name="numbers"
                            defaultChecked
                            onChange={() => setIsNumbers(!isNumbers)}
                        />
                        <label htmlFor="numbers">{`Numbers ${isNumbers}`}</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="symbols"
                            name="symbols"
                            checked={isSymbols}
                            onChange={() => setIsSymbols(!isSymbols)}
                        />
                        <label htmlFor="symbols">{`Symbols ${isSymbols}`}</label>
                    </div>
                </fieldset>
                <Button variant="contained" onClick={generatePassword}>
                    Generate
                </Button>
            </div>
        </main>
    );
}
