const survey = new Survey.Model(json);

survey.onComplete.add((sender, options) => {
  const data = sender.data;  // { question1: "...", question2: "...", question3: "..." }
  console.log("Survey data:", data);

  // Replace this with your actual Google Apps Script Web App URL
  const url = "https://script.google.com/macros/s/AKfycbx830thpwhEZTNawt_YdaxN4eVQqw3OIt5T2P-ikXt-XTq3br0V2yFHDd3i5IJ6ofE_/exec";

  // Send the data to Google Apps Script
  fetch(url, {
    method: "POST",
    mode: "no-cors",  // keeps things simple for now
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    console.log("Data sent to Google Apps Script");
    // You won't see a detailed response because of "no-cors"
  })
  .catch((error) => {
    console.error("Error sending data:", error);
  });
});

survey.render(document.getElementById("surveyElement"));
