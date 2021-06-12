import React, { useState } from 'react'
import ContentBlock from '../ContentBlock'
import cv from '../../assets/CV-2.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Link, useHistory } from 'react-router-dom';

export default function CV() {

    const [numPages, setNumPages] = useState(null)
    const history = useHistory()

    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
    }

    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <ContentBlock>
            <button onClick={() => history.goBack()} className="btn btn--primary">Back</button>
            <h1 className="content__block__heading">CV</h1>
            { __isBrowser__ ?
                <Document file={cv} onLoadError={console.error} onLoadSuccess={onLoadSuccess} options={options}>
                    { numPages ? 
                        Array.from(new Array(numPages), (el, index) => (
                            <Page pageNumber={index + 1} />
                        ))
                    :
                        null
                    }
                </Document>
            :
                    null
            }
            <Link to={'/' + cv.split('/')[3]} download="martin-agunwa-cv.pdf" target="_blank" className="btn btn--primary">Download</Link>
        </ContentBlock>
    )
}