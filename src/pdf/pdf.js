import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import the correct pdfjs-dist package and worker
import { GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.js';

// Set the workerSrc to point to the local worker
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfWorker}`;

const ViewPDF = ({ pdfFile }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '750px' }}>
            <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
                <Viewer fileUrl="/gowtham.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
        </div>
    );
};

export default ViewPDF;
