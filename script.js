// Show battle page when Battle button is clicked
document.getElementById('battle-button').addEventListener('click', function() {
    document.getElementById('main-page').style.display = 'none';  // Hide the main page
    document.getElementById('battle-page').style.display = 'flex';  // Show the battle page
});

// Simple functionality to select a tile (for troop movement later)
document.querySelectorAll('.grid').forEach(function(tile) {
    tile.addEventListener('click', function() {
        this.style.backgroundColor = 'lightgreen';  // Simulate moving a troop
    });
});
