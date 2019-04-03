// $(document).ready(function() {

//     var enrollType;
//   //  $("#div_id_As").hide();
//     $("input[name='As']").change(function() {
//         memberType = $("input[name='select']:checked").val();
//         providerType = $("input[name='As']:checked").val();
// 		toggleIndividInfo();
//     });
    
//     $("input[name='select']").change(function() {
// 		memberType = $("input[name='select']:checked").val();
// 		toggleIndividInfo();
// 		toggleLearnerTrainer();
// 	});
	
// 	function toggleLearnerTrainer() {

// 	if (memberType == 'P' || enrollType=='company') {
// 		$("#cityField").hide();
// 		$("#providerType").show();
// 		$(".provider").show();
// 		$(".locationField").show();
// 		if(enrollType=='INSTITUTE'){
// 			$(".individ").hide();
// 		}
	
// 	} 
//     else {
// 		$("#providerType").hide();
// 		$(".provider").hide();
// 		$('#name').show();
// 		$("#cityField").hide();
// 		$(".locationField").show();
// 		$("#instituteName").hide();
// 		$("#cityField").show();
		
// 	}
//     }
//     function toggleIndividInfo(){

// 	if(((typeof memberType!=='undefined' && memberType == 'TRAINER')||enrollType=='INSTITUTE') && providerType=='INDIVIDUAL'){
// 		$("#instituteName").hide();
// 		$(".individ").show();
// 		$('#name').show();
// 	}
//     else if((typeof memberType!=='undefined' && memberType == 'TRAINER')|| enrollType=='INSTITUTE'){
// 		$('#name').hide();
// 		$("#instituteName").show();
// 		$(".individ").hide();
// 	}
//     }
   
//  });





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

function qv_cal(number){	
	if (number<4){
		return 1;
	}else{
		return Math.pow(number-2, 2);
	}
}

function qv_total_voice_v1(num_ques){
	return num_ques
}

function qv_total_voice_v2(num_ques){
	return num_ques
}

function qv_total_voice_v2(num_ques){
	return num_ques
}

function add(accumulator, a) {
    return accumulator + a;
}

function get_total_cost(){
	var list_of_cost = $(".qv_cost").map(function(){return parseInt($(this).attr("value"));}).get();
	return list_of_cost.reduce(add);
}