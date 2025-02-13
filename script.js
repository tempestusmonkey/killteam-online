document.getElementById('battle-button').addEventListener('click', function() {
    document.getElementById('game-mode-selector').style.display = 'block';  // Show game mode selector
});

document.getElementById('standard-mode').addEventListener('click', function() {
    startGame('standard');
});

document.getElementById('into-the-dark-mode').addEventListener('click', function() {
    startGame('into-the-dark');
});

function startGame(mode) {
    console.log('Starting game in mode: ' + mode);
    document.getElementById('game-mode-selector').style.display = 'none';  // Hide game mode selector
    document.getElementById('game-map').style.display = 'block';  // Show the game map
    // You can add logic here to initialize the map or teams based on the selected mode
}

// Simple functionality to select a tile (for troop movement later)
document.querySelectorAll('.grid').forEach(function(tile) {
    tile.addEventListener('click', function() {
        this.style.backgroundColor = 'lightgreen';  // Simulate moving a troop
    });
});
