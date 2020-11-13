$(document).ready(function () {
  $("#sub").click(function () {
    //when the page is loaded and user has entered the data
    //we then fetch the values from user inputs via jquery value func
    var container = $("#container");
    var flabel = $("#flabel").val();
    var fname = $("#fname").val();
    var fid = $("#fid").val();
    var cssclass = $("#cssclass").val();
    var ftype = $("#ftype").val();

//to prevent form for redirecting post

    $("#fform").submit(function (e) {
     e.preventDefault();
   });

    //creating label with label name here
    var newtnode = document.createTextNode;
    newtnode = flabel;
    container.append(newtnode);

    //creating new input field with the help of fecthed user input field data
    var newinput = document.createElement("input");
    newinput.type = ftype;
    newinput.name = fname;
    newinput.id = fid;
    newinput.className = cssclass; // set the CSS class
    container.append(newinput);
    container.append(document.createElement("br"));
  });
});
