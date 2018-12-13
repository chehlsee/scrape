// used from inclass 20-scraping-with-mongoose
// Grab the Article as a json
// this is the js you use with handlebars
// this is on the client side
$.getJSON("/Article", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#Article").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});


// Whenever someone clicks a p tag
$(document).on("click", "p", function() {
  // Empty the Note from the Note section
  $("#Note").empty();
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/Article/" + thisId
  })
    // With that done, add the Note information to the page
    .then(function(data) {
      console.log(data);
      // The title of the Article
      $("#Note").append("<h2>" + data.title + "</h2>");
      // An input to enter a new title
      $("#Note").append("<input id='titleinput' name='title' >");
      // A textarea to add a new Note body
      $("#Note").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new Note, with the id of the Article saved to it
      $("#Note").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      // If there's a Note in the Article
      if (data.Note) {
        // Place the title of the Note in the title input
        $("#titleinput").val(data.Note.title);
        // Place the body of the Note in the body textarea
        $("#bodyinput").val(data.Note.body);
      }
    });
});

// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the Article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the Note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/Article/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from Note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the Note section
      $("#Note").empty();
    });

  // Also, remove the values entered in the input and textarea for Note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
