import ReactMarkdown from "react-markdown";
import readme from "../../README.md?raw"; // si usás Vite

const ReadMarkdownApp = () => {
  return (
    <div className="mx-auto p-4">
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  );
};

export default ReadMarkdownApp;
