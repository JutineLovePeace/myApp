$('#footerId').load('view/footer.html',function(){
	
	loadeIndexHeader();
	loadeIndexBody();
	
	//底部LI点击变色
	$('#footerUl').find('li').eq(0).addClass('active');
	
	$('#footerUl').find('li').on('touchend',function(){
		var index = $(this).index();
//		console.log(index);
		
		switch (index){
			case 0 :
				loadeIndexHeader();
				loadeIndexBody();
				break;
			case 1 :
				loadeConstellationHeader();
				loadeConstellationBody();
				break;
			case 2 :
				loadeConstellationMatchHeader();
				loadeConstellationMatchBody();
				break;
			case 3 :
				loadeTarrowHeader();
				loadeTarrowBody();
				break;
			case 4 :
				loadePersonalHeader();
				loadePersonalBody();
				break;
		}
	$(this).addClass('active').siblings().removeClass('active');	
		
		
	})
	
	
	
})