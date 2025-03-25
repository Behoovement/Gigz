function displayEvents() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Upcoming Events</h2>';
    events.forEach(event => {
        content.innerHTML += `
        <div class="card">
            <h3>${event.title}</h3>
            <p>📍 Location: ${event.location}</p>
            <p>💰 Price: ${event.price}</p>
            <p>📅 Date: ${event.date}</p>
        </div>
        `;
    });
}

function displayUsers() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Gigz Users</h2>';
    users.forEach(user => {
        content.innerHTML += `
        <div class="card">
            <h3>${user.name}</h3>
            <p>🎭 Type: ${user.type}</p>
            <p>⭐ Rating: ${user.rating}</p>
        </div>
        `;
    });
}