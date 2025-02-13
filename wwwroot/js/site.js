// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// jQuery version of the page client-side behaviors
$(document).ready(function() {
    var $table = $('table');
    if ($table.length) {
        var $tableHeader = $table.find('thead');
        if ($tableHeader.length) {
            $tableHeader.css({
                position: 'sticky',
                top: '0',
                zIndex: '1000'
            });

            // Default sort by "Class Name" (assuming it's the first column)
            $table.data('sort-asc', true); // Set initial sort order to ascending
            sortTable($table, 0);
            updateSortIcons($tableHeader, 0, true); // Update sort icons on load

            $tableHeader.on('click', function(event) {
                var $target = $(event.target).closest('th');
                if ($target.length) {
                    var index = $target.index();
                    // Exclude the last column from sorting only on the /Classes page
                    if ($target.hasClass('not-sortable')) {
                        return;
                    }
                    var isAscending = $table.data('sort-asc');
                    
                    // Toggle sort order before sorting
                    $table.data('sort-asc', !isAscending);
                    
                    // Sort table and update icons
                    sortTable($table, index);
                    updateSortIcons($tableHeader, index, !isAscending);
                }
            });

            $tableHeader.on('keydown', function(event) {
                if (event.key === 'Enter') {
                    var $target = $(event.target).closest('th');
                    if ($target.length) {
                        var index = $target.index();
                        // Exclude the last column from sorting only on the /Classes page
                        if ($target.hasClass('not-sortable')) {
                            return;
                        }
                        var isAscending = $table.data('sort-asc');
                        
                        // Toggle sort order before sorting
                        $table.data('sort-asc', !isAscending);
                        
                        // Sort table and update icons
                        sortTable($table, index);
                        updateSortIcons($tableHeader, index, !isAscending);
                    }
                }
            });
        }
    }
});

function sortTable($table, columnIndex) {
    var $rows = $table.find('tbody tr').toArray();
    var isAscending = $table.data('sort-asc');
    $rows.sort(function(rowA, rowB) {
        var cellA = $(rowA).children().eq(columnIndex).text();
        var cellB = $(rowB).children().eq(columnIndex).text();
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
    $.each($rows, function(index, row) {
        $table.children('tbody').append(row);
    });
}

function updateSortIcons($tableHeader, columnIndex, isAscending) {
    $tableHeader.find('th').each(function(index) {
        var $th = $(this);
        $th.removeClass('active-sort-asc active-sort-desc');
        $th.find('.sort-icon').remove();
        if (index === columnIndex) {
            var $sortIcon = $('<span>').addClass('sort-icon').html(isAscending ? '&#9660;' : '&#9650;'); // Down and up arrows
            $th.append($sortIcon);
            $th.addClass(isAscending ? 'active-sort-desc' : 'active-sort-asc');
        }
    });
}

// An all-browser compatible JavaScript version that performs the same behaviors as the jQuery code above.
/*
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
                    // Exclude the last column from sorting only on the /Classes page
                    if (target.classList.contains('not-sortable')) {
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

            tableHeader.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    var target = event.target;
                    while (target && target.tagName !== 'TH') {
                        target = target.parentNode;
                    }
                    if (target && target.tagName === 'TH') {
                        var index = Array.prototype.indexOf.call(target.parentNode.children, target);
                        // Exclude the last column from sorting only on the /Classes page
                        if (target.classList.contains('not-sortable')) {
                            return;
                        }
                        var isAscending = table.getAttribute('data-sort-asc') === 'true';
                        
                        // Toggle sort order before sorting
                        table.setAttribute('data-sort-asc', !isAscending);
                        
                        // Sort table and update icons
                        sortTable(table, index);
                        updateSortIcons(tableHeader, index, !isAscending);
                    }
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

*/

