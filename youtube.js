const API_KEY = 'AIzaSyBDCk8xjxwQ2jlQUDIkNAfD6J3O94oHg7g';  // ضع مفتاح API الخاص بك هنا



function searchVideos() {
    const query = document.getElementById('search-query').value;

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayResults(videos) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    videos.forEach(video => {
        const videoId = video.id.videoId;
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
            </a>
            <h3>${video.snippet.title}</h3>
            <p>${video.snippet.description}</p>
        `;
        results.appendChild(videoElement);
    });
}