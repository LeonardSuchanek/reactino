import CodeBox from "../../CodeBox";
import { render } from "react-dom";
import AceEditor from "react-ace";


const L1C1 = () => {
  return (
    <>
      <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        onLoad={this.onLoad}
        onChange={this.onChange}
        fontSize={14}
        lineHeight={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          enableMobileMenu: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />
    </>);
};

export default L1C1;
