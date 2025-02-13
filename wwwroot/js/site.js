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
            updateSortIcons(tableHeader, 0, true); // Update sort icons on load

            tableHeader.addEventListener('click', function(event) {
                var target = event.target;
                while (target && target.tagName !== 'TH') {
                    target = target.parentNode;
                }
                if (target && target.tagName === 'TH') {
                    var index = Array.prototype.indexOf.call(target.parentNode.children, target);
                    // Exclude the last column from sorting
                    if (index === target.parentNode.children.length - 1) {
                        return;
                    }
                    var isAscending = table.getAttribute('data-sort-asc') === 'true';
                    
                    // Toggle sort order before sorting
                    table.setAttribute('data-sort-asc', !isAscending);
                    
                    // Sort table and update icons
                    sortTable(table, index);
                    updateSortIcons(tableHeader, index, !isAscending);
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
}

function updateSortIcons(tableHeader, columnIndex, isAscending) {
    Array.prototype.forEach.call(tableHeader.querySelectorAll('th'), function(th, index) {
        th.classList.remove('active-sort-asc', 'active-sort-desc');
        th.querySelector('.sort-icon')?.remove();
        if (index === columnIndex) {
            var sortIcon = document.createElement('span');
            sortIcon.classList.add('sort-icon');
            sortIcon.innerHTML = isAscending ? '&#9660;' : '&#9650;'; // Down and up arrows
            th.appendChild(sortIcon);
            th.classList.add(isAscending ? 'active-sort-desc' : 'active-sort-asc');
        }
    });
}
