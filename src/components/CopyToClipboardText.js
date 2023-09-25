import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { Button } from "@mui/material";

function CopyToClipboardText({text, onCopy}) {
    return (
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
    );
}

export default CopyToClipboardText;
