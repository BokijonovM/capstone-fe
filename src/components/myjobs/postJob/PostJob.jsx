import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import "./style.css";

function PostJob() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  console.log(editorState);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div
      className="post-job-div-shadow-need d-flex justify-content-center"
      style={{ width: "100%" }}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      // onChange={setEditorState}
      />
    </div>
  );
}

export default PostJob;
