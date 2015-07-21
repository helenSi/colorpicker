/* Exercise 2: Color picker */

var colors = ["brown" ,"purple", "orange", "#091287", "green", "red" ,"blue", "yellow"];
	random_position = Math.floor(Math.random() * colors.length);


// functions' name
function setPreviewColor(color){
	$(".preview").css("background", color);
};

function addBox(color){
	$("#colors").prepend("<div class ='item' style='background:" +color +"'></div>" );
	$("#color").val("");
};

function removeBox(color){
	$(".item:last-child").remove();
	colors.shift(colors[0])
	colors.push(color);
};
// preset colors

$(document).ready(function(){

	//Random set color on the LEFT when the page is load in the first time
	$(".preview").ready(function(){
		$(".preview").css("background-color",colors[random_position]);
		$(".color-code").text($(".preview").css("background-color"));
	});

	//set colors on the RIGHT when the page is load on the first time
	$.each(colors, function(index,color){
		addBox(color);
	});
});

/*function forEach (array, fn) {
	for (var i=0; i < array.length; i++) {
		fn(i, array[i]);
	}
}*/

// change color(left)
$(document).on('keyup keypress change', '#color', function(){
	var color = $("input#color").val();

	setPreviewColor(color);
	$(".color-code").text($(".preview").css("background-color"));
});


// add colors favourit(right)
$(document).on('click', '#add-to-favorite', function(){
	var color = $("input#color").val();

	if(colors.length < 16){
		addBox(color);
		colors.push(color);
	}else{
		removeBox(color);
		addBox(color);
	}
	$("#color").focus();

});


// Mouse hover view the color
var previewColor;
$(document).on('mouseenter', '.item', function(){
	previewColor = $(".preview").css("background-color");

	$(".preview").css("background-color", $(this).css("background-color"));
	$(".color-code").text($(this).css("background-color"));
}).on('mouseleave', '.item', function(){
	setPreviewColor(previewColor);
});

// Click view the color
/*$(document).on('click', '.item', function(){
	$(".preview").css("background-color", $(this).css("background-color"));
	$(".color-code").text($(this).css("background-color"));
});*/
