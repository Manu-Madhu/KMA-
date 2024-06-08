import React from "react";
import DocumentDownload from "../../utils/PdfDownloadFunction";
import Shop from "./../../assets/kma doc/Shope.pdf";

const ShopDelivery = () => {
  return (
    <div>
      <DocumentDownload
        documentName="Shop"
        documentUrl={Shop}
      />
    </div>
  );
};

export default ShopDelivery;
