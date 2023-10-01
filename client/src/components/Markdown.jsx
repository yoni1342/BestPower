import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDOM  from "react-dom";
function MarkdownComponent({ content }) {
  console.log(content);
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownComponent;