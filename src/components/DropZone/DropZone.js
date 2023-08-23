import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {remove} from "lodash/array";

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


export function DropZone(props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))]);
        }
    });

    const thumbs = files.map(file => (
        <div
            className="inline-flex border rounded-lg overflow-hidden aspect-square w-36 shadow-lg cursor-pointer relative"
            key={file.name}>
            <img
                src={file.preview}
                style={img}
                alt={"preview image"}
                // Revoke data uri after image is loaded
                onLoad={() => {
                    URL.revokeObjectURL(file.preview)
                }}
                className="object-cover"
            />
            <div className="aspect-square w-8 absolute right-2 top-2" onClick={(e) => {
                setFiles(remove(files, f => f !== file))
            }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                            fill="#1C274C"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                              fill="#1C274C"></path>
                    </g>
                </svg>
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section className="container">
            <aside className="flex flex-wrap gap-3 mt-3">
                {thumbs}
                <div {...getRootProps({className: 'dropzone'})}
                     className="border-2 border-dashed p-3 lg:p-5 rounded lg:rounded-lg overflow-hidden aspect-square w-36 flex items-center justify-center">
                    <input {...getInputProps()} />
                    <span>
                    <svg width="91px" height="91px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg"
                         enableBackground="new 0 0 48 48" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g
                        id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g
                        id="SVGRepo_iconCarrier"> <path fill="#8CBCD6"
                                                        d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"></path> <circle
                        fill="#B3DDF5" cx="35" cy="16" r="3"></circle> <polygon fill="#9AC9E3"
                                                                                points="20,16 9,32 31,32"></polygon> <polygon
                        fill="#B3DDF5" points="31,22 23,32 39,32"></polygon> <circle fill="#43A047" cx="38" cy="38"
                                                                                     r="10"></circle> <g fill="#ffffff"> <rect
                        x="36" y="32" width="4" height="12"></rect> <rect x="32" y="36" width="12"
                                                                          height="4"></rect> </g> </g></svg>
                </span>
                </div>
            </aside>
        </section>
    );
}