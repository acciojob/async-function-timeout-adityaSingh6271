//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const outputDiv = document.getElementById("output");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    // Validate input
    if (!text || isNaN(delay)) {
      alert("Please enter valid values for text and delay.");
      return;
    }

    // Clear previous output
    outputDiv.textContent = "";

    // Wait for the specified delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // Display text after delay
    outputDiv.textContent = text;
  });
});
