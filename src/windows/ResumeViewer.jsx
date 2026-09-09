import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const ResumeViewer = () => (
  <Document file="files/resume.pdf">
    <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
  </Document>
);

export default ResumeViewer;
