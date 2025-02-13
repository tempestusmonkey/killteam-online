// Show mode selection page when Battle button is clicked
document.getElementById('battle-button').addEventListener('click', function() {
    document.getElementById('main-page').style.display = 'none';  // Hide main page
    document.getElementById('mode-page').style.display = 'flex';  // Show mode selection
});

// Hide mode page and show battle page for "Into the Dark" or "Standard" selection
document.getElementById('into-the-dark').addEventListener('click', function() {
    document.getElementById('mode-page').style.display = 'none';  // Hide mode selection page
    document.getElementById('battle-page').style.display = 'flex';  // Show battle page
    // Set game mode to "Into the Dark"
    console.log("Game mode: Into the Dark");
});

document.getElementById('standard').addEventListener('click', function() {
    document.getElementById('mode-page').style.display = 'none';  // Hide mode selection page
    document.getElementById('battle-page').style.display = 'flex';  // Show battle page
    // Set game mode to "Standard"
    console.log("Game mode: Standard");
});

// Back button functionality
document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('mode-page').style.display = 'none';  // Hide mode page
    document.getElementById('main-page').style.display = 'flex';  // Show main page
});

document.getElementById('back-from-battle').addEventListener('click', function() {
    document.getElementById('battle-page').style.display = 'none';  // Hide battle page
    document.getElementById('mode-page').style.display = 'flex';  // Show mode page again
});
