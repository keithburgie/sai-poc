// import axios from 'axios';

// // Replace with your actual API endpoint
// const API_URL = 'https://your-azure-function-url.azurewebsites.net/api/submitSurvey';

// export const submitSurvey = async (data: any, clientName: string) => {
//   try {
//     const response = await axios.post(API_URL, {
//       data,
//       clientName,
//       timestamp: new Date().toISOString()
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error submitting survey:', error);
//     throw error;
//   }
// };

export const submitSurvey = async (data: any, clientName: string) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Create the object that would be submitted to the database
  const submittedData = {
    data,
    clientName,
    timestamp: new Date().toISOString()
  };

  // Log the data that would be submitted
  console.log('Submitted survey data:', submittedData);

  // Return the submitted data
  return submittedData;
};