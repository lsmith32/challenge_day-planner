//Moment declaration to pull day/time
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, hh:mm a'));
var currentTime = moment();
//round to nearest hour increment for blocking
currentTime = currentTime.startOf("hour");
//calculates start of day at 9am
var beforeTime = moment().startOf('day').add(9, "hours");

//hour blocks
//9am
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm a');
//puts into HTML
$(".block1").text(time1);

//10am
//11am
//12pm
//13pm
//14pm
//15pm
//16pm
//17pm

//function to compare current time with hour blocks