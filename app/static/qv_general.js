$( "#qv_form" ).submit(function( event ) {
	var formData = JSON.stringify($("#qv_form").serializeArray());
	alert( "Handler for .submit() called." );
	alert(formData);
	$.ajax({
        type: "post",
        url: "/test",
        data: formData,
        success: function (result) {
            alert(formData);
        },
        dataType: "json",
        contentType: 'application/json'
      });
  event.preventDefault();
});

$( "#other" ).click(function() {
  $( "#qv_form" ).submit();
});

$(document).ready(function(){
	$('select').formSelect();
});

$(document).ready(function() {
    $('.plus').click(function() {
		var prev_vote = parseInt($(this).siblings('.qv_vote').val())
		
		// update vote
		var new_vote = prev_vote+1
		$(this).siblings('.qv_vote').val(new_vote)

		//update cost
		var new_cost = qv_cal(Math.abs(new_vote))
		$(this).siblings('.qv_cost').attr("value", new_cost)
		$(this).siblings('.qv_cost').text(new_cost.toString())
		console.log(get_total_cost())
    });
});

$(document).ready(function() {
    $('.minus').click(function() {
		var prev_vote = parseInt($(this).siblings('.qv_vote').val())
		
		// update vote
		var new_vote = prev_vote-1
		$(this).siblings('.qv_vote').val(new_vote)

		//update cost
		var new_cost = qv_cal(Math.abs(new_vote))
		$(this).siblings('.qv_cost').attr("value", new_cost)
		$(this).siblings('.qv_cost').text(new_cost.toString())

		console.log(get_total_cost())
    });
});

function add(accumulator, a) {
    return accumulator + a;
}

function get_total_cost(){
	var list_of_cost = $(".qv_cost").map(function(){return parseInt($(this).attr("value"));}).get();
	return list_of_cost.reduce(add);
}

