window.onload=function(){
//Fix
var Fix1=getClass('Fix1')[0]
  Fix1.onmouseover=function(){
    Fix1.style.background='url(img/png/fix1.png) #ffaa01'
  } 
  Fix1.onmouseout=function(){
    Fix1.style.background='url(img/png/fix1-2.png) #383838'
  }
 var Fix2=getClass('Fix2')[0]
 var Fix2w=getClass('Fix2w')[0]
 var Fix2l=getClass('Fix2l')[0]
  Fix2.onmouseover=function(){
  	Fix2.style.background='url(img/png/fix2-3.png) #ffaa01'
  	Fix2w.style.color='#383838'
  	Fix2l.style.borderTop='1px solid #ffaa01'
    Fix2l.style.borderBottom='1px solid #ffaa01'
  }
  Fix2.onmouseout=function(){
    Fix2.style.background='url(img/png/fix2-4.png) #383838'
    Fix2w.style.color='#fff'
    Fix2l.style.borderTop='1px solid #4d4d4d'
    Fix2l.style.borderBottom='1px solid #4d4d4d'
  }
  var Fix3d=getClass('Fix3d')
  var Fix3dz=getClass('Fix3dz')
  var Fix3dt=getClass('Fix3dt')
  var Fix3dt2=getClass('Fix3dt2')
  for (var i = 0; i < Fix3d.length; i++) {
    Fix3d[i].index=i;
    Fix3d[i].onmouseover=function(){
      for (var j = 0; j < Fix3d.length; j++) {
          Fix3dt[j].style.display='block'
          Fix3dt2[j].style.display='none'
      };
       Fix3dt[this.index].style.display='none'
       Fix3dt2[this.index].style.display='block' 
       animate(Fix3dz[this.index],{left:-45},500)
    }
    Fix3d[i].onmouseout=function(){
       Fix3dt[this.index].style.display='block'
       Fix3dt2[this.index].style.display='none'
       animate(Fix3dz[this.index],{left:0},500)
    }
  };
  var Fix4d=getClass('Fix4d')
  var Fix4dz=getClass('Fix4dz')
  var Fix4dz2=getClass('Fix4dz2')[0]
  var Fix4dt=getClass('Fix4dt')
  var Fix4dt2=getClass('Fix4dt2')
  for (var i = 0; i < Fix4d.length; i++) {
    Fix4d[i].index=i
    Fix4d[i].onmouseover=function(){
      var that=this
      for (var j = 0; j < Fix4d.length; j++) {
        Fix4dt[j].style.display='block'
        Fix4dt2[j].style.display='none'
      }
      Fix4dt[this.index].style.display='none'
      Fix4dt2[this.index].style.display='block'
      if([that.index]==2){
      animate(Fix4dz[2],{left:-130},500)
      }else{
      animate(Fix4dz[that.index],{left:-70},500)
      }
     }
    Fix4d[i].onmouseout=function(){
      Fix4dt[this.index].style.display='block'
      Fix4dt2[this.index].style.display='none'
      animate(Fix4dz[this.index],{left:0},500)
      // animate(Fix4dz2,{left:0},500)
     }
  }
//Topt
var bgTopt=getClass('bgTopt')[0]
var Topt=getClass('Topt')[0]
var ToptD=getClass('ToptD')[0]
var TopD=getClass('TopD')[0]
  ToptD.onclick=function(){
     ToptD.style.display='none'
     animate(bgTopt,{height:0},500)
     animate(Topt,{height:0},500,function(){
       TopD.style.display='block' 
     })
   }
  TopD.onclick=function(){
     
     TopD.style.display='none'
     animate(bgTopt,{height:100},500)
     animate(Topt,{height:100},500,function(){
       ToptD.style.display='block' 
     }) 
  }
//wzdh
var TopLeft1=getClass('TopLeft1')[0]
var TopLeft1span=getClass('TopLeft1span')[0]
var bgflywzdh=getClass('bgflywzdh')[0]
var flywzdhX=getClass('flywzdhX')[0]
   TopLeft1.onmouseover=function(){
     TopLeft1.style.background='#fff'
     TopLeft1.style.border="1px solid #ddd"
     bgflywzdh.style.display='block'
   }
   TopLeft1.onmouseout=function(){
     TopLeft1.style.background='none'
     TopLeft1.style.border="1px solid #f5f5f5"
     bgflywzdh.style.display='none'
   }
   flywzdhX.onmouseover=function(){
    flywzdhX.style.background='url(img/png/3.png)'
   }
   flywzdhX.onmouseout=function(){
    flywzdhX.style.background='url(img/png/1.png)'
   }
   flywzdhX.onclick=function(){
    bgflywzdh.style.display='none'
   }
//xiaoxi
var TopLeft2=getClass('TopLeft2')[0]
var flyxx=getClass('flyxx')[0]
var TopLeft2z=getClass('TopLeft2z')[0]
   TopLeft2.onmouseover=function(){
     flyxx.style.display='block'
     TopLeft2.style.background='#fff'
     TopLeft2.style.border='1px solid #ddd'
     TopLeft2z.style.color='#ff6600'
     TopLeft2z.style.textDecoration="underline"
   } 
   TopLeft2.onmouseout=function(){
     flyxx.style.display='none'
     TopLeft2.style.background='none'
     TopLeft2.style.border='1px solid #f5f5f5'
     TopLeft2z.style.color='#666'
     TopLeft2z.style.textDecoration="none"
   }
//wddd
var TopRight2=getClass('TopRight2')[0]
var TopRight2z=getClass('TopRight2z')[0]
var wdddfly=getClass('wdddfly')[0]
  TopRight2.onmouseover=function(){
    TopRight2.style.background="#fff"
    TopRight2.style.border="1px solid #ddd"
    TopRight2z.style.color='#ff6600'
    wdddfly.style.display='block'
    TopRight2z.style.textDecoration="underline"
  }
  TopRight2.onmouseout=function(){
    TopRight2.style.background="none"
    TopRight2z.style.color='#666'
    wdddfly.style.display='none'
    TopRight2.style.border="1px solid #f5f5f5"
    TopRight2z.style.textDecoration="none"
  }
//wdyg
var TopRight3=getClass('TopRight3')[0]
var TopRight3z=getClass('TopRight3z')[0]
var wdygfly=getClass('wdygfly')[0]
  TopRight3.onmouseover=function(){
    TopRight3.style.background="#fff"
    TopRight3.style.border="1px solid #ddd"
    TopRight3z.style.color='#ff6600'
    wdygfly.style.display='block'
    TopRight3z.style.textDecoration="underline"
  }
  TopRight3.onmouseout=function(){
    TopRight3.style.background="none"
    TopRight3z.style.color='#666'
    wdygfly.style.display='none'
    TopRight3.style.border="1px solid #f5f5f5"
    TopRight3z.style.textDecoration="none"
  }
 //sjsn
 var TopRight5=getClass('TopRight5')[0]
 var bgsjsnfly=getClass('bgsjsnfly')[0]
 var sjsnflygb=getClass('sjsnflygb')[0]
   sjsnflygb.onclick=function(){
    bgsjsnfly.style.display='none'
   }
   sjsnflygb.onmouseover=function(){
    sjsnflygb.style.background='url(img/png/3.png)'
   }
   sjsnflygb.onmouseout=function(){
    sjsnflygb.style.background='url(img/png/1.png)'
   }
   TopRight5.onmouseover=function(){
    bgsjsnfly.style.display='block'
    TopRight5.style.border='1px solid #ddd'
    TopRight5.style.background='#fff'
   }
   TopRight5.onmouseout=function(){
    bgsjsnfly.style.display='none'
    TopRight5.style.border='1px solid #f5f5f5'
    TopRight5.style.background='none'
   }
 //shop
var TopRight4=getClass('TopRight4')[0]
var TopRight4span=TopRight4.getElementsByTagName('span')[0]
  TopRight4.onmouseover=function(){
    TopRight4span.style.color="#ff6600"
    TopRight4span.style.textDecoration="underline"
  }
  TopRight4.onmouseout=function(){
    TopRight4span.style.color="#000"
    TopRight4span.style.textDecoration="none"
  }
 //khfw
var TopRight8=getClass('TopRight8')[0]
var TopRight8z=getClass('TopRight8z')[0]
var khfwfly=getClass('khfwfly')[0]
  TopRight8.onmouseover=function(){
    TopRight8.style.background="#fff"
    TopRight8.style.border="1px solid #ddd"
    TopRight8z.style.color='#ff6600'
    khfwfly.style.display='block'
    TopRight8z.style.textDecoration="underline"
  }
  TopRight8.onmouseout=function(){
    TopRight8.style.background="none"
    TopRight8z.style.color='#666'
    khfwfly.style.display='none'
    TopRight8.style.border="1px solid #f5f5f5"
    TopRight8z.style.textDecoration="none"
  }
//sreach
var sreachzjss=getClass('sreachzjss')[0]
var sreachk=document.getElementById('sreachk')
  sreachk.onfocus=function(){
    if(sreachk.value=="欢喜中国年,尖货五折起"){
      sreachk.value=""
      sreachzjss.style.display='block'
    }
  }
  sreachk.onblur=function(){
    if(sreachk.value==""){
      sreachk.value="欢喜中国年,尖货五折起"
    }
    sreachzjss.style.display='none'
  }
 var sreachzjssRxd=getClass('sreachzjssRxd')
 var sreachzjssRxda=getClass('sreachzjssRxda')
 var sreachzjssRsX=getClass('sreachzjssRsX')[0]
 for (var i = 0; i < sreachzjssRxd.length; i++) {
   sreachzjssRxd[i].index=i
   sreachzjssRxd[i].onmouseover=function(){
    this.style.border="1px solid #ffaa00"
    sreachzjssRxda[this.index].style.color='#ffaa00'
   }
   sreachzjssRxd[i].onmouseout=function(){
    this.style.border="1px solid #fff"
    sreachzjssRxda[this.index].style.color='#666'
   }
 };
  sreachzjssRsX.onclick=function(){
    sreachzjss.style.display='none'
  }
//楼层跳转
var lctz=getClass('lctz')[0]
var lctzd=getClass('lctzd')
var louCeng=getClass('louCeng')
var lctzdz=getClass('lctzdz')
var lctzdt=getClass('lctzdt')
var bgF1=getClass('bgF1')[0]
//点击显示隐藏 跳转  
  for (var i = 0; i < lctzd.length; i++) {
     lctzd[i].index=i
     lctzd[i].onclick=function(){
      for (var j = 0; j < lctzd.length; j++) {
        lctzdt[j].style.display='block'
        lctzdz[j].style.display='none'
      }
      lctzdz[this.index].style.display='block'
      lctzdt[this.index].style.display='none'
      var floor=louCeng[this.index].offsetTop
      animate(obj,{scrollTop:floor},300)
     }
     //点击后移入效果的实现
    hover(lctzd[i],function(){
      lctzdz[this.index].style.display='block'
      lctzdt[this.index].style.display='none'
    },function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      if(obj.scrollTop>=louCeng[this.index].offsetTop&&obj.scrollTop<louCeng[this.index+1].offsetTop){
          lctzdz[this.index].style.display='block'
          lctzdt[this.index].style.display='none'
      }else{
      lctzdz[this.index].style.display='none'
      lctzdt[this.index].style.display='block'
       }
    })
  }
//滚动事件
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  if(obj.scrollTop>bgF1.offsetTop-document.documentElement.clientHeight){
      lctz.style.display='block'
    }
var allimgs=$('img')
 for (var i = 0; i <allimgs.length; i++) {
   if(getPosition(allimgs[i]).y<document.documentElement.clientHeight){
       allimgs[i].src=allimgs[i].getAttribute('data-src')
     }
   hover(allimgs[i],function(){
    this.style.opacity='0.9'
   },function(){
    this.style.opacity='1'
   })   
  };
  var tz=0;
  window.onscroll=function(){
    obj=document.documentElement.scrollTop?document.documentElement:document.body;
    //滚动显示隐藏
    if(obj.scrollTop>bgF1.offsetTop-document.documentElement.clientHeight){
      lctz.style.display='block'
    }else{
      lctz.style.display='none'
    }  
  //滚动变化
    //获取楼层高度
    var louCengarr=[]
    for (var i = 0; i < lctzd.length; i++) {
      louCengarr.push(louCeng[i].offsetTop)
     }
     //滚动效果
     setTimeout(function(){
       gundongtz()
       if(obj.scrollTop>=louCengarr[10]){
         for (var i = 0; i < louCeng.length; i++) {
           lctzdt[i].style.display='block'
           lctzdz[i].style.display='none'
         }
         lctzdt[10].style.display='none'
         lctzdz[10].style.display='block'
       } 
     },100)
     function gundongtz(){
      if(obj.scrollTop>=louCengarr[tz]&&obj.scrollTop<louCengarr[tz+1]){
        for (var i = 0; i < louCeng.length; i++) {
          lctzdt[i].style.display='block'
          lctzdz[i].style.display='none'
        }
          lctzdt[tz].style.display='none'
          lctzdz[tz].style.display='block'
      }
      tz++;
      if(tz==louCeng.length-1){
        tz=0
      }
     }
     //图片按需加载
     for (var i = 0; i < allimgs.length; i++) {
       obj=document.documentElement.scrollTop?document.documentElement:document.body;

       if(obj.scrollTop>allimgs[i].offsetTop-document.documentElement.clientHeight){
         allimgs[i].src=allimgs[i].getAttribute('data-src')
       }
     };
  }
  //移入移出效果
//切换选项卡
var F1topC1=getClass('F1topC1')[0]
var F1topC2=getClass('F1topC2')[0]
var F1bottom234=getClass('F1bottom234')
var span2=F1topC2.getElementsByTagName('span')[0]
   F1topC1.onmouseover=function(){
     F1bottom234[1].style.display='none'
     F1bottom234[0].style.display='block'
     F1topC1.style.borderBottom='4px solid #ff6b80'
     F1topC2.style.borderBottom='0'
     F1topC1.style.fontWeight="bold"
     F1topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F1topC2.onmouseover=function(){
     F1bottom234[0].style.display='none'
     F1bottom234[1].style.display='block'
     F1topC2.style.borderBottom='4px solid #ff6b80'
     F1topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F1topC1.style.fontWeight="normal"
     F1topC1.style.color="#666"
   }
//f1
var F2topC1=getClass('F2topC1')[0]
var F2topC2=getClass('F2topC2')[0]
var F2bottom234=getClass('F2bottom234')
var span2=F2topC2.getElementsByTagName('span')[0]
   F2topC1.onmouseover=function(){
     F2bottom234[1].style.display='none'
     F2bottom234[0].style.display='block'
     F2topC1.style.borderBottom='4px solid #c4e6e7'
     F2topC2.style.borderBottom='0'
     F2topC1.style.fontWeight="bold"
     F2topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F2topC2.onmouseover=function(){
     F2bottom234[0].style.display='none'
     F2bottom234[1].style.display='block'
     F2topC2.style.borderBottom='4px solid #c4e6e7'
     F2topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F2topC1.style.fontWeight="normal"
     F2topC1.style.color="#666"
   }
//f2
var F3topC1=getClass('F3topC1')[0]
var F3topC2=getClass('F3topC2')[0]
var F3bottom234=getClass('F3bottom234')
var span2=F3topC2.getElementsByTagName('span')[0]
   F3topC1.onmouseover=function(){
     F3bottom234[1].style.display='none'
     F3bottom234[0].style.display='block'
     F3topC1.style.borderBottom='4px solid #edf588'
     F3topC2.style.borderBottom='0'
     F3topC1.style.fontWeight="bold"
     F3topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F3topC2.onmouseover=function(){
     F3bottom234[0].style.display='none'
     F3bottom234[1].style.display='block'
     F3topC2.style.borderBottom='4px solid #edf588'
     F3topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F3topC1.style.fontWeight="normal"
     F3topC1.style.color="#666"
   }
//f3
var F4topC1=getClass('F4topC1')[0]
var F4topC2=getClass('F4topC2')[0]
var F4bottom234=getClass('F4bottom234')
var span2=F4topC2.getElementsByTagName('span')[0]
   F4topC1.onmouseover=function(){
     F4bottom234[1].style.display='none'
     F4bottom234[0].style.display='block'
     F4topC1.style.borderBottom='4px solid #f8e598'
     F4topC2.style.borderBottom='0'
     F4topC1.style.fontWeight="bold"
     F4topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F4topC2.onmouseover=function(){
     F4bottom234[0].style.display='none'
     F4bottom234[1].style.display='block'
     F4topC2.style.borderBottom='4px solid #f8e598'
     F4topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F4topC1.style.fontWeight="normal"
     F4topC1.style.color="#666"
   }
//f4
var F5topC1=getClass('F5topC1')[0]
var F5topC2=getClass('F5topC2')[0]
var F5bottom234=getClass('F5bottom234')
var span2=F3topC2.getElementsByTagName('span')[0]
   F5topC1.onmouseover=function(){
     F5bottom234[1].style.display='none'
     F5bottom234[0].style.display='block'
     F5topC1.style.borderBottom='4px solid #ff6b80'
     F5topC2.style.borderBottom='0'
     F5topC1.style.fontWeight="bold"
     F5topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F5topC2.onmouseover=function(){
     F5bottom234[0].style.display='none'
     F5bottom234[1].style.display='block'
     F5topC2.style.borderBottom='4px solid #ff6b80'
     F5topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F5topC1.style.fontWeight="normal"
     F5topC1.style.color="#666"
   }
//f5
var F6topC1=getClass('F6topC1')[0]
var F6topC2=getClass('F6topC2')[0]
var F6bottom234=getClass('F6bottom234')
var span2=F6topC2.getElementsByTagName('span')[0]
   F6topC1.onmouseover=function(){
     F6bottom234[1].style.display='none'
     F6bottom234[0].style.display='block'
     F6topC1.style.borderBottom='4px solid #ff6b80'
     F6topC2.style.borderBottom='0'
     F6topC1.style.fontWeight="bold"
     F6topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F6topC2.onmouseover=function(){
     F6bottom234[0].style.display='none'
     F6bottom234[1].style.display='block'
     F6topC2.style.borderBottom='4px solid #ff6b80'
     F6topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F6topC1.style.fontWeight="normal"
     F6topC1.style.color="#666"
   }
//f6
var F7topC1=getClass('F7topC1')[0]
var F7topC2=getClass('F7topC2')[0]
var F7bottom234=getClass('F7bottom234')
var span2=F7topC2.getElementsByTagName('span')[0]
   F7topC1.onmouseover=function(){
     F7bottom234[1].style.display='none'
     F7bottom234[0].style.display='block'
     F7topC1.style.borderBottom='4px solid #beb6f2'
     F7topC2.style.borderBottom='0'
     F7topC1.style.fontWeight="bold"
     F7topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F7topC2.onmouseover=function(){
     F7bottom234[0].style.display='none'
     F7bottom234[1].style.display='block'
     F7topC2.style.borderBottom='4px solid #beb6f2'
     F7topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F7topC1.style.fontWeight="normal"
     F7topC1.style.color="#666"
   }
//f7
var F8topC1=getClass('F8topC1')[0]
var F8topC2=getClass('F8topC2')[0]
var F8bottom234=getClass('F8bottom234')
var span2=F8topC2.getElementsByTagName('span')[0]
   F8topC1.onmouseover=function(){
     F8bottom234[1].style.display='none'
     F8bottom234[0].style.display='block'
     F8topC1.style.borderBottom='4px solid #f6efcf'
     F8topC2.style.borderBottom='0'
     F8topC1.style.fontWeight="bold"
     F8topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F8topC2.onmouseover=function(){
     F8bottom234[0].style.display='none'
     F8bottom234[1].style.display='block'
     F8topC2.style.borderBottom='4px solid #b6efcf'
     F8topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F8topC1.style.fontWeight="normal"
     F8topC1.style.color="#666"
   }
//f8
var F9topC1=getClass('F9topC1')[0]
var F9topC2=getClass('F9topC2')[0]
var F9bottom234=getClass('F9bottom234')
var span2=F9topC2.getElementsByTagName('span')[0]
   F9topC1.onmouseover=function(){
     F9bottom234[1].style.display='none'
     F9bottom234[0].style.display='block'
     F9topC1.style.borderBottom='4px solid #ace4ed'
     F9topC2.style.borderBottom='0'
     F9topC1.style.fontWeight="bold"
     F9topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F9topC2.onmouseover=function(){
     F9bottom234[0].style.display='none'
     F9bottom234[1].style.display='block'
     F9topC2.style.borderBottom='4px solid #ace4ed'
     F9topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F9topC1.style.fontWeight="normal"
     F9topC1.style.color="#666"
   }
//f9
var F10topC1=getClass('F10topC1')[0]
var F10topC2=getClass('F10topC2')[0]
var F10bottom234=getClass('F10bottom234')
var span2=F10topC2.getElementsByTagName('span')[0]
   F10topC1.onmouseover=function(){
     F10bottom234[1].style.display='none'
     F10bottom234[0].style.display='block'
     F10topC1.style.borderBottom='4px solid #edeeb5'
     F10topC2.style.borderBottom='0'
     F10topC1.style.fontWeight="bold"
     F10topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F10topC2.onmouseover=function(){
     F10bottom234[0].style.display='none'
     F10bottom234[1].style.display='block'
     F10topC2.style.borderBottom='4px solid #edeeb5'
     F10topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F10topC1.style.fontWeight="normal"
     F10topC1.style.color="#666"
   }
//f10
var F11topC1=getClass('F11topC1')[0]
var F11topC2=getClass('F11topC2')[0]
var F11bottom234=getClass('F11bottom234')
var span2=F3topC2.getElementsByTagName('span')[0]
   F11topC1.onmouseover=function(){
     F11bottom234[1].style.display='none'
     F11bottom234[0].style.display='block'
     F11topC1.style.borderBottom='4px solid #f7e0b4'
     F11topC2.style.borderBottom='0'
     F11topC1.style.fontWeight="bold"
     F11topC1.style.color="#222"
     span2.style.fontWeight="normal"
     span2.style.color="#666"
   }
   F11topC2.onmouseover=function(){
     F11bottom234[0].style.display='none'
     F11bottom234[1].style.display='block'
     F11topC2.style.borderBottom='4px solid #f7e0b4'
     F11topC1.style.borderBottom='0'
     span2.style.fontWeight="bold"
     span2.style.color="#222"
     F11topC1.style.fontWeight="normal"
     F11topC1.style.color="#666"
   }
//f11
   var snsq=getClass('snsq')[0]
   var snsqjtz=getClass('snsqjtz')[0]
   var snsqjty=getClass('snsqjty')[0]
   var snsqBottom2D=getClass('snsqBottom2D')[0]
   var snsqBottom2Dd=getClass('snsqBottom2Dd')[0]
   var btn=getClass('btn')
   var snsqBottom2=getClass('snsqBottom2')
   var n=0;
   var flag1=true;
   var flag2=true;
   var Time;
   function lunbo3(){
    clearTimeout(Time)
    Time=setTimeout(function(){
     n++;
     if(n<0){
      n=2;
     }
     if(n>2){
      n=0;
     }
    animate(snsqBottom2D,{left:-1009},500,function(){
       flag1=true;
       flag2=true;
       var frist=getFrist(snsqBottom2D)
       snsqBottom2D.appendChild(frist)
       this.style.left=0
     })
     //点击btn切换
     for (var i = 0; i < btn.length; i++) {
       btn[i].style.background='#fff' 
     }
     btn[n].style.background='#ffaa00'
     },500)
      
   }
   //点击箭头
   snsqjty.onclick=function(){
      if(flag1){
       flag1=false; 
       lunbo3()
      }
   }
   snsqjtz.onclick=function(){
    if(flag2){
      flag2=false;
     n-=2; 
     lunbo3()
    } 
   }
   //移入btn
   for (var i = 0; i < btn.length; i++) {
    btn[i].index=i
    btn[i].onmouseover=function(){
      for (var j = 0; j < btn.length; j++) {
        btn[j].style.background='#fff'
      }
    var that=this
    this.style.background='#ffaa00'
    animate(snsqBottom2D,{left:-1009*this.index},200)  
    };
     btn[i].onmouseout=function(){
      n=this.index
     }
   }
   //移入出现箭头
   snsq.onmouseover=function(){
     snsqjtz.style.display='block'
     snsqjty.style.display='block'
     animate(snsqjtz,{opacity:0.5},200)
     animate(snsqjty,{opacity:0.5},200)
   }
   snsq.onmouseout=function(){
     snsqjtz.style.display='none'
     snsqjty.style.display='none'
     animate(snsqjtz,{opacity:0.3},200)
     animate(snsqjty,{opacity:0.3},200)
   }
   /*hover(snsqjtz,function(){
      snsqjtz.style.opacity="0.8"
    },function(){
      snsqjtz.style.opacity="0.5"
    })
   snsqjty.onmouseover=function(){
     snsqjty.style.opacity="0.8"
   }
   snsqjty.onmouseout=function(){
     snsqjty.style.opacity="0.5"
   }*/
   //底部移入移出JS
   var snsqBottom1bd1=getClass('snsqBottom1bd1')
   var snsqBottom1bd1t1=getClass('snsqBottom1bd1t1')
   var snsqBottom1bd1t2=getClass('snsqBottom1bd1t2')
   var snsqBottom1bd1z=getClass('snsqBottom1bd1z')
   for (var i = 0; i < snsqBottom1bd1.length; i++) {
     snsqBottom1bd1[i].index=i
     hover(snsqBottom1bd1[i],function(){
       for (var j = 0; j < snsqBottom1bd1t1.length; j++) {
         snsqBottom1bd1t1[j].style.display="block"
         snsqBottom1bd1t2[j].style.display="none"
         snsqBottom1bd1z[j].style.color='#666'
       }
         snsqBottom1bd1t1[this.index].style.display="none"
         snsqBottom1bd1t2[this.index].style.display="block"
         snsqBottom1bd1z[this.index].style.color='#ffaa00'
     },function(){
         snsqBottom1bd1t1[this.index].style.display="block"
         snsqBottom1bd1t2[this.index].style.display="none"
         snsqBottom1bd1z[this.index].style.color='#666'
     })
   };
//底部轮播
  var pageTop1=getClass('pageTop1')[0]
  var pageTop1z=getClass('pageTop1z')[0]
  pageTop1.onmouseover=function(){
    pageTop1z.style.textDecoration="underline"
  }
  pageTop1.onmouseout=function(){
    pageTop1z.style.textDecoration="none"
  }
  //bannerces
  var cebannerd=getClass('cebannerd')
  var cebannerdz=getClass('cebannerdz')
  var cebannerdfly=getClass('cebannerdfly')
  for (var i = 0; i < cebannerd.length; i++) {
    cebannerd[i].index=i
    hover(cebannerd[i],function(){
      for (var j = 0; j < cebannerd.length; j++) {
        cebannerd[j].style.background='#2b2b2b'
        cebannerdfly[j].style.display="none"
      }
      this.style.background='#fff'
      cebannerdfly[this.index].style.display='block'
      cebannerdfly[this.index].style.width='802px'
      var ajh=$('.cebannerdz',this)
      for (var n = 0; n < ajh.length; n++) {
        ajh[n].style.color='#2b2b2b'
      };
    },function(){
      this.style.background='#2b2b2b'
      animate(cebannerdfly[this.index],{width:0},200)
      var ajh=$('.cebannerdz',this)
      for (var n = 0; n < ajh.length; n++) {
        ajh[n].style.color='#fff'
      };
    })
  };
  //bannerce

  //bannercefly
  var color=['#e2043f','#e8e8e8','#ef0c0c','#5be6c5','#ee341b','#f25886','#dc0d21','#de3e2e','#fdb4b6','#d4be8e','#c90b0b','#3293f4','#f9a004','#600152','#fef328','#fb7775','#cc2016','#fbe697','#eecc85','#d30316','#c8171f','#ff2603']
  var num=0
  var mun=0
  var n=0
  var bannertd=getClass('bannertd')
  var bgbannert=getClass('bgbannert')[0]
  var bgbanner=getClass('bgbanner')[0]
  var bannerBod1=getClass('bannerBod1')
  var bannerBod1d=getClass('bannerBod1d')
  var bannerBo=getClass('bannerBo')
  var bannerBod=getClass('bannerBod')
  var Inter=setInterval(lunbo,2000)
     function lunbo(){
       num++;
       if(num==bannertd.length){
        num=0;
       }
       for (var i = 0; i < bannertd.length; i++) {
         bannertd[i].style.display="none";
         bannertd[i].style.opacity="0.5";
         bannerBod1d[i].style.background='#fff'
         bannerBod1d[i].parentNode.style.display='none'
         bannerBod1d[i].parentNode.parentNode.style.background='rgba(0,0,0,0.4)'
         if(bannerBod1d[i].parentNode!=bannerBod1d[num].parentNode){
          bannerBod1d[i].parentNode.style.top='10px'
         } 
       }
       bannertd[num].style.display="block"
       animate(bannertd[num],{opacity:1},200)
       bgbanner.style.background=color[num]
       bannerBod1d[num].style.background='#ffaa00'
       animate(bannerBod1d[num].parentNode,{top:-10},100)
       bannerBod1d[num].parentNode.style.display='block'
       bannerBod1d[num].parentNode.parentNode.style.background='rgba(0,0,0,0.7)'
     }   
  bgbannert.onmouseover=function(){
       clearInterval(Inter)
  }
  bgbannert.onmouseout=function(){
    Inter=setInterval(lunbo,2000)
  }
  //自动轮播
  var bannerjtl=getClass('bannerjtl')[0]
  var bannerjty=getClass('bannerjty')[0]
  bannerjty.onclick=function(){
    lunbo()
  }
    function Flunbo(){
       if(num==0){
        num=22;
       }
       num--;
       for (var i = 0; i < bannertd.length; i++) {
         bannertd[i].style.display="none";
         bannertd[i].style.opacity="0.5";
         bannerBod1d[i].style.background='#fff'
         bannerBod1d[i].parentNode.style.display='none'
         bannerBod1d[i].parentNode.parentNode.style.background='rgba(0,0,0,0.4)'
         if(bannerBod1d[i].parentNode!=bannerBod1d[num].parentNode){
          bannerBod1d[i].parentNode.style.top='10px'
         } 
       }
       bannertd[num].style.display="block"
       animate(bannertd[num],{opacity:1},200)
       bgbanner.style.background=color[num]
       bannerBod1d[num].style.background='#ffaa00'
       animate(bannerBod1d[num].parentNode,{top:-10},100)
       bannerBod1d[num].parentNode.style.display='block'
       bannerBod1d[num].parentNode.parentNode.style.background='rgba(0,0,0,0.7)'
     } 
  bannerjtl.onclick=function(){
    Flunbo()
  }
  bannerjty.onmouseover=bannerjtl.onmouseover=function(){
     clearInterval(Inter)
  }
  bannerjty.onmouseout=bannerjtl.onmouseout=function(){
     Inter=setInterval(lunbo,2000)
  }
  //点击箭头轮播
  bgbanner.onmouseover=function(){
    bannerjty.style.display='block'
    bannerjtl.style.display='block'
    animate(bannerjty,{opacity:0.7},300)
    animate(bannerjtl,{opacity:0.7},300)
  }
  //移入移出箭头消失显示
  bgbanner.onmouseout=function(){
    animate(bannerjty,{opacity:0.3},300,function(){
    bannerjty.style.display='none'
    })
    animate(bannerjtl,{opacity:0.3},300,function(){
    bannerjtl.style.display='none'
    })
  }
  //移入移出底部切换图片
  var bannerBod2=getClass('bannerBod2')
  for (var i = 0; i < bannerBod2.length; i++) {
    bannerBod2[i].index=i
    bannerBod2[i].onmouseover=function(){
      clearInterval(Inter)
      for (var j = 0; j < bannerBod.length; j++) {
        bannerBod1[j].style.display='none'
        bannerBod1[j].style.top="0"
        bannerBod[j].style.background='rgba(0,0,0,0.4)'
      };
      bannerBod1[this.index].style.top="-10px"
      bannerBod1[this.index].style.display="block"
      bannerBod[this.index].style.background='rgba(0,0,0,0.7)'
      //移动到点的时候切换图片效果
      for (var j = 0; j < bannerBod1d.length; j++) {
        bannerBod1d[j].index=j
        bannerBod1d[j].onmouseover=function(){
           clearInterval(Inter)
           for (var n = 0; n < bannerBod1d.length; n++) {
             bannerBod1d[n].style.background='#fff'
             bannertd[n].style.display='none'
             bannertd[n].style.opacity="0.5"
           }
           this.style.background='#ffaa00'
           bannertd[this.index].style.display='block'
           animate(bannertd[this.index],{opacity:1},200)
           bgbanner.style.background=color[this.index]
         }
         bannerBod1d[j].onmouseout=function(){
          num=this.index;
         }
      };
    }
    bannerBod2[i].onmouseout=function(){
      Inter=setInterval(lunbo,2000)
    }
  };
  //bannerR
  var bannerRight2xd=getClass('bannerRight2xd')
  var bannerRight2xd1=getClass('bannerRight2xd1')
  var bannerRight2xd2=getClass('bannerRight2xd2')
  var bannerRight2xdw=getClass('bannerRight2xdw')
  for (var i = 0; i < bannerRight2xd.length; i++) {
    bannerRight2xd[i].index=i
    hover(bannerRight2xd[i],function(){
      for (var j = 0; j < bannerRight2xd1.length; j++) {
        bannerRight2xd1[j].style.display='block'
        bannerRight2xd2[j].style.display='none'
        bannerRight2xdw[j].style.color="#666"
      }
      bannerRight2xd1[this.index].style.display='none'
      bannerRight2xd2[this.index].style.display='block'
      bannerRight2xdw[this.index].style.color='#ff6600'
    },function(){
      bannerRight2xd1[this.index].style.display='block'
      bannerRight2xd2[this.index].style.display='none'
      bannerRight2xdw[this.index].style.color='#666'
    })
  };
//banner                
}