// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener('DOMContentLoaded', function() {
    var table = document.querySelector('table');
    if (table) {
        var tableHeader = table.querySelector('thead');
        if (tableHeader) {
            tableHeader.style.position = 'sticky';
            tableHeader.style.top = '0';
            tableHeader.style.zIndex = '1000';
            tableHeader.style.backgroundColor = 'white'; // Optional: to ensure the header has a background
        }
    }
});
