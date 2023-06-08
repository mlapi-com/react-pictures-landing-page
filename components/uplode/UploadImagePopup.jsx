"use client";

import React, { useState, useEffect } from 'react';

function App() {
  const [image, setImage] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [preferencesSubmitted, setPreferencesSubmitted] = useState(false);

  function handleChange(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    setShowDialog(true);
  }

  function handleOptionSelect(option) {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  }

  function handleSubmitPreferences() {
    console.log('Selected options:', selectedOptions);
    setPreferencesSubmitted(true);
  }

  function handleCloseDialog() {
    setShowDialog(false);
    setSelectedOptions([]);
    setPreferencesSubmitted(false);
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


  return (
    <div>
      <main className="flex items-center justify-center font-sans">
        <label
          htmlFor="dropzone-file"
          className="mx-auto cursor-pointer flex w-full max-w-2xl flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
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
            className="hidden"
            onChange={handleChange}
          />
          <img id="pic" />
        </label>
      </main>

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
            {!preferencesSubmitted && (
              <div className="flex flex-wrap justify-between p-2">
                <div className="flex items-center mr-2 mb-2">
                  <input
                    type="checkbox"
                    id="option1"
                    value="Option 1"
                    checked={selectedOptions.includes('Option 1')}
                    onChange={() => handleOptionSelect('Option 1')}
                  />
                  <label htmlFor="option1" className="ml-2 text-slate-950">
                    Option 1
                  </label>
                </div>
                <div className="flex items-center mr-2 mb-2">
                  <input
                    type="checkbox"
                    id="option2"
                    value="Option 2"
                    checked={selectedOptions.includes('Option 2')}
                    onChange={() => handleOptionSelect('Option 2')}
                  />
                  <label htmlFor="option2" className="ml-2 text-slate-950">
                    Option 2
                  </label>
                </div>
                <div className="flex items-center mr-2 mb-2">
                  <input
                    type="checkbox"
                    id="option3"
                    value="Option 3"
                    checked={selectedOptions.includes('Option 3')}
                    onChange={() => handleOptionSelect('Option 3')}
                  />
                  <label htmlFor="option3" className="ml-2 text-slate-950">
                    Option 3
                  </label>
                </div>
              </div>
            )}
            <div className="flex justify-end p-2">
              {!preferencesSubmitted && (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                  onClick={handleSubmitPreferences}
                >
                  Submit
                </button>
              )}
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={handleCloseDialog}
              >
                Close
              </button>
            </div>
            {preferencesSubmitted && (
              <div className="p-4">
                <p className="text-center text-lg font-medium text-slate-950">
                  Preferences submitted: {selectedOptions.join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;


