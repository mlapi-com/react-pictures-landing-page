"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.replicate.com/v1/predictions';
const apiToken = '792a5717632ca9d78ab9a8cd53de7364a44bd306';

const App = () => {
  const [predictionId, setPredictionId] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);
  const [predictionError, setPredictionError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const postData = async () => {
      const data = {
        version: 'fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003',
        input: {
          image: selectedImage
        }
      };

      try {
        const response = await axios.post(apiUrl, data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${apiToken}`
          }
        });

        const id = response.data.id;
        setPredictionId(id);
      } catch (error) {
        console.error('Error:', error.response);
      }
    };

    if (selectedImage) {
      postData();
    }
  }, [selectedImage]);

  useEffect(() => {
    const checkPredictionStatus = async () => {
      if (predictionId === '') return;

      const predictionUrl = `${apiUrl}/${predictionId}`;

      try {
        const predictionResponse = await axios.get(predictionUrl, {
          headers: {
            'Authorization': `Token ${apiToken}`
          }
        });

        const status = predictionResponse.data.status;
        console.log('Prediction Status:', status);

        if (status === 'complete') {
          const result = predictionResponse.data;
          setPredictionResult(result);
        } else if (status === 'error') {
          const error = predictionResponse.data.error;
          setPredictionError(error);
        } else {
          setTimeout(() => {
            checkPredictionStatus();
          }, 1000);
        }
      } catch (error) {
        console.error('Error:', error.response);
      }
    };

    checkPredictionStatus();
  }, [predictionId]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-2 bg-white text-slate-900">
      <h1>Prediction Output</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      {predictionResult && (
        <div>
          <h2>Result</h2>
          <p>Output URL: {predictionResult.urls.get}</p>
        </div>
      )}
      {predictionError && (
        <div>
          <h2>Error</h2>
          <p>{predictionError}</p>
        </div>
      )}
    </div>
  );
};

export default App;
