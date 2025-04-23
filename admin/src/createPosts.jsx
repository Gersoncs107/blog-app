import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

function newPost() {
    const [content, setContent] = useState('')

    return(
        <Editor
          apiKey=""
          value={content}
          onEditorChange={(newContent) => setContent(newContent)}
        />
    )
}