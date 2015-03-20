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
    skill3: 'Speak English',
    exp1: 'Training in Cognits',
    exp2: 'Programmer in Python',
    exp3: 'Programmer in CSS',
    exp4: 'Programmer in HTML',
    exp5: 'Programmer in JavaScript',
    propy: 'Search Engine, Guess Number, Factorial, Register Mashine, Countrys and Capitals, BattleShip.',
    profron: 'Portfolio, Blog, Weather, Music-Bootstrap.'


}

$(document).ready(function() {
	
    //To Carge the Page
    $('#Mobil').append(data.mobile);
    $('#Mail').append(data.mail);
    $('#Git').append(data.git);
    $('#Tw').append(data.twitter);
    $('#Loc').append(data.loc);
    $('#skill1').append(data.skill1);
    $('#skill2').append(data.skill2);
    $('#skill3').append(data.skill3);
    $('#exp1').append(data.exp1);
    $('#exp2').append(data.exp2);
    $('#exp3').append(data.exp3);
    $('#exp4').append(data.exp4);
    $('#exp5').append(data.exp5);
    $('#ProPython').append(data.propy);
    $('#ProFrontend').append(data.profron);

    
});