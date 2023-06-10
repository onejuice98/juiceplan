import { useState } from "react";
import ReactMarkdown from "react-markdown";

const Test = () => {
  const [markdown, setMarkdown] = useState<string>(
    "### **Hello, world!** \n ## ~~?!~~ \n -----"
  );

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};
export default Test;
