"use client";

import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [image, setImage] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [selectedChoiceState, setSelectedChoiceState] = useState(false);

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
  //   console.log('Choice selected:', selectedChoice);
  // }, [selectedChoice]);

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
        
        <div className='flex items-center justify-center flex-col'>
          <hr class="w-3/5 h-0.5 border-t-0 mt-14 bg-slate-400 opacity-200 dark:opacity-200" />
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
