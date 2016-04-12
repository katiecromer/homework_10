// 1.    addToDoListItem
$("#new").on("submit", addNewItem);

// 2.    removeToDoListItem
// $(".remove").on("click", removeItem);
$('#todos').on('click', '.remove', removeItem);

// 3.    editToDoListItem
$('#todos').on('click', '.edit', editItem);


// 4.    saveEditedToDoListItem
$('#todos').on('submit', '.editor', saveItem);



// 5.    switchCompletedStatusOfToDoListItem if students decide they want to be able to undo marking an item as complete.
$('#todos').on('click', '.item', switchStatus);


// 6.    emptyToDoList
$('#clear').on('click', clearList);

// 7.    removeCompletedToDoListItems
$('#clearCompleted').on('click', clearCompleted);

// 8.    updateNumberOfToDoListItems

function updateCount(){
    var count = $("#todos li span").not(".done").length
    $("#count").text(count);
}

function clearList(){
    $('#todos li').remove();
    updateCount();
}

function clearCompleted(){
    $(".done").parent().remove();
    updateCount();

}

function switchStatus(){
    //      *    When the user clicks on the list item
    // *    Get the to-do list item the user clicked on
    $(this).toggleClass("done");
    // *    Add a css line-through style to the item
  updateCount();
}

function saveItem(event){
    event.preventDefault();
    // *    Select the to-do list item the user wants to save
    // *    Get the value of the input inside of this item
    var itemText = $(this).children("input").val();

    var newItemHtml = "<li>" + 
                                                "<span class='item'>" + itemText + "</span>" +
                                                "<a class='edit'>Edit</a>" +
                                                "<a class='remove'>Remove</a>" +
                                        "</li>";
    // *    Replace the input in the list item with the value of the input field
    $(this).parent().html(newItemHtml);
}


function editItem(event){
    // Prevent page reload
    event.preventDefault();

    var itemText = $(this).siblings(".item").text();
    // *    Select the to-do list item the user wants to edit
    var formHtml = '<form class="editor">' +
                                        '<input value="'+ itemText +'">' +
                                 '</form>';
    
    $(this).parent().html(formHtml);

  $('.editor input').focus();

    // *    Replace the text in the list item with an input whose value is the same as the existing text
    // *    Show the save edit button and hide the edit button

}



function removeItem(event){
    // Prevent page reload
    event.preventDefault();
        // The parent is the item; remove it
    $(this).parent().remove();

    // The list has been changed, so update the count
    updateCount();
}


function addNewItem(event){
    // Prevent page reload
    event.preventDefault();
    // *    Select the input field the user has typed their to-do list info into
    // *    Get the value of the input field
    var newItem = $("#newItem").val();
    // *    Create a list item
    // *    Place the text inside of the list item
    var newItemHtml = "<li>" + 
                                                "<span class='item'>" + newItem + "</span>" +
                                                "<a class='edit'>Edit</a>" +
                                                "<a class='remove'>Remove</a>" +
                                        "</li>";
    // *    Append the list item to our ordered to-do list
    $("#todos").append(newItemHtml);
    $('#newItem').val("");
    updateCount();
}









