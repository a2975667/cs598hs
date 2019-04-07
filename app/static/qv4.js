function qv_cal(number){	

	if (number == 0){
		return 1;
	}else if (number < 3){
		return number+1;
	}else{
		return Math.pow(number-2, 2)+3;
	}
}

function qv_total_voice(){
	var total_votes = $(".qv_cost").length
	return total_votes*3
}

var submit_url = '/submit_qv4'