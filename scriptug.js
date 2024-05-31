function submitRSVP(event) {
    event.preventDefault();

    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;

    // Buat URL dengan query string
    const url = `thankyou.html?name=${encodeURIComponent(name)}&guests=${encodeURIComponent(guests)}`;

    // Buka halaman thankyou.html di tab baru
    window.open(url, '_blank');
}
