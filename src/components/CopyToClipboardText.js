import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { Button } from "@mui/material";

function CopyToClipboardText({text, onCopy}) {
    return (
        <CopyToClipboard
            text={text}
            onCopy={onCopy}
            className="h-full flex justify-center items-center !absolute top-0 right-0"
        >
            {/* single child to which event is applied*/}
            <Button variant="contained" disabled={text.length === 0}>
                {" "}
                <Image
                    src="/images/icon-copy.svg"
                    alt=""
                    width={21}
                    height={24}
                    className={`${text.length === 0 ? "opacity-5" : "opacity-100"}`}
                />
                <span className="sr-only">Click to Copy</span>
            </Button>
        </CopyToClipboard>
    );
}

export default CopyToClipboardText;
