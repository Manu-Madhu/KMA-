import React from 'react'
import DocumentDownload from '../../utils/PdfDownloadFunction';
import Privacy from '../../assets/kma doc/privacy.pdf'

function PrivacyAndPolicy() {
  return (
    <div>
        <DocumentDownload
        documentName="Privacy"
        documentUrl={Privacy}
      />
    </div>
  )
}

export default PrivacyAndPolicy