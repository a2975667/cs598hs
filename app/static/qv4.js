function qv_cal(number){	
	if (number<3){
		return number;
	}else{
		return Math.pow(number-2, 2)+2;
	}
}

function qv_total_voice(){
	var total_votes = $(".qv_cost").length
	return total_votes*2
}

var submit_url = '/submit_qv4'