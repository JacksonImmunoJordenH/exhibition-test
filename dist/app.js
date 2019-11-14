"use strict";

var selectDrop = document.getElementById("select-drop");
var dropDown = document.querySelectorAll('.dropdown');

selectDrop.addEventListener("change", function () {

    var value = selectDrop.options[selectDrop.selectedIndex].value;
    var hideDrop = document.querySelectorAll('.all-drop');

    var showDrop = document.querySelectorAll("." + value);
    var showAll = document.querySelectorAll('.all');

    for (var i = 0; i < hideDrop.length; i++) {
        hideDrop[i].style.display = "none";
    }

    for (var _i = 0; _i < showDrop.length; _i++) {
        if (value == "all-drop") {

            showDrop[_i].style.display = "none";

            for (var n = 0; n < showAll.length; n++) {
                showAll[n].style.display = "table-row";
            }
        } else {
            showDrop[_i].style.display = "block";

            for (var _n = 0; _n < dropDown.length; _n++) {
                dropDown[_n].selectedIndex = 0;
            }

            for (var _n2 = 0; _n2 < showAll.length; _n2++) {
                showAll[_n2].style.display = "table-row";
            }
        }
    }
});

// Assigns select elements with a class of dropdown to dropDown variable

var _loop = function _loop(i) {
    // Adds a "change" event listener to select element, runs an anonymous function
    dropDown[i].addEventListener("change", function () {
        // Checks the value of the selected drop down item, stores it into the "value" variable
        var value = dropDown[i].options[dropDown[i].selectedIndex].value;

        // Store all elements with a class of "hide-list" into the "hideList" variable.
        var hideList = document.querySelectorAll('.hide-list');

        // Uses the value we stored earlier to find all elements with a class equal to that value
        // stores this information into the "showItem" variable.
        var showItem = document.querySelectorAll("." + value);

        // Runs for all elements with the "hide-list" class. Sets the display to none 
        // to remove them completely from the flow of the page.
        for (var _i2 = 0; _i2 < hideList.length; _i2++) {
            hideList[_i2].style.display = "none";
        }

        // Runs for all elements that have a class equal to the value of the drop down select element. 
        // Set's the display to initial to reinstate the element into the flow of the page.
        for (var _i3 = 0; _i3 < showItem.length; _i3++) {
            showItem[_i3].style.display = "table-row";
        }
    });
};

for (var i = 0; i < dropDown.length; i++) {
    _loop(i);
}