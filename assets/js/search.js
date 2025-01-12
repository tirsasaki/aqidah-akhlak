var searchInput = document.getElementById('searchInput');
var searchResults = document.getElementById('searchResults');

var data = [];

fetch('/search-index.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
    });

searchInput.addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var results = [];

    if (searchTerm.length > 1) {
        results = data.filter(item => {
            return item.title.toLowerCase().includes(searchTerm) ||
                   item.content.toLowerCase().includes(searchTerm) ||
                   (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm))) ||
                   (item.categories && item.categories.some(cat => cat.toLowerCase().includes(searchTerm)));
        });
    }

    displayResults(results);
});

function displayResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        return;
    }

    results.forEach(result => {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = result.permalink;
        a.textContent = result.title;
        li.appendChild(a);
        searchResults.appendChild(li);
    });
}