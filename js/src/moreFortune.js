$(function(){
	$.ajax({
		type:"get",
		url:"http://route.showapi.com/872-1?showapi_appid=39391&showapi_sign=60d45be514504deaa585469c863326e9&star=baiyang&needTomorrow=1&needWeek=1&needMonth=1&needYear=1&",
		async:true,
		beforeSend:function(){
			$('#loadingTxt').show();
			$('#min-content').hide();
		},
		success:function(data){
			$('#min-content').show();
			$('#loadingTxt').hide();
			
			var day = data.showapi_res_body.day;
			var tomorrow = data.showapi_res_body.tomorrow;
			var week = data.showapi_res_body.week;
			var month = data.showapi_res_body.month;
			var year = data.showapi_res_body.year;
		
			$('#core').html('<ul><li><span>综合</span><i>'+day.summary_star+'分</i></li><li><span>爱情</span><i>'+day.love_star+'分</i></li><li><span>事业</span><i>'+day.work_star+'分</i></li><li><span>财运</span><i>'+day.money_star+'分</i></li></ul>'
);
			$('#info').html('<ul><li><span>幸运颜色</span><i>'+day.lucky_color+'</i></li><li><span>贵人星座</span><i>'+day.grxz+'</i></li><li><span>幸运数</span><i>'+day.lucky_num+'</i></li><li><span>吉时</span><i>'+day.lucky_time+'</i></li></ul>');
			
			$('.dayNotice').html('<h2>今日提醒</h2><p>'+day.day_notice+'</p>');
			$('.loveTxt').html('<h2>爱情运势</h2><p>'+day.love_txt+'</p>');
			$('.workTxt').html('<h2>工作运势</h2><p>'+day.work_txt+'</p>');
			$('.moneyTxt').html('<h2>财富运势</h2><p>'+day.money_txt+'</p>');
			$('.generalTxt').html('<h2>运势简评</h2><p>'+day.general_txt+'</p>')
		
			$('#hea-bot ul').find('li').eq(0).addClass('borderBotColor');
			
			$('#hea-bot ul').find('li').on('touchend',function(){
				var index = $(this).index();
		//		console.log(index);
				$(this).addClass('borderBotColor').siblings().removeClass('borderBotColor');
				
				if(index==0){
					$('#core').html('<ul><li><span>综合</span><i>'+day.summary_star+'分</i></li><li><span>爱情</span><i>'+day.love_star+'分</i></li><li><span>事业</span><i>'+day.work_star+'分</i></li><li><span>财运</span><i>'+day.money_star+'分</i></li></ul>'
);
					$('#info').show();
					$('#info').html('<ul><li><span>幸运颜色</span><i>'+day.lucky_color+'</i></li><li><span>贵人星座</span><i>'+day.grxz+'</i></li><li><span>幸运数</span><i>'+day.lucky_num+'</i></li><li><span>吉时</span><i>'+day.lucky_time+'</i></li></ul>');
					
					$('.dayNotice').html('<h2>今日提醒</h2><p>'+day.day_notice+'</p>');
					$('.loveTxt').html('<h2>爱情运势</h2><p>'+day.love_txt+'</p>');
					$('.workTxt').html('<h2>工作运势</h2><p>'+day.work_txt+'</p>');
					$('.moneyTxt').html('<h2>财富运势</h2><p>'+day.money_txt+'</p>');
					$('.generalTxt').html('<h2>运势简评</h2><p>'+day.general_txt+'</p>')
					
			}else if(index==1){
					$('#core').html('<ul><li><span>综合</span><i>'+tomorrow.summary_star+'分</i></li><li><span>爱情</span><i>'+tomorrow.love_star+'分</i></li><li><span>事业</span><i>'+tomorrow.work_star+'分</i></li><li><span>财运</span><i>'+tomorrow.money_star+'分</i></li></ul>'
		);
					$('#info').show();
					$('#info').html('<ul><li><span>幸运颜色</span><i>'+tomorrow.lucky_color+'</i></li><li><span>贵人星座</span><i>'+tomorrow.grxz+'</i></li><li><span>幸运数</span><i>'+tomorrow.lucky_num+'</i></li><li><span>吉时</span><i>'+tomorrow.lucky_time+'</i></li></ul>');
					$('.dayNotice').html('<h2>今日提醒</h2><p>'+tomorrow.day_notice+'</p>');
					$('.loveTxt').html('<h2>爱情运势</h2><p>'+tomorrow.love_txt+'</p>');
					$('.workTxt').html('<h2>工作运势</h2><p>'+tomorrow.work_txt+'</p>');
					$('.moneyTxt').html('<h2>财富运势</h2><p>'+tomorrow.money_txt+'</p>');
					$('.generalTxt').html('<h2>运势简评</h2><p>'+tomorrow.general_txt+'</p>')
		
				}else if(index==2){
					$('#core').html('<ul><li><span>综合</span><i>'+week.summary_star+'分</i></li><li><span>爱情</span><i>'+week.love_star+'分</i></li><li><span>事业</span><i>'+week.work_star+'分</i></li><li><span>财运</span><i>'+week.money_star+'分</i></li></ul>'
		);
					$('#info').show();
					$('#info').html('<ul><li><span>幸运颜色</span><i>'+week.lucky_color+'</i></li><li><span>贵人星座</span><i>'+week.grxz+'</i></li><li><span>幸运数</span><i>'+week.lucky_num+'</i></li><li><span>吉日</span><i>'+week.lucky_day+'</i></li></ul>');
					$('.dayNotice').html('<h2>本周提醒</h2><p>'+week.week_notice+'</p>');
					$('.loveTxt').html('<h2>爱情运势</h2><p>'+week.love_txt+'</p>');
					$('.workTxt').html('<h2>工作运势</h2><p>'+week.work_txt+'</p>');
					$('.moneyTxt').html('<h2>财富运势</h2><p>'+week.money_txt+'</p>');
					$('.generalTxt').html('<h2>运势简评</h2><p>'+week.general_txt+'</p>')
				}else if(index==3){
					$('#core').html('<ul><li><span>综合</span><i>'+month.summary_star+'分</i></li><li><span>爱情</span><i>'+month.love_star+'分</i></li><li><span>事业</span><i>'+month.work_star+'分</i></li><li><span>财运</span><i>'+month.money_star+'分</i></li></ul>'
		);
					$('#info').show();
					$('#info').html('<ul><li><span>缘分星座</span><i>'+month.yfxz+'</i></li><li><span>贵人星座</span><i>'+month.grxz+'</i></li><li><span>小人星座</span><i>'+month.xrxz+'</i></li><li><span>吉利方位</span><i>'+month.lucky_direction+'</i></li></ul>');
					$('.dayNotice').html('<h2>本月优势</h2><p>'+month.month_advantage+'</p>');
					$('.loveTxt').html('<h2>爱情运势</h2><p>'+month.love_txt+'</p>');
					$('.workTxt').html('<h2>工作运势</h2><p>'+month.work_txt+'</p>');
					$('.moneyTxt').html('<h2>财富运势</h2><p>'+month.money_txt+'</p>');
					$('.generalTxt').html('<h2>运势简评</h2><p>'+month.general_txt+'</p>')
				}else if(index==4){
					$('#core').html('<ul><li><span>综合</span><i>'+year.general_index+'</i></li><li><span>爱情</span><i>'+year.love_index+'</i></li><li><span>事业</span><i>'+year.work_index+'</i></li><li><span>财运</span><i>'+year.money_index+'</i></li></ul>'
		);
					$('#info').hide();
					$('.dayNotice').html('<h2>一句话简评</h2><p>'+year.oneword+'</p>');
					$('.loveTxt').html('<h2>爱情运势</h2><p>'+year.love_txt+'</p>');
					$('.workTxt').html('<h2>工作运势</h2><p>'+year.work_txt+'</p>');
					$('.moneyTxt').html('<h2>财富运势</h2><p>'+year.money_txt+'</p>');
					$('.generalTxt').html('<h2>运势简评</h2><p>'+year.general_txt+'</p>')
				}
				
			})
		
		
		
		
		
		
		
		
		}
	});
















})



