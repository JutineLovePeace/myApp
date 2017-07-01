function loadeTarrowHeader(){
	$("#headerId").load("view/tarrow.html #tarrow-header",function(){
		
	})
	
}

function loadeTarrowBody(){
	$("#sectionId").load("view/tarrow.html #tarrow-body",function(){
		$.ajax({
			type:"get",
			url:"http://route.showapi.com/970-2?showapi_appid=39391&showapi_sign=60d45be514504deaa585469c863326e9&id=/art/renge/80959.html&",
			async:true,
			beforeSend : function(){
				$('.tarrowBox').hide();
				$('#loading').show();
			},
			success:function(data){
				$('#loading').hide();
				$('.tarrowBox').show();
//				console.log(data);
				var title = data.showapi_res_body.item.title;
				var content = data.showapi_res_body.item.content.substring(0,3592);

				$('.tarrowBox').append('<h3>'+title+'</h3><br/>'+content)
			}
		});
		
	})
	
}
