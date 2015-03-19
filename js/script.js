//Array of Data
var data = {

	name:  'Kevin Herrera', 
    mobile: "55012945", 
    mail: 'kherrera16@gmail.com',
    git: 'KAR2014',
    twitter: '@Kevin_Herrera16',
    loc: 'Guatemala',
    skill1: 'Programmer',
    skill2: 'Web Designer',
    skill3: 'Speak English'

}

//variables

var mobile = data.mobile;

$(document).ready(function() {
	
    $('#Mobil').append(data.mobile);
    $('#Mail').append(data.mail);
    $('#Git').append(data.git);
    $('#Tw').append(data.twitter);
    $('#Loc').append(data.loc);
    $('#skill1').append(data.skill1);
    $('#skill2').append(data.skill2);
    $('#skill3').append(data.skill3);




});