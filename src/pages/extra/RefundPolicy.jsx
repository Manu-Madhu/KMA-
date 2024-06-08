import React from "react";
import DocumentDownload from "../../utils/PdfDownloadFunction";
import Refund from '../../assets/kma doc/Refund.pdf'

function RefundPolicy() {
  return (
    <div>
      {" "}
      <DocumentDownload
        documentName="Refund"
        documentUrl={Refund}
      />
    </div>
  );
}

export default RefundPolicy;
