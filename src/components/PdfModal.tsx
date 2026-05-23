import { useEffect, useState } from "react";
import "./styles/PdfModal.css";

const PdfModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setPdfUrl(customEvent.detail);
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    };

    window.addEventListener("open-pdf", handleOpen);
    return () => window.removeEventListener("open-pdf", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setPdfUrl(""), 300);
    document.body.style.overflow = "auto";
  };

  if (!isOpen) return null;

  return (
    <div className="pdf-modal-overlay" onClick={handleClose}>
      <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <button className="pdf-modal-close" onClick={handleClose}>
            Close
          </button>
        </div>
        <iframe src={pdfUrl} className="pdf-iframe" title="Document Viewer" />
      </div>
    </div>
  );
};

export default PdfModal;
