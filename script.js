//My array of time 
var scheduleHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Getting time from moment.js
var day = moment().format("MMM Do YY"); 
$("#currentDay").text("Today is "+day);

var time = moment().hour();

//Creating hours on html
function showSchedule() {
    for(let i = 0; i < scheduleHours.length; i++) {

        var row = $("<div class='row'>");
        var colHour = $("<div class='col-sm-2 hour'>");

        var americanHours = scheduleHours[i] + " A.M.";

        if(scheduleHours[i] >= 12) {
            americanHours = scheduleHours[i] + " P.M.";

            if(scheduleHours[i] >=13) {
                americanHours = scheduleHours[i] -12 + " P.M.";
            }
        }
      

        //Appending hours to html
        colHour.append(americanHours);

        //Creating text Area
        var colText = $("<div class='col-sm-8'>");

        var textArea = $("<textarea>")
        textArea.attr("id", "textarea"+ i)
        textArea.addClass("form-control");

        if(time > scheduleHours[i]){
            textArea.css("background", "#d3d3d3");
        }

       
        if(time === scheduleHours[i]){
            textArea.css("background", "#ff6961");
        }

        
        if(time < scheduleHours[i]){
            textArea.css("background", "#77dd77");
        }

        //checking info in local storage
        var storeText = localStorage.getItem("textarea"+i);
        textArea.text(storeText);
        colText.append(textArea);

        //Saving to local storage
        var colSave = $("<div class='col-sm-2'>");
        var button = $("<button>")
        button.addClass("save")
        button.text("SAVE")
        colSave.append(button);


        row.append(colHour, colText, colSave);
        $("#scheduler").append(row);

    }

}

showSchedule();

$(".save").on("click", function () {
    for(let i = 0; i < scheduleHours.length; i++) {
        let reminders = $("#textarea"+i).val();
        localStorage.setItem("textarea" +i, reminders);
    }
})

