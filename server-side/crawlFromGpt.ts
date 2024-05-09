// export async function getGPTResponse(prompt: string) {}

// import OpenAi from "openai";
//
// // this is the way to implement chat gpt into app
// // https://www.youtube.com/watch?v=NLomlGhjlNM
//
// require("dotenv").config();
// // Importing the fetch function (only necessary in a Node.js environment)
// // @ts-ignore
// const fetch = require("node-fetch");
//
// // Set the OpenAI API URL and API key
// const openAIClient = new OpenAi({
//   apiKey: process.env["OPENAI_API_KEY"],
// });

// const chatCompletion =

// Define an asynchronous function to get a response from GPT
// export async function getGPTResponse(prompt: string) {
//   // Configure the request options including the HTTP method, headers, and body
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env["OPENAI_API_KEY "]}`, // Use the API key for authorization
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo", // Specify the model you want to use (e.g., 'text-davinci-003')
//       prompt: prompt, // Input prompt text
//       max_tokens: 150, // Maximum number of tokens in the response
//       temperature: 0.7, // Control the randomness of the output (higher values are more creative)
//     }),
//   };
//
//   try {
//     // Send the request and wait for the response
//     const response = await fetch(process.env["OPENAI_API_URL "], options);
//
//     console.log("getGPTResponse is called", response);
//     // Check if the response status is not 200 (success)
//     if (!response.ok) {
//       throw new Error(
//         `Request failed: ${response.status} - ${response.statusText}`
//       );
//     }
//
//     // Parse the JSON response
//     const data = await response.json();
//     // Return the generated text
//     return data.choices[0].text.trim(); // Get the generated text from the response
//   } catch (error) {
//     console.error("Error fetching GPT response:", error);
//     return null;
//   }
// }
