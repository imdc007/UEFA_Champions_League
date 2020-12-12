var club_without_red;
var club_with_red;
var  groups;

function reset_all(){


	 club_without_red =[
						{"club":"Arsenal","country":"ENG","choose":"no"},
						{"club":"Astana","country":"KAZ","choose":"no"},
						{"club":"Atletico","country":"ESP","choose":"no"},
						{"club":"BATE","country":"BLR","choose":"no"},
						{"club":"CSKA Moskva","country":"RUS","choose":"no"},
						{"club":"Dinamo Zagreb","country":"CRO","choose":"no"},
						{"club":"Dynamo Kyiv","country":"UKR","choose":"no"},
						{"club":"Galatasaray","country":"TUR","choose":"no"},
						{"club":"Gent","country":"BEL","choose":"no"},
						{"club":"Leverkusen","country":"GER","choose":"no"},
						{"club":"Lyon","country":"FRA","choose":"no"},
						{"club":"M.Tel-Aviv","country":"ISR","choose":"no"},
						{"club":"Malmo","country":"SWE","choose":"no"},
						{"club":"Man. City","country":"ENG","choose":"no"},
						{"club":"Man. United","country":"ENG","choose":"no"},
						{"club":"Monchengladbach","country":"GER","choose":"no"},
						{"club":"Olympiacos","country":"GRE","choose":"no"},
						{"club":"Porto","country":"POR","choose":"no"},
						{"club":"Real Madrid","country":"ESP","choose":"no"},
						{"club":"Roma","country":"ITA","choose":"no"},
						{"club":"Sevilla","country":"ESP","choose":"no"},
						{"club":"ShakhtarDonetk","country":"UKR","choose":"no"},
						{"club":"Valencia","country":"ESP","choose":"no"},
						{"club":"Wolfsburg","country":"GER","choose":"no"}
					]

    club_with_red = [
						{"club":"Barcelona","country":"ESP","choose":"no"},
						{"club":"Bayern","country":"GER","choose":"no"},
						{"club":"Benfica","country":"POR","choose":"no"},
						{"club":"Chelsea","country":"ENG","choose":"no"},
						{"club":"Juventus","country":"ITA","choose":"no"},
						{"club":"Paris","country":"FRA","choose":"no"},
						{"club":"PSV","country":"NED","choose":"no"},
						{"club":"Zenit","country":"RUS","choose":"no"}
					]


 	    groups=[];
		for(var i=0;i<8;i++){
			groups[i]=[];
		}

		$("#fill_in_this").empty();
}

/*creating multidimensional array just defining it providing no memory so that push can work on it*/




function create_group(){

		reset_all();
		var i=0;
		var j=0;

		for(i=0;i<8;i++){
			var index=Math.floor(Math.random()*club_with_red.length);

			groups[i].push(club_with_red[index]);
			club_with_red.splice(index,1);
		}

		while(club_without_red.length!=0)
		{
			for(i=0;i<8;i++){
			var index=Math.floor(Math.random()*club_without_red.length);

			groups[i].push(club_without_red[index]);
			club_without_red.splice(index,1);
			}
		}

		for(i=0;i<8;i++)
		{
			for(j=0;j<4;j++){

			}

		}



		setTimeout(function(){
			render_things();
		},1000);
}


function  render_things(){

		/*first adding the divs empty*/

		var i=1,j=1,q=1;
		var counter_horizontally=0;
		var cointer_vertically=0;

		for( i=0;i<8;i++)
		{
				for(q=0;q<4;q++)
				{
					$("#fill_in_this_container").children().eq(i).children().eq(0).append('<div class="col-sm-12 initial_not_visible" style="color:white;opacity:0;font-size:20px;"></div>');
				}
		}


		for( i=0;i<8;i++)
		{
			for(q=0;q<4;q++)
				{
					$("#fill_in_this_container").children().eq(i).children().eq(0).children().eq(q+1).text(groups[i][q].club);
				}
		}

		$(".name_of_the_group").css("opacity","1");

		setTimeout(function(){
			make_everything_visible();
		},2500);

		console.log("hello");

}

var counter_for_showing=0;
var array_of_classes;

var counter_x=0;
var counter_y=0;
var postion_of_div;
var postion_of_transition;
var left_minus;
var right_minus;
//var original_position_top=$("#this_is_for_transition").position().top-$("#this_is_for_transition").outerHeight;
//var original_position_left=$("#this_is_for_transition").position().top-$("$#this_is_for_transition").outerWidth;

function make_everything_visible(){

			array_of_classes=$(".initial_not_visible").toArray();
			// set the content inside the box
			$("#this_is_for_transition").text(array_of_classes[counter_for_showing].innerHTML);
			// getting the position
			var bodyRect=document.body.getBoundingClientRect();
			position_of_transition=this_is_for_transition.getBoundingClientRect();
			position_of_div=array_of_classes[counter_for_showing].getBoundingClientRect();
			// postion_of_div=$(array_of_classes[counter_for_showing]).position();
			// postion_of_transition=$("#this_is_for_transition").position();
			var el = document.getElementById("this_is_for_transition")
			dynamics.animate(el, {
				translateX: (bodyRect.left-position_of_transition.left)-(bodyRect.left-position_of_div.left),
				translateY: (bodyRect.top-position_of_transition.top)-(bodyRect.top-position_of_div.top),
				opacity: 0,
				scale:6
			},{
				type: dynamics.easeInOut,
				frequency: 1,
				friction: 171,
				duration: 1000
			}
			)
			setTimeout(function(){
				$(array_of_classes[counter_for_showing]).css("opacity","1")
				$("#this_is_for_transition").css("opacity","1");
				$("#this_is_for_transition").css("top","20%");
				$("#this_is_for_transition").css("left","50%");
				$("#this_is_for_transition").css("transform","translate(-50%,0)");

				counter_for_showing++;
				if(counter_for_showing<32)
				{	make_everything_visible();
				}
			},500)
}

$(document).ready(function()
{
	create_group();
	$("#uefacom").css("opacity","1");
	$("#dates").css("opacity","1");
})
