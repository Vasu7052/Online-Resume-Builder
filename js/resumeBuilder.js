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

 console.log(firstName) ;

 var replacedataName = HTMLheaderName.replace("%data%" , fullName) ;
 var replacedataRole = HTMLheaderRole.replace("%data%" , bio.role) ;
 var replacedataPic = HTMLbioPic.replace("%data%" , bio.photo_url) ;
 var replacedataWelcomeMsg = HTMLwelcomeMsg.replace("%data%" , bio,welcome) ;
 var replacedataskills = HTMLskills.replace("%data%" , bio.skills) ;

 var replacedataMobile = HTMLheaderName.replace("%data%" , fullName) ;
 var replacedataEmail = HTMLheaderRole.replace("%data%" , bio.role) ;
 var replacedataGithub = HTMLbioPic.replace("%data%" , bio.photo_url) ;
 var replacedataEmail = HTMLheaderRole.replace("%data%" , bio.role) ;
 var replacedataGithub = HTMLbioPic.replace("%data%" , bio.photo_url) ;

 $("#header").prepend(replacedataName) ;
 $("#header").append(replacedataRole) ;

 $("#workExperience").append(replacedataPic) ;

 



