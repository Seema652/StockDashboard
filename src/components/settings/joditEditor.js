import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = () => {
    const editor = useRef(null);

    const config = {
        toolbarAdaptive: false,
        toolbarSticky: false,
        buttons: "bold,italic,underline,|,ul,ol,|,link,|,superscript,subscript",
        placeholder: "Type here...",
        height: 200
    };

    return (
        <div className="editor-container">
            <JoditEditor ref={editor} config={config} />
        </div>
    );
};

export default TextEditor;
