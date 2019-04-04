$("#qv_form").submit(function (event) {
	var seq = JSON.parse(Cookies.get('next'))
	var next_url = seq.shift();
	Cookies.set('next', JSON.stringify(seq));

	var formData = JSON.stringify($("#qv_form").serializeArray());
	alert("Handler for .submit() called.");
	alert(formData);
	$.ajax({
		type: "post",
		url: "/test",
		data: formData,
		success: function (result) {
			alert('Done.');
			window.location.href = next_url;
		},
		dataType: "json",
		contentType: 'application/json'
	});
	window.location.href = next_url;
	event.preventDefault();
});

$("#other").click(function () {
	$("#qv_form").submit();
});

$(document).ready(function () {
	$('#used_votes').text(0);
	$('#total_votes').text(qv_total_voice().toString());
	$('#bar').attr('style', 'width: 0%')

	$('select').formSelect();

	$('.plus').click(function () {
		var prev_vote = parseInt($(this).siblings('.qv_vote').val())

		// update vote
		var new_vote = prev_vote + 1
		$(this).siblings('.qv_vote').val(new_vote)

		//update cost
		var new_cost = qv_cal(Math.abs(new_vote))
		$(this).siblings('.qv_cost').attr("value", new_cost)
		$(this).siblings('.qv_cost').text(new_cost.toString())
		get_total_cost()
		check_clickable()
	});

	$('.minus').click(function () {
		var prev_vote = parseInt($(this).siblings('.qv_vote').val())

		// update vote
		var new_vote = prev_vote - 1
		$(this).siblings('.qv_vote').val(new_vote)

		//update cost
		var new_cost = qv_cal(Math.abs(new_vote))
		$(this).siblings('.qv_cost').attr("value", new_cost)
		$(this).siblings('.qv_cost').text(new_cost.toString())
		get_total_cost()
		check_clickable()
	});
});

function add(accumulator, a) {
	return accumulator + a;
}

function get_total_cost() {
	var list_of_cost = $(".qv_cost").map(function () {
		return parseInt($(this).attr("value"));
	}).get();
	var total = list_of_cost.reduce(add)
	$('#used_votes').text(total.toString());
	$('#bar').attr('style', ('width: ' + (total * 100 / qv_total_voice()).toString() + '%'))
	return total;
}

function check_clickable() {
	var total = qv_total_voice()
	var current_total = parseInt($('#used_votes').text())
	$(".qvbtn").each(function (index) {
		var actual_value = parseInt($(this).siblings('.qv_vote').val())
		var current_vote = Math.abs(actual_value)

		// console.log($(this).siblings('.qv_vote').attr('name'), current_vote)
		// console.log(total, current_total, qv_cal(current_vote+1), total < (current_total + qv_cal(current_vote+1)))
		if (total < (current_total - qv_cal(current_vote) + qv_cal(current_vote + 1))) {
			$(this).each(function () {
				if (actual_value > 0) {
					if ($(this).hasClass('plus')) {
						$(this).addClass('disabled');
					}
				} else if (actual_value < 0) {
					if ($(this).hasClass('minus')) {
						$(this).addClass('disabled');
					}
				} else {
					$(this).addClass('disabled');
				}
			})
		} else {
			$(this).removeClass('disabled');
		}
		//console.log( current_vote );
	});
}