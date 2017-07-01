function loadeConstellationHeader(){
	$("#headerId").load("view/constellation.html #constellation-header",function(){
		
	})
	
}

function loadeConstellationBody(){
	$("#sectionId").load("view/constellation.html #constellation-body",function(){
	
	//-------lion---------
	$('.lion').on('touchend',function(){
		$('#constellation-body').load("view/allStar.html #lionContent",function(){
			
		})
	});
	
	//-------shuangzi-------
	$('.shuangZi').on('touchend',function(){
		$('#constellation-body').load("view/allStar.html #shuangZiContent",function(){
			
		})
	});
	
	//--------juxie---------
	$('.juXie').on('touchend',function(){
		$('#constellation-body').load("view/allStar.html #juXieContent",function(){
			
		})
	});
	
	//--------tianping---------
	$('.tianPing').on('touchend',function(){
		$('#constellation-body').load("view/allStar.html #tianPingContent",function(){
			
		})
	});
	
	//--------baiyang---------
	$('.baiYang').on('touchend',function(){
		$('#constellation-body').load("view/allStar.html #baiYangContent",function(){
			
		})
	});
	
	//--------chunv---------
	$('.chuNv').on('touchend',function(){
		$('#constellation-body').load("view/allStar.html #chuNvContent",function(){
			
		})
	});
	
	
	
	
	
	
	})
	
}
