"use client";

import React, { useState, useEffect, useRef } from 'react';
import { runPrediction } from './runPrediction';

function App() {
  const [image, setImage] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [selectedChoiceState, setSelectedChoiceState] = useState(false);
  const selectedChoiceRef = useRef(null); // to scroll down to view the image

  function handleChange(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  
    setShowDialog(true);
  }

  function handleButtonClick(choice) {
    // You can perform any further actions based on the choice selected
    console.log('Choice selected:', choice);
    setSelectedChoice(choice);
    setSelectedChoiceState(true);
    handleCloseDialog();

    console.log("Input Image is: ", image);
    runPrediction('data:image/jpeg;base64,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'); // Call the runPrediction function with the image URL and choice
    

  }

  function handleCloseDialog() {
    setShowDialog(false);
  }

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        handleCloseDialog();
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // useEffect(() => {
  //   console.log('Image selected:', image);
  // }, [image]);

  // TO drag and drop image 

  const dropzoneRef = useRef(null);
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleChange({ target: { files: files } });
  };

  // TO smotthly scroll down to the image

  useEffect(() => {
    if (selectedChoiceState && selectedChoiceRef.current) {
      if (window.innerWidth < 768) {
        setTimeout(() => {
          selectedChoiceRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Adjust the delay as needed
      } else {
        selectedChoiceRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedChoiceState]);


  return (
    <div>
      <main className="flex items-center justify-center font-sans">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          ref={dropzoneRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
            Drag Images Here To Begin
          </h2>

          <p className="mt-2 text-gray-500 tracking-wide">
            Supported File Formats are SVG, PNG, JPG, or GIF.
          </p>

          <input
            id="dropzone-file"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
          <img id="pic" />
        </label>
        
      </main>

    {/* This Popups a dialog after image is uploded */}

      {showDialog ? (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-end p-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
                onClick={handleCloseDialog}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1">
              <img src={image} alt="Uploaded" className="w-4/5 h-auto mx-auto" />
            </div>
            
            {setSelectedChoiceState && (<div className="flex justify-center p-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleButtonClick('Image Background Removal')}
              >
                Image Background Removal
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleButtonClick('Image Enhancement')}
              >
                Image Enhancement
              </button>
            </div>)}

            <div className="flex justify-end p-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={handleCloseDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

    {/* Display the selected choice after the dialog is closed */}
      {!showDialog && selectedChoiceState && selectedChoice && (
        
        <div className='flex items-center justify-center flex-col' ref={selectedChoiceRef}>
          <hr className="w-3/5 h-0.5 border-t-0 mt-14 bg-slate-400 opacity-200 dark:opacity-200" />
        <div className="mx-auto flex w-3/5 flex-col items-center justify-center p-6 mt-4 text-slate-950 rounded-xl border-2 border-solid border-slate-900 bg-white">
          <h1 className="text-xl font-medium">{selectedChoice}</h1>
          <img src={image} className="w-3/5 h-auto mx-auto mt-10 max-w-full" />
        </div>

        </div>
      )}

    </div>
  );
}

export default App;
