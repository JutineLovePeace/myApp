function loadeIndexHeader(){
	$("#headerId").load("view/index_ft.html #index_ft-header",function(){
		$('.icon-saoyisao').on('touchend',function(){
//			open('view/QR.html')
		})
	})                                                                                                                                                                                            
}


function loadeIndexBody(){
	$("#sectionId").load("view/index_ft.html #index_ft-body",function(){
		
	//轮播图	
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 3000,//可选选项，自动滑动
		loop : true,
	});
	
	
	$.ajax({
		type : "GET",
		url : 'http://route.showapi.com/872-1?showapi_appid=39391&showapi_sign=60d45be514504deaa585469c863326e9&star=baiyang&needTomorrow=1&needWeek=1&needMonth=1&needYear=1&',
		beforeSend : function(){
			$('.welcomeBox').hide();
			$('#loading').show();
			
		},
		success : function(data){
			$('.welcomeBox').show();
			$('#loading').hide();
			
			var dayData = data.showapi_res_body.day;
//			console.log(dayData);
			
			$('.mid').append('<ul><li><i>幸运颜色</i><b>绿</b></li><li><i>健康指数</i><b>40%</b></li><li><i>贵人星座</i><b>'+dayData.grxz+'</b></li><li><i>幸运数字</i><b>'+dayData.lucky_num+'</b></li></ul>');
			
			$('.bot').append("<span class='iconfont icon-lingdang'></span><p>"+dayData.day_notice+"</p>");
		
//---------欢迎语-----------
			var d = new Date();
			var hour = d.getHours();
			if(hour>0&&hour<=6){
				$('.welcomeBox').find('.top .text').html('<h3>凌晨好，主人</h3><p>双子座新月</p>');
			}else if(hour>=6&&hour<=8){
				$('.welcomeBox').find('.top .text').html('<h3>早上好，主人</h3><p>双子座新月</p>');
			}else if(hour>8&&hour<=11){
				$('.welcomeBox').find('.top .text').html('<h3>上午好，主人</h3><p>双子座新月</p>');
			}else if(hour>11&&hour<=18){
				$('.welcomeBox').find('.top .text').html('<h3>下午好，主人</h3><p>双子座新月</p>');
			}else if(hour>18&&hour<=24){
				$('.welcomeBox').find('.top .text').html('<h3>晚上好，主人</h3><p>双子座新月</p>');
			}
			
		}
		
		
	})
	
	

	
	
	
	
	
	
	
		
	})
	
}
