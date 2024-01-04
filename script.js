// script.js
document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.getElementById("events-container");

    // Fetch events from your text file
    fetch("events.txt")
        .then(response => response.text())
        .then(data => {
            console.log("Raw data:", data); // Log raw data for debugging

            // Process the data and display events
            const eventsData = data.split("\n");
            eventsData.forEach(eventData => {
                console.log("Event data:", eventData); // Log each event data for debugging

                const [title, date, location, link, description] = eventData.split("|");

                // Check if all fields are defined
                if (title !== undefined && date !== undefined && location !== undefined && link !== undefined && description !== undefined) {
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
                    linkElement.target = ""; // Open link in a new tab
                    eventContainer.appendChild(linkElement);

                    // Append the event container to the main container
                    eventsContainer.appendChild(eventContainer);
                } else {
                    console.error("Invalid event data:", eventData); // Log an error for debugging
                }
            });
        })
        .catch(error => console.error("Error fetching events:", error));
});
