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
 		"title" : "Java" ,
 		"years" : 1.5 ,
		"years" : "2015-2019" ,
		"description" : "Oracle is one of the largest vendors in the enterprise IT market and the shorthand name of its flagship product, a relational database management system (RDBMS) that's formally called Oracle Database. The database software sits at the center of many corporate IT environments, supporting a mix of transaction processing, business intelligence and analytics applications." ,
 		"city" : "Rohini, Delhi" 
	},
	{
		"employer" : "IBM" ,
 		"title" : "Software" ,
 		"years" : 1.2 ,
		"years" : "2015-2019" ,
		"description" : "IBM (International Business Machines) ranks among the world's largest information technology companies, providing a wide spectrum of hardware, software and services offerings." ,
 		"city" : "Rohini, Delhi" 
	},
	{
		"employer" : "Apple" ,
 		"title" : "IOS" ,
 		"years" : 1.8 ,
		"years" : "2015-2019" ,
		"description" : "Apple was founded by Steven Jobs and Stephen Wozniak. Jobs and Wozniak had been friends in high school and in 1975 were members of The Homebrew Computer Club, a now-legendary group where electronics enthusiasts met to discuss the Altair 8800" ,
 		"city" : "Rohini, Delhi" 
	} 
 ] ;

 var projects = {} ;
 projects.project = [
 	{ 
 		"title" : "Java DB" ,
 		"date" : "6/7/2017" ,
		"description" : "My Project is based on Oracle database" ,
 		"image" : "http://www.orasof.com/images/database.jpg" 
	}/* ,
	{
		"title" : "IBM Software" ,
 		"date" : "20/3/2017" ,
		"description" : "My Project is based on IBM Software" ,
 		"image" : "http://cdn.zmescience.com/wp-content/uploads/2011/11/IBM.jpg" 
	},
	{
		"title" : "Apple IOS" ,
 		"date" : "15/12/2016" ,
		"description" : "My Project is based on Apple IOS System" ,
 		"image" : "http://mobile.app-iptv.com/i.jpg" 
	} */ 
 ] ;

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
 		$("#skills").append(replacedataskills) ;
 	}

 	displayWork();
 	displayProjects() ;

 	$("#mapDiv").append(googleMap) ;

 	//	console.log(locationizer(work)) ;

 }

 function displayWork(){

 	if (work.jobs.length > 0) {

 
 	for (var i = 0; i < work.jobs.length; i++) {

 		$("#workExperience").append(HTMLworkStart) ;
 		var replacedataEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[i].employer) ;
 		var replacedataEmployerTitle = HTMLworkTitle.replace("%data%" , work.jobs[i].title) ;
 		var finalEmployer = replacedataEmployer + replacedataEmployerTitle ;
 		$(".work-entry:last").append(finalEmployer) ; // its a jQuery and . represents class and :last represents appending at last
 	
 		var replaceWorkDates = HTMLworkDates.replace("%data%" , work.jobs[i].years);
 		$(".work-entry:last").append(replaceWorkDates) ;

 		var replaceWorkDescription = HTMLworkDescription.replace("%data%" , work.jobs[i].description);
 		$(".work-entry:last").append(replaceWorkDescription) ; 

 		/* var replaceWorkCity = HTMLworkDescription.replace("%data%" , work.jobs[i].city);
 		$(".work-entry:last").append(replaceWorkCity) ; */

 	}

 	}
 }

 function displayProjects(){

 	for (var i = 0; i < projects.project.length; i++) {
 		$("#projects").append(HTMLprojectStart);
 		var replaceProjectTitle = HTMLprojectTitle.replace("%data%" , projects.project[i].title) ;
 		$(".project-entry:last").append(replaceProjectTitle);

		var replaceProjectDescription = HTMLprojectDescription.replace("%data%" , projects.project[i].description) ;
 		$(".project-entry:last").append(replaceProjectDescription);

 		var replaceProjectDate = HTMLprojectDates.replace("%data%" , projects.project[i].date) ;
 		$(".project-entry:last").append(replaceProjectDate);

 		var replaceProjectImage = HTMLprojectImage.replace("%data%" , projects.project[i].image) ;
 		$(".project-entry:last").append(replaceProjectImage);

 	}

 }

 $(document).click(function(loc){

 	var x = loc.pageX ;
 	var y = loc.pageY ;

 	console.log("X : " + x + " Y : " + y) ;

 });

 function locationizer(work_obj){

 	var array = [] ;

 	for (var i = 0; i < work.jobs.length; i++) {
 		array.push(work.jobs[i].city) ;
 	}

 	return array ;

 }
 



