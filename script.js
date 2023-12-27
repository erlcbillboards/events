// script.js
document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.getElementById("events-container");

    // Fetch events from your text file
    fetch("events.txt")
        .then(response => response.text())
        .then(data => {
            // Process the data and display events
            const eventsData = data.split("\n");
            eventsData.forEach(eventData => {
                const [title, date, location, link, description] = eventData.split("|");

                // Create a container for each event
                const eventContainer = document.createElement("div");
                eventContainer.classList.add("event-box");

                // Event title
                const titleElement = document.createElement("h2");
                titleElement.textContent = title;
                eventContainer.appendChild(titleElement);

                // Event date and location
                const infoElement = document.createElement("p");
                infoElement.textContent = `${date} | ${location}`;
                eventContainer.appendChild(infoElement);

                // Event description
                const descriptionElement = document.createElement("p");
                descriptionElement.textContent = description;
                eventContainer.appendChild(descriptionElement);

                // Learn more link
                const linkElement = document.createElement("a");
                linkElement.textContent = "Learn more";
                linkElement.href = link;
                linkElement.target = "_blank"; // Open link in a new tab
                eventContainer.appendChild(linkElement);

                // Append the event container to the main container
                eventsContainer.appendChild(eventContainer);
            });
        })
        .catch(error => console.error("Error fetching events:", error));
});
