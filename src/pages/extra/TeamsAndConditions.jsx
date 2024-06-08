import React from "react";
import DocumentDownload from "../../utils/PdfDownloadFunction";
import TeamsAndCondition from '../../assets/kma doc/terms and conditions.pdf'

const TeamsAndConditions = () => {
  return (
    <div>
      <DocumentDownload
        documentName="Teams & Condition"
        documentUrl={TeamsAndCondition}
      />
    </div>
  );
};

export default TeamsAndConditions;
