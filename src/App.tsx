import { PDFViewer } from "@react-pdf/renderer";
import Generate from "./lib/generate";
import { resume } from "./lib/resume";

export default function App() {
  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Generate resume={resume} />
    </PDFViewer>
  );
}
