$(function(){
  var Height = $(".bg_body").outerHeight();
	$(".creat-con").height(Height)
	/*模板中心点定位*/
  	var arr = [];
 	var ico = $("#modul_Img img");
	
	for(var i =0;i<ico.length;i++){
		arr.push(ico[i].src);
	}
	var Top =  window.screen.availHeight;
	var Left = window.screen.width;	
 	$("#modul_Img li").on("click",function(){
 		var index = $(this).index();
 		$("body").css({
 			height:Top,
 			overflow:"hidden"
 		})
		$("#modelimg").attr("src", arr[index]);
		$("#fix_modul").css({
			width:Left,
			height:Top,
			animation:'big 1s 1 linear',
			transform:'scale(1)'
		});
		setTimeout(function(){
			$(".fix").removeClass("hid")
		},500); 	
	})
 	$("#close_Mb").on("click",function(){
 		$(".fix").addClass("hid")
 		$("body").css({
 			height:"auto",
 			overflow:"auto"
 		})
 		$("#fix_modul").css({
			animation:'small 1s 1 linear',
			transform:'scale(0)'
		});	
 	})
     	// 第一次动画
 	setTimeout(function(){
	  		$(".erwei-tip, .bg-btn-tip, .movebg-tip").addClass("hide");
	  		$(".edit_box").removeClass("edit-box-ani")
	  },3000)
	  // 上下拖拽
	  var drap = {
       init: function(){
          this.drap();
       },
       drap: function(e){
            var startTop = $("#mode_img").css("transform");
          startTop = parseFloat(startTop.substring(7).split(',')[5]);
          if(startTop){
            startTop = (1330+startTop)/20;
          }else {
            startTop = 66;
          };
          var wrap = document.getElementById("J_dragimgwrap");
          var btn = document.getElementById("J_dragimgbtn");
            btn.style.top = startTop + "px";
            btn.addEventListener("touchstart", function(event) {
			  	var evt = event || window.event;
			  	var mouseY =  evt.touches[0].pageY;
			  	btn.className = "dragimg-wrap-btn";
                wrap.className = "dragimg-wrap-con show";
                disY = mouseY - btn.offsetTop;
               
			 },false)
       		 btn.addEventListener("touchmove", function(event) {
			  	var evt = event || window.event;
			  	if(evt.preventDefault){
                    evt.preventDefault();
                  } else{
                    evt.returnVale = false;
                  };
                  var endY = evt.touches[0].pageY;
                  var posY = endY - disY;
                  if(posY >= wrap.clientHeight - btn.offsetHeight){
                    posY = wrap.clientHeight - btn.offsetHeight;
                  };
                  if (posY <= 0) {
                    posY = 1;
                  };
                   console.log(endY)
                  btn.style.top = posY + "px";
                  if(posY < 66){
                    $("#mode_img").css({
                        "transform":"translate(0,-"+ (1330-posY*20) +"px)",
                        "-webkit-transform":"translate(0,-"+ (1330-posY*20) +"px)",
                        "-moz-transform":"translate(0,-"+ (1330-posY*20) +"px)",
                        "-o-transform":"translate(0,-"+ (1330-posY*20) +"px)"
                    });
                  }else if(posY == 66) {
                    $("#mode_img").css({
                        "transform":"translate(0,"+0+"px)",
                        "-webkit-transform":"translate(0,"+ 0 +"px)",
                        "-moz-transform":"translate(0,"+ 0 +"px)",
                        "-o-transform":"translate(0,"+ 0 +"px)"
                    });
                  }else if(posY > 66){
                    $("#mode_img").css({
                        "transform":"translate(0,"+(posY*20-1330)+"px)",
                        "-webkit-transform":"translate(0,"+ (posY*20-1330) +"px)",
                        "-moz-transform":"translate(0,"+ (posY*20-1330) +"px)",
                        "-o-transform":"translate(0,"+ (posY*20-1330) +"px)"
                    });
                  };
			 },false)
           btn.addEventListener("touchend", function(event) {
			  	 btn.className = "dragimg-start-btn";
                wrap.className = "dragimg-wrap-con";
               
			 },false)

       }
    };  
    drap.init()
     // 按钮遮罩层显示
        function BtnShow(){
          $(".creat-wrap").addClass("hiddren");
          $(".creat-con").addClass("blur");
          $(".bg-btn,.dragimg-start-btn").addClass("hide");
        }
         // 按钮遮罩层隐藏
         function BthHiddren(){
          $(".creat-wrap").removeClass("hiddren");
          $(".creat-con").removeClass("blur");
          $(".bg-btn,.dragimg-start-btn").removeClass("hide");
         }
         // 更换背景
        $(".J_bgbtn").on("touchstart",function(){
          $(".J_changeMode").removeClass("hide");
          BtnShow();
        })
        // 取消更换背景
        $(".J_changeModeGoon").on("touchstart",function(){
          $(this).parents(".J_changeMode").addClass("hide")
          BthHiddren();
        })
        // 更换二维码
        $(".erweima_ico").on("touchstart",function(){
          $(".J_codelist").removeClass("hide");
          BtnShow();
        })
        // 输入网址
        $(".J_codetextbtn").on("touchstart",function(){
          $(this).parents(".J_codelist").addClass("hide");
          $(".J_codewrap").removeClass("hide");
          BtnShow();
        })
      // 关闭二维码
      $(".J_cancelcodelist").on("touchstart",function(){
        $(this).parents(".J_codelist").addClass("hide");
        BthHiddren();
      })
        // 取消
        $(".J_closecode").on("touchstart",function(){
          $(this).parents(".J_codewrap").addClass("hide");
          BthHiddren();
        })
        // 完成
        $(".J_sendCode").on("touchstart",function(){
          $(this).parents(".J_codewrap").addClass("hide");
          BthHiddren();
        })
        // 使用文档
        $(".J_codedocbtn").on("touchstart",function(){
          $(this).parents(".J_codelist").addClass("hide");
          $(".creat-con").addClass("hide").removeClass("blur");
          $(".creat-wrap").removeClass("hiddren");
          $(".bg-btn,.dragimg-start-btn").addClass("hide");
          $(".J_foot1").addClass("hid");
          $(".local-doc-wrap").removeClass("hide")
          $(".J_foot2").removeClass("hid")
       
        })
        // 文档取消
        $(".J_localdoccancel").on("touchstart",function(){
          $(".J_foot2").addClass("hid");
          $(".local-doc-wrap").addClass("hide");
          $(".creat-con").removeClass("hide");
          $(".J_foot1").removeClass("hid");
          $(".bg-btn,.dragimg-start-btn").removeClass("hide");
        })
        // 完成
        $("#success_Mb").on("touchstart",function(){          
          $(".bg-btn,.dragimg-start-btn").addClass("hide");
          $(".mode-wrap").addClass("hide");
          $(".J_foot1").addClass("hid");
          $(".save-mode").removeClass("hide");
          $(".J_foot3").removeClass("hid");

        })
        //继续
        $(".J_completeGoon").on("touchstart",function(){
          $(".creat-con").addClass("blur");
          $(".creat-wrap").removeClass("hiddren");
          $(".J_newpic").removeClass("hide");
        })
        // 编辑/取消
        $(".J_cancelnew").on("touchstart",function(){
          $(".creat-con").removeClass("blur");
          $(".creat-wrap").removeClass("hiddren");
          $(".J_newpic").addClass("hide");
        })
        // 再次编辑
        $(".J_newagain").on("touchstart",function(){
          BthHiddren();
          $(".J_newpic").addClass("hide");
          $(".save-mode").addClass("hide");
          $(".J_foot3").addClass("hid");
          $(".mode-wrap").removeClass("hide");
          $(".J_foot1").removeClass("hid");
        })
        // 长按保存
        $(".J_completeSave").on("touchstart",function(){
          $(".creat-con").addClass("blur");
          $(".creat-wrap").addClass("hiddren");
          $(".J_chanang").removeClass("hide");

        })
        // 知道啦
        $(".ok-btn").on("touchstart",function(){
          $(".creat-con").removeClass("blur");
          $(".creat-wrap").removeClass("hiddren");
          $(".J_chanang").addClass("hide");
        })
        // 按钮关闭
        $(".close-btn").on("touchstart",function(){
          $(".creat-con").removeClass("blur");
          $(".creat-wrap").removeClass("hiddren");
          $(".J_chanang").addClass("hide");
        })
        // 舍弃编辑
        $("#close_Mb").on("touchstart",function(){
          $(".J_cancelMode").removeClass("hide");
          BtnShow()
        })
        // 继续编辑
        $(".J_cancelModeGoon").on("touchstart",function(){
          $(".J_cancelMode").addClass("hide");
          BthHiddren();
        })
        // 图库选择背景
        $(".J_openPic").on("touchstart",function(){
          $(".creat-con").addClass("hide");
          $(".J_foot1").addClass("hid");
          $(".list-wrap").removeClass("hide");
          $(".J_foot4").removeClass("hid");
          $(".J_changeMode").addClass("hide")
        })
        // 关闭图库
        $(".J_openCancel").on("touchstart",function(){
          $(".J_foot4").addClass("hid");
          $(".bg-btn,.dragimg-start-btn").removeClass("hide");
          $(".creat-con").removeClass("hide blur hiddren");
          $(".J_foot1").removeClass("hid");
          $(".list-wrap").addClass("hide");

        })
        // 确认图库
        $(".J_openCancel").on("touchstart",function(){
          $(".J_foot4").addClass("hid");
          $(".bg-btn,.dragimg-start-btn").removeClass("hide");
          $(".creat-con").removeClass("hide blur hiddren");
          $(".J_foot1").removeClass("hid");
          $(".list-wrap").addClass("hide");
        })
})