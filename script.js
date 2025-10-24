// Local movie database (an array of movie objects)
const localMovies = [
    {
        id: 1,
        title: "Inception",
        poster: "https://m.media-amazon.com/images/I/912AErFSBHL._AC_SL1500_.jpg",
        year: 2010,
        director: "Christopher Nolan",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        id: 2,
        title: "The Matrix",
        poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        year: 1999,
        director: "The Wachowskis",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
        id: 3,
        title: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg",
        year: 2014,
        director: "Christopher Nolan",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        id: 4,
        title: "Parasite",
        poster: "https://m.media-amazon.com/images/I/91S+nGNy5YL._AC_SL1500_.jpg",
        year: 2019,
        director: "Bong Joon Ho",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    }
];

const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

// --- Functions ---

// Function to display movies
function displayMovies(movies) {
    movieContainer.innerHTML = ''; // Clear existing movies
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-card-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>
        `;
        // Add click event to open modal
        movieCard.addEventListener('click', () => showMovieDetails(movie.id));
        movieContainer.appendChild(movieCard);
    });
}

// Function to show movie details in a modal
function showMovieDetails(movieId) {
    const movie = localMovies.find(m => m.id === movieId);
    modalBody.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div>
            <h2>${movie.title}</h2>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p>${movie.description}</p>
        </div>
    `;
    modal.style.display = 'block';
}

// Function to handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = localMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

// --- Event Listeners ---

// Search event
searchInput.addEventListener('input', handleSearch);

// Close modal events
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// --- Initial Load ---
// Display all movies when the page loads
displayMovies(localMovies);
