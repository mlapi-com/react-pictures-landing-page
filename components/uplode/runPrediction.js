import axios from 'axios';

const apiUrl = 'https://api.replicate.com/v1/predictions';
const apiToken = '792a5717632ca9d78ab9a8cd53de7364a44bd306';

export const runPrediction = async (imageUrl, apiPreference) => {
  const checkPredictionStatus = async (predictionId) => {
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
        const result = predictionResponse.data; // Handle the final prediction result
        console.log('Prediction Result:', result);
      } else if (status === 'error') {
        const error = predictionResponse.data.error; // Handle the error
        console.error('Prediction Error:', error);
      } else {
        // If the status is not 'complete' or 'error', recursively call the function after a delay
        setTimeout(() => {
          checkPredictionStatus(predictionId);
        }, 1000); // You can adjust the delay (in milliseconds) between each status check
      }
    } catch (error) {
      console.error('Error:', error.response);
    }
  };

  const postData = async () => {
    const data = {
      version: apiPreference,
      input: {
        image: imageUrl
      }
    };

    try {
      const response = await axios.post(apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${apiToken}`
        }
      });

      const predictionId = response.data.id;
      console.log('Prediction ID:', predictionId);

      checkPredictionStatus(predictionId);
    } catch (error) {
      console.error('Error:', error.response);
    }
  };

  // Call the function to make the API requests
  await postData();
};
