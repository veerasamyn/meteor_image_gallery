if (Meteor.isServer) {

	Meteor.startup(function() {

		if (Images.find().count() == 0) {
			Images.insert(
				{
				  img_src : "a.JPG",
				  img_alt : "Sample image" ,
				  img_label: "First Image",
				  img_desc: "First Image Description"
			  	}
			);
			Images.insert(
				{
				  img_src : "b.JPG",
				  img_alt : "Sample image 2",
				  img_label: "Second Image",
				  img_desc: "Second Image Description"
			  	}
			);
			Images.insert(
				{
				  img_src : "c.JPG",
				  img_alt : "Sample image 3",
				  img_label: "Third Image",
				  img_desc: "Third Image Description"
			  	}
			);
			Images.insert(
				{
				  img_src : "d.JPG",
				  img_alt : "Sample image 4",
				  img_label: "Fourth Image",
				  img_desc: "Fourth Image Description"
			  	}
			);
			Images.insert(
				{
				  img_src : "e.JPG",
				  img_alt : "Sample image 5",
				  img_label: "Final Image",
				  img_desc: "Final Image Description"
			  	}
			);
		} else {
			console.log("The total images count -- " + Images.find().count());
		}
	});
}