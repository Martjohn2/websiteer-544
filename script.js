document.getElementById('movieIdInput').addEventListener('input', function() {
    const movieId = this.value;
    if (movieId) {
        const movieSource = document.getElementById('movieSource');
        movieSource.src = `Movies/${movieId}.mp4`;
        document.getElementById('moviePlayer').load();
    }
});
