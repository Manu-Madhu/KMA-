import React from "react";
import DocumentDownload from "../../utils/PdfDownloadFunction";
import ContactUs from '../../assets/kma doc/ContactUs.pdf'

const Contact = () => {
  return (
    <div>
      <DocumentDownload
        documentName="Contact Us"
        documentUrl={ContactUs}
      />
    </div>
  );
};

export default Contact;
