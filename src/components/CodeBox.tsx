
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// CodeBox-Komponente zur Anzeige von Code in formatierten Boxen
interface CodeBoxProps {
  code: string;
}

function CodeBox({ code }: CodeBoxProps) {
  return (
    <div className="">
      <div className="w-full mt-10">
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
          className="rounded-lg"
          customStyle={{ padding: "30px" }}
        >
          {code}

        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeBox;
