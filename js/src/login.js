$(function(){
	$('form').find('i,em').hide();
	//点击按钮样式变化
	$('#loginBtn').on('touchstart',function(){
		$('#loginBtn').css({color:"#fff",border:"1px solid rgba(255,255,255,.6)",background:'rgba(000,000,000,.3)'});
		$('#regesBtn').css({color:"#ccc",border:"1px solid rgba(255,255,255,.3)",background:'rgba(255,255,255,0)'})
	});
	
	$('#regesBtn').on('touchstart',function(){
		$('#regesBtn').css({color:"#fff",border:"1px solid rgba(255,255,255,.6)",background:'rgba(000,000,000,.3)'});
		$('#loginBtn').css({color:"#ccc",border:"1px solid rgba(255,255,255,.3)",background:'rgba(255,255,255,0)'})
	});


	//点击登录
	$('#loginBtn').on('touchend',function(){
		//初始化样式
		
		$('#txtId').attr("placeholder","用户名");
		$('#passwordId').attr("placeholder","密码");
		
		//用户名密码不能为空验证
		var users = $('#txtId').val();
		var passwords = $('#passwordId').val();
		var userReg = /\d{6-20}/;
		
		if(users==""&&passwords==""){
			$('form').find('i,em').show();
		}else if(users==""&&passwords!=""){
			$('.user').find('i,em').show();
			$('.password').find('i,em').hide();
			$('#txtId').blur(function(){
				$('.user').find('i,em').hide();
			})
		}else if(users!=""&&passwords==""){
			$('.user').find('i,em').hide();
			$('.password').find('i,em').show();
			$('#passwordId').blur(function(){
				$('.password').find('i,em').hide();
			})
		}else{
			$('form').find('i,em').hide();
			
			//用户名密码存在性验证
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				async:true,
				dataTpye:'JSON',
				data:{
					status:'login',
					userID:users,
					password:passwords
				},
				success:function(data){
					if(data==0){
						$('.user').find('i,em').show();
						$('.user').find('em').html("用户名不存在,请注册后登录");
					}else if(data==2){
						$('.password').find('i,em').show();
						$('.password').find('em').html("用户名密码不符");
					}else{
						alert('登陆成功');
					}
				}
			});	
		}
	})
	
	//点击注册
	$('#regesBtn').on('touchend',function(){
		
		//初始化样式
		$('form').find('i,em').hide();
		$('#txtId').attr("placeholder","请输入6~18位字符用户名");
		$('#passwordId').attr("placeholder","请输入6~16位字符用户名");
		
		var users = $('#txtId').val();
		var passwords = $('#passwordId').val();
		
		//用户名密码注册和存储
			$.ajax({
				type:"post",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				async:true,
				dataTpye:'JSON',
				data:{
					status:'register',
					userID:users,
					password:passwords
				},
				success:function(data){
					
					if(users==""&&passwords==""){
						$('form').find('i,em').hide();
					}else if(users==""&&passwords!=""){
						$('.user').find('i,em').show();
						$('.password').find('i,em').hide();
						$('#txtId').blur(function(){
							$('.user').find('i,em').hide();
						})
					}else if(users!=""&&passwords==""){
						$('.user').find('i,em').hide();
						$('.password').find('i,em').show();
						$('#passwordId').blur(function(){
							$('.password').find('i,em').hide();
						})
					}else if(data==0){
						$('.user').find('i,em').show();
						$('.user').find('em').html("用户名重名");
					}else if(data==1){
						alert('注册成功');

					}else if(data==2){
						alert('数据库报错');
					}
				}
			});	
	});
	
	
})



