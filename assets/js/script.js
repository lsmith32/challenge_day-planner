//Moment declaration to pull day/time
moment();
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
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm a');
//puts into HTML
$(".block2").text(time2);

//11am
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm a');
//puts into HTML
$(".block3").text(time3);

//12pm
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm a');
//puts into HTML
$(".block4").text(time1);

//13pm
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm a');
//puts into HTML
$(".block5").text(time5);

//14pm
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm a');
//puts into HTML
$(".block6").text(time6);

//15pm
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm a');
//puts into HTML
$(".block7").text(time7);

//16pm
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm a');
//puts into HTML
$(".block8").text(time8);

//17pm
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm a');
//puts into HTML
$(".block9").text(time9);

//function to compare current time with hour blocks