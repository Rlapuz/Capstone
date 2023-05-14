import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

// Supported file types for the dropzone
const fileTypes = "*";

const DragAndDrop = () => {
  // State for storing the uploaded files
  const [files, setFiles] = useState([]);

  // Handle the files when they are dropped into the dropzone
  const handleDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  // Get the props and state for the dropzone using the useDropzone hook
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: fileTypes,
  });

  return (
    <div>
      {/* Dropzone container */}
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          // Show a message when files are dragged over the dropzone
          <p>Drop the files here</p>
        ) : (
          // Show an icon and message to prompt user to upload files
          <p>
            <i className="bi bi-file-earmark-arrow-up-fill fs-1"></i>
            <br />
            {" Drop files here or click to upload"}
          </p>
        )}
      </div>

      {/* Display the uploaded files */}
      {files.length > 0 && (
        <div>
          <h4 className="fw-bold">Uploaded Files</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {/* Display the folder and file name */}
                {file.folder}/{file.name}
              </li>
            ))}
          </ul>
          <div>
            {/* Display the uploaded images */}
            {files.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={imageStyle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the dropzone and images
const dropzoneStyle = {
  border: "2px dashed #999",
  borderRadius: "5px",
  padding: "20px",
  margin: "20px 0",
  textAlign: "center",
  cursor: "pointer",
};
const imageStyle = {
  width: "50px",
  height: "50px",
  marginBottom: "10px",
};

export default DragAndDrop;
