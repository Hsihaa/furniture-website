document.addEventListener("DOMContentLoaded", function () {
    const trackForm = document.querySelector("form");

    trackForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from refreshing page

        const orderNumber = document.getElementById("orderNumber").value.trim();
        const awsNumber = document.getElementById("awsNumber").value.trim();

        if (orderNumber === "" || awsNumber === "") {
            alert("❌ Please enter both Order Number and AWS Number.");
            return;
        }

        // Simulated tracking status messages
        const statusMessages = [
            "🟡 Your order is being processed.",
            "🟢 Your order is out for delivery.",
            "✅ Your order has been delivered!"
        ];
        
        // Get a random status
        const randomStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];

        // Display the tracking result dynamically
        const resultDiv = document.getElementById("trackingResult");
        resultDiv.innerHTML = <p class="alert alert-info">${randomStatus}</p>;
    });
});