document.getElementById('eventDetails').innerHTML = `<div class="card">
    <h2>Indie Music Night</h2>
    <p>Date: 2025-05-15</p>
    <p>Price: $5</p>
    <button onclick="pay()">Book and Pay</button>
</div>`;
function pay(){
    alert("Redirecting to payment gateway...");
    window.location.href="payment.html";
}