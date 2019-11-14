const selectDrop = document.getElementById("select-drop");

selectDrop.addEventListener("change", () => {

    const value = selectDrop.options[selectDrop.selectedIndex].value;
    const hideDrop = document.querySelectorAll('.all-drop');

    const showDrop = document.querySelectorAll(`.${value}`);
    const showAll = document.querySelectorAll('.all');

    for (let i = 0; i< hideDrop.length; i++) {
        hideDrop[i].style.display = "none";
    }

    for (let i = 0; i< showDrop.length; i++) {
        if (value == "all-drop") {

            showDrop[i].style.display = "none";

            for (let n = 0; n < showAll.length; n++) {
                showAll[n].style.display = "table-row";
            }

        } else {
            showDrop[i].style.display = "block";
        }
    }
});

// Assigns select elements with a class of dropdown to dropDown variable
const dropDown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropDown.length; i++) {
// Adds a "change" event listener to select element, runs an anonymous function
    dropDown[i].addEventListener("change", () => {
        // Checks the value of the selected drop down item, stores it into the "value" variable
        const value = dropDown[i].options[dropDown[i].selectedIndex].value;

        // Store all elements with a class of "hide-list" into the "hideList" variable.
        const hideList = document.querySelectorAll('.hide-list');

        // Uses the value we stored earlier to find all elements with a class equal to that value
        // stores this information into the "showItem" variable.
        const showItem = document.querySelectorAll(`.${value}`);

        // Runs for all elements with the "hide-list" class. Sets the display to none 
        // to remove them completely from the flow of the page.
        for (let i = 0; i< hideList.length; i++) {
            hideList[i].style.display = "none";
        }

        // Runs for all elements that have a class equal to the value of the drop down select element. 
        // Set's the display to initial to reinstate the element into the flow of the page.
        for (let i = 0; i< showItem.length; i++) {
            showItem[i].style.display = "table-row";
        }
    });
}