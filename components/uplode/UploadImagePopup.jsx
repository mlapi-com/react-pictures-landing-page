"use client";

import React, { useState, useEffect } from 'react';

function App() {
  const [image, setImage] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [preferencesSubmitted, setPreferencesSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [dialogHeight, setDialogHeight] = useState(0);

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
    if (selectedOptions.length === 0) {
      setShowPopup(true);
      return;
    }

    if (selectedOptions.includes('None')) {
      setShowPopup(false);
      return;
    }

    console.log('Selected options:', selectedOptions);
    setPreferencesSubmitted(true);
    setShowPopup(false);
  }

  function handleCloseDialog() {
    setShowDialog(false);
    setSelectedOptions([]);
    setPreferencesSubmitted(false);
    setShowPopup(false);
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

  useEffect(() => {
    function updateDialogHeight() {
      const dialogElement = document.getElementById('dialog');
      if (dialogElement) {
        const { height } = dialogElement.getBoundingClientRect();
        setDialogHeight(height);
      }
    }

    window.addEventListener('resize', updateDialogHeight);
    updateDialogHeight();

    return () => {
      window.removeEventListener('resize', updateDialogHeight);
    };
  }, []);

  const shouldReduceSize = dialogHeight > window.innerHeight;

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
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-max bg-white shadow-lg rounded-lg overflow-hidden ${
              shouldReduceSize ? 'h-screen-3/4' : ''
            }`}">
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
            <p className="text-center text-slate-950 my-4 text-lg">
              Select one or multiple options
            </p>
            {!preferencesSubmitted && (
              <div className="flex flex-wrap justify-around	 p-4">
                <div className="flex items-center mr-2 mb-2">
                  <input
                    type="checkbox"
                    id="backgroundRemoval"
                    value="Image Background Removal"
                    checked={selectedOptions.includes('Image Background Removal')}
                    onChange={() => handleOptionSelect('Image Background Removal')}
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="backgroundRemoval" className="ml-2 text-slate-950 text-xl font-semibold">
                    Image Background Removal
                  </label>
                </div>
                <div className="flex items-center mr-2 mb-2">
                  <input
                    type="checkbox"
                    id="imageEnhancement"
                    value="Image Enhancement"
                    checked={selectedOptions.includes('Image Enhancement')}
                    onChange={() => handleOptionSelect('Image Enhancement')}
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="imageEnhancement" className="ml-2 text-slate-950 text-xl font-semibold">
                    Image Enhancement
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

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="fixed bg-white rounded-lg p-4 shadow-lg">
            <p className="text-center text-red-500 font-medium">Please select at least one option.</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;