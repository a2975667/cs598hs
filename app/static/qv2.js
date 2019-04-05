function qv_cal(number){	
	return Math.pow(number, 2);
}

function qv_total_voice(){
	var total_votes = $(".qv_cost").length
	return total_votes*total_votes
}

var submit_url = '/submit_qv2'