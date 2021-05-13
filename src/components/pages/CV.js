import React, { useState } from 'react'
import ContentBlock from '../ContentBlock'
import cv from '../../assets/CV-2.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Link } from 'react-router-dom';

export default function CV() {
    const [numPages, setNumPages] = useState(null)

    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
      }

    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <ContentBlock>
            <h1 className="content__block__header">CV</h1>
            <Document file={cv} onLoadError={console.error} onLoadSuccess={onLoadSuccess} options={options}>
                { numPages ? 
                    Array.from(new Array(numPages), (el, index) => (
                        <Page pageNumber={index + 1} />
                    ))
                :
                    null
                }
            </Document>
            <Link to={'/' + cv.split('/')[3]} download="martin-agunwa-cv.pdf" target="_blank" className="btn btn--primary">Download</Link>
        </ContentBlock>
    )
}