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

            // Default sort by "Class Name" (assuming it's the first column)
            table.setAttribute('data-sort-asc', 'true'); // Set initial sort order to ascending
            sortTable(table, 0);
            tableHeader.querySelector('th').classList.add('active-sort'); // Apply active sort class on load

            tableHeader.addEventListener('click', function(event) {
                if (event.target.tagName === 'TH') {
                    var index = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
                    sortTable(table, index);

                    // Remove active class from all headers and add to the clicked one
                    Array.prototype.forEach.call(tableHeader.querySelectorAll('th'), function(th) {
                        th.classList.remove('active-sort');
                    });
                    event.target.classList.add('active-sort');
                }
            });
        }
    }
});

function sortTable(table, columnIndex) {
    var rows = Array.prototype.slice.call(table.querySelectorAll('tbody tr'));
    var isAscending = table.getAttribute('data-sort-asc') === 'true';
    rows.sort(function(rowA, rowB) {
        var cellA = rowA.children[columnIndex].innerText;
        var cellB = rowB.children[columnIndex].innerText;
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
    rows.forEach(function(row) {
        table.querySelector('tbody').appendChild(row);
    });
    table.setAttribute('data-sort-asc', !isAscending);
}
