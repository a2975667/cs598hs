function qv_cal(number){	
	if (number<4){
		return 1;
	}else{
		return Math.pow(number-2, 2);
	}
}

function qv_total_voice(){
	var total_votes = $(".qv_cost").length
	return total_votes
}