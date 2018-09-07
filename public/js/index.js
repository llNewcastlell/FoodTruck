// // Get references to page elements
// var $foodTruckText = $("#foodTruck-text");
// var $foodTruckDescription = $("#foodTruck-description");
// var $submitBtn = $("#submit");
// var $foodTruckList = $("#foodTruck-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   savefoodTruck: function(foodTruck) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/foodTruck",
//       data: JSON.stringify(foodTruck)
//     });
//   },
//   getfoodTrucks: function() {
//     return $.ajax({
//       url: "api/foodTruck",
//       type: "GET"
//     });
//   },
//   deletefoodTruck: function(id) {
//     return $.ajax({
//       url: "api/foodTruck/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshfoodTrucks gets new foodTrucks from the db and repopulates the list
// var refreshfoodTrucks = function() {
//   API.getfoodTrucks().then(function(data) {
//     var $foodTrucks = data.map(function(foodTruck) {
//       var $a = $("<a>")
//         .text(foodTruck.text)
//         .attr("href", "/foodTruck/" + foodTruck.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": foodTruck.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $foodTruckList.empty();
//     $foodTruckList.append($foodTrucks);
//   });
// };

// // handleFormSubmit is called whenever we submit a new foodTruck
// // Save the new foodTruck to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var foodTruck = {
//     text: $foodTruckText.val().trim(),
//     description: $foodTruckDescription.val().trim()
//   };

//   if (!(foodTruck.text && foodTruck.description)) {
//     alert("You must enter an foodTruck text and description!");
//     return;
//   }

//   API.savefoodTruck(foodTruck).then(function() {
//     refreshfoodTrucks();
//   });

//   $foodTruckText.val("");
//   $foodTruckDescription.val("");
// };

// // handleDeleteBtnClick is called when an foodTruck's delete button is clicked
// // Remove the foodTruck from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deletefoodTruck(idToDelete).then(function() {
//     refreshfoodTrucks();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $foodTruckList.on("click", ".delete", handleDeleteBtnClick);
