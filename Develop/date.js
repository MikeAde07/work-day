//$(".lead").text = moment().format("[Today is] dddd, MMMM Do YYYY");
var date = moment().format("[Today is] dddd, MMMM Do YYYY");
$("#currentDay").append(date);
//console.log(date);
//console.log(moment().format("[Today is] dddd, MMMM Do YYYY"));
var time = moment($("time"), "hh:mm");
console.log(time);

//var time = moment().
$(".container").on("click", ".row", function() {
    console.log("div clicked");
    var taskLi = $("<li>");
    var taskP = $("<p>").addClass("description");
    //var textInput = $("<textarea>");
    //var inputP = window.prompt("Add Task");
    //var text = inputP;
    var textInput = $("<textarea>");
    var inputP = $("<input>");
    textInput.append(inputP);
    //var taskArea = $(this).replaceWith(textInput);
    //textInput.trigger("focus");
    taskP.append(textInput);
    //taskP.append(textInput);
    taskLi.append(taskP);
    $(this).append(taskLi);
    console.log(taskP);
})


//$(".row").on("click", "textarea", function() {
    //console.log("textarea clicked");
    //var inputP = window.prompt("Add Task");
    //var text = inputP.text().trim();
    //var textInput = $("<textarea>").text(text);
    //var taskArea = $(this).replaceWith(textInput);
    //textInput.trigger("focus");
    //taskP.append(taskArea);
//})
//var createTask = function() {

//}

//var timeCheck = moment($()) 
// event listener for when h4 is clicked
$(".row").on("click", "h4", function() {
   //acquire the h4 string
    var time = (this).innerText;
    //console.log(typeof time);
    console.log(time);
    // acquire the present time
    var timeNow = moment().format("hh");
    // display/log the present time
    console.log(timeNow);
    
    // if the present time is greater than the time slot selected (past time slot) then...
    if (timeNow > parseInt(time)) {
        console.log("Time has passed");
        $(this).closest(".row").addClass("past");
    }
    // if the present hour is the equal to the time slot selected (current time slot) then....
    else if(timeNow == parseInt(time)) {
        console.log("Time is now");
        $(this).closest(".row").addClass("present");
    } 
    // if the present hour is less than the time slot selected (future time slot) then.....
    else {
        console.log("Time is in the future");
        $(this).closest(".row").addClass("future");
    }
})