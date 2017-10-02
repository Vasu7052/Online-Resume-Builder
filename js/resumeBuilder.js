/*
This is empty on purpose! Your code to build the resume will go here.
 */

//  $("#main").append("Vasu Gupta");

 var firstName = "Vasu" ;
 var lastName = "Vasu" ;
 var fullName = "Vasu Gupta" ;
 var role = "Android Developer" ;
 var mobile = 9999854123 ;
 var age = 21 ;
 var photo_url = "http://res.cloudinary.com/devsvasu/image/upload/v1506872088/nvvr8tdpfjrud9s4pmag.jpg" ;
 var welcome = "All the folks are welcome here!"
 var skills = ["Android" , "Guitar" , "Programming"];

  var bio = {

 	"name" : fullName ,
 	"role" : role ,
 	"contactInfo" : {
 		"mobile" : mobile ,
 		"email" : "dev.vasugupta@gmail.com" ,
 		"github" : "AndroFly" ,
 		"twitter" : "@androfly" ,
 		"location" : "Delhi" 
 	} ,
 	"photo_url" : photo_url ,
 	"welcome" : welcome ,
 	"skills" : skills ,
 	"age" : age

 } ;

 var work = {} ;
 work.position = "Advance Android Developer" ;
 work.jobs = [
 	{ 
 		"employer" : "Oracle" ,
 		"title" : "Java" 
	},
	{
		"employer" : "IBM" ,
 		"title" : "Software" 
	},
	{
		"employer" : "Apple" ,
 		"title" : "IOS" 
	} 
 ] ;
 work.years = 1.5 ;
 work.name = "MAIT" ;
 work.years = "2015-2019" ;
 work.city = "Rohini, Delhi" ;

 var education = {
 	"schools" : [
 		{
 			"name" : "DAV public School" ,
 			"city" : "Pitumpura, Delhi" ,
 			"major" : ["Physics" , "Chemistry"] ,
 			"degree" : "12th" ,
 			"years" : "2003-2015"
 		},
 		{
 			"name" : "MAIT" ,
 			"city" : "Rohini, Delhi" ,
 			"major" : ["OOPS" , "DBMS"] ,
 			"degree" : "B.Tech" ,
 			"years" : "2015-2019"
 		}
 	]
 };

 var replacedataName = HTMLheaderName.replace("%data%" , fullName) ;
 var replacedataRole = HTMLheaderRole.replace("%data%" , bio.role) ;
 var replacedataPic = HTMLbioPic.replace("%data%" , bio.photo_url) ;
 var replacedataWelcomeMsg = HTMLwelcomeMsg.replace("%data%" , bio.welcome) ;

 var replacedataMobile = HTMLmobile.replace("%data%" , bio.contactInfo.mobile) ;
 var replacedataEmail = HTMLemail.replace("%data%" , bio.contactInfo.email) ;
 var replacedataGithub = HTMLgithub.replace("%data%" , bio.contactInfo.github) ;
 var replacedataTwitter = HTMLtwitter.replace("%data%" , bio.contactInfo.twitter) ;
 var replacedataLocation = HTMLlocation.replace("%data%" , bio.contactInfo.location) ;

 $("#header").prepend(replacedataRole) ;
 $("#header").prepend(replacedataName) ;
 


 $("#topContacts").append(replacedataMobile) ;
 $("#topContacts").append(replacedataEmail) ;
 $("#topContacts").append(replacedataGithub) ;
 $("#topContacts").append(replacedataTwitter) ;
 $("#topContacts").append(replacedataLocation) ;

 $("#header").append(replacedataPic) ;
 $("#header").append(replacedataWelcomeMsg) ;

 if (bio.skills.length > 0) {

 	$("#header").append(HTMLskillsStart) ;
 	for (var i = 0; i < bio.skills.length; i++) {
 		var replacedataskills = HTMLskills.replace("%data%" , bio.skills[i]) ;
 		$("#header").append(replacedataskills) ;
 	}

 }

 if (work.jobs.length > 0) {

 	$("#workExperience").append(HTMLworkStart) ;
 	for (var i = 0; i < work.jobs.length; i++) {
 		var replacedataEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[i].employer) ;
 		var replacedataEmployerTitle = HTMLworkTitle.replace("%data%" , work.jobs[i].title) ;
 		var finalEmployer = replacedataEmployer + replacedataEmployerTitle ;
 		$(".work-entry:last").append(finalEmployer) ;
 	}

 }
 



