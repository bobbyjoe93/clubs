Emails = new Meteor.Collection("emails");
Profiles = new Meteor.Collection("profiles");

if (Meteor.isServer){
	Accounts.validateNewUser(function (user) {
		if (user.username && user.username.length >= 3){
			return true;
		}
		else {
			throw new Meteor.Error(403, "Username must have at least 3 characters");
		}
	});
	Accounts.config({
		sendVerificationEmail : 'True',
		restrictCreationByEmailDomain : 'berkeley.edu'
	});
}

if (Meteor.isClient){
	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_AND_EMAIL'
	});


	Meteor.Router.add({
		'/about' : 'About',
		'/contact': 'Contact',
		'/': 'EmailForm',
		'/admin' : 'Admin',
		'/recruit' : 'Recruit',
		'/students' : 'Students'
	});
	Meteor.Router.filters({
		'needsAdmin' : function (page) {
			if (Meteor.user() && Meteor.user().username === 'admin'){
				return page;
			}
			else {
				alert('Please login as Admin to view this page.');
				return 'EmailForm';
			}
		}/*,
		'needsStudent' : function (page) {
			if (Meteor.user() && Meteor.user.username != null){
				return page;
			}
			else {
				alert("Please login to view this page.");
				return 'EmailForm';
			}
		}*/
	});

	// only apply to the 'Admin' page
	Meteor.Router.filter('needsAdmin', {only: 'Admin'});
	//Meteor.Router.filter('needsStudent', {only: 'Students'});
	
	Template.EmailForm.events = {
		'submit': function(e, tmpl) {
			e.preventDefault();

			var newEmail = {
				email: tmpl.find('#email').value
			};
			console.log(newEmail);
			Emails.insert(newEmail);
		}
	};

	Template.User.events = {
		'submit': function (e, tmpl) {
			e.preventDefault();

			var first_name = tmpl.find('#first-name').value;
			var last_name = tmpl.find('#last-name').value;
			var grad_year = tmpl.find('#grad-year').value;
			var majors = [];
		    var majors_lst = $('#major option:selected').each(function () {
		    	majors.push($(this).val());
		    });
		    var resume = tmpl.find('#resume').value;

		    console.log(majors_lst);
		    console.log(majors);
		    
			Profiles.insert({
				first_name_key : first_name, 
				last_name_key : last_name,
				grad_year_key : grad_year,
				majors_key : majors,
				resume_key : resume
			});
		}
	};

	
	var profiles = Profiles.find().fetch();
	Template.Admin.helpers({
		profiles : profiles
	});
}

