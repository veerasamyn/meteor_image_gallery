Images = new Mongo.Collection("images_collection");
console.log(Images.find().count());


if (Meteor.isClient) {

	/*var img_data = [
	{
	  img_src : "a.JPG",
	  img_alt : "Sample image" 
	},
	  {
	  img_src : "b.JPG",
	  img_alt : "Sample image 1" }
	];*/

	// Events section
	Template.images.events({
		//event function to resize the image
		'click .js-image':function(event) {
			$(event.target).css("height", "100px");
		},
		'dblclick .js-image':function(event) {
			$(event.target).css("height", "auto");
		},
		//event function to delete the image
		'click .js-delete':function(event) {
			 var image_id = this._id;

			 //hide and delete
			 //used jquery in this place
			 $("#" + image_id).hide('slow', function() {
			 	Images.remove({"_id":image_id});
			 });
		},
		'click .js-rating':function(event) {
			var rating = $(event.currentTarget).data("userrating");
			var image_id = this.id;
			Images.update(
				{"_id":image_id},
				{$set: {img_rating: rating}
			});
		},
		'click .js-add-image-button':function() {
			$("#image_add_form").modal('show');
		}
	});

	//Create a image
	Template.image_add_form.events({
		'submit .js-add-image':function(event) {
			var src = event.target.img_src.value;
			//var alt = event.target.img_alt.value;
			//var label = event.target.img_label.value;
			var desc = event.target.img_desc.value;

			Images.insert(
				{
				  img_src : src,
				  //img_alt : alt,
				  //img_label: label,
				  img_desc: desc,
				  img_rating: 0,
				  createdOn : new Date()
			  	}
			);
			console.log(src);
			$("#image_add_form").modal('close');
			return false;
		}

	});

	//Helpers Section
	Template.images.helpers({
		images: function() {
			return Images.find({}, {sort: {createdOn:-1, img_rating:-1}});
		}
	});
}
 

if (Meteor.isServer) {
  console.log("I am the server");
}
