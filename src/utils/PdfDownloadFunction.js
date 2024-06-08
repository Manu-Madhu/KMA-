import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DocumentDownload = ({ documentName, documentUrl }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const downloadFile = async () => {
            try {
                const response = await fetch(documentUrl);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', documentName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                navigate('/');
            } catch (error) {
                console.error('Error downloading the file:', error);
            }
        };

        downloadFile();
    }, [documentName, documentUrl, navigate]);

    return (
        <div className='bg-black'>
            {/* <button onClick={handleDownload}>Download {documentName}</button> */}
        </div>
    );
};

export default DocumentDownload;
