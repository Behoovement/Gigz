const events = [
    { name: "Open Mic Poetry", date: "2025-05-10", price: "Free" },
    { name: "Indie Music Night", date: "2025-05-15", price: "$5" },
    { name: "DJ Fest", date: "2025-05-20", price: "$10" }
];
const container = document.getElementById('eventsList');
events.forEach(event => {
    container.innerHTML += `<div class="card">
        <h3>${event.name}</h3>
        <p>${event.date} - ${event.price}</p>
        <a href="events.html">Book Now</a>
    </div>`;
});