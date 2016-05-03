	//ClassName不在ie8以下兼容,通过函数库的方式解决兼容问题 写出通过ClassName方式引入 并通过script方式引入函数库  
      function getClass(selector,obj){
        obj=obj||document
        if(obj.getElementsByClassName){
             return obj.getElementsByClassName(selector);
        }else{
        	 var arr=obj.getElementsByTagName("*");
        	 var objarr=[];
        	 for (var i = 0; i < arr.length; i++) {
        	 	 if(check(arr[i].className,selector)){
        	 		objarr.push(arr[i])
        	 	 }
        	 }
        	 return objarr;
        }
      };
          function check(string,n){
                var arr2=string.split(" ")
                for (var i = 0; i < arr2.length; i++) {
                  if(arr2[i]==n){
                    return true;
                  }
                };
                    return false; 
          }    
 //兼容的获取或者设置文本信息
         function getText(select,value){
         if(arguments.length==1){
          if(select.textContent!=undefined){
            return select.textContent
           } else{
            return select.innerText
           }
          } else if(arguments.length==2){
            if(select.textContent!=undefined){
              return select.textContent=value;
            } else{
              return select.innerText=value;
            }
          } 
         }
//兼容的获取元素的行内样式
       function getStyle(select,str){
         if(!select.currentStyle){
          return getComputedStyle(select,null)[str]
          }else{
            return select.currentStyle[str]
          }
       }               
//获取元素的函数 通过类名 ID 标签名获取;
  function $(selector,obj){
   if(typeof selector=="string"){
    obj=obj||document;
    if(selector.charAt(0)=="."){
       return getClass(selector.slice(1),obj)
    }else if(selector.charAt(0)=="#"){
      return obj.getElementById(selector.slice(1))
    }else{
      return obj.getElementsByTagName(selector)
    }
   }else if(typeof selector=="function"){
      window.onload=function(){
          selector()
      }
   }
  }
  //获取一个元素所有的元素子节点
  function getChildren(obj){
      var arr=obj.childNodes
      var newarr=[]
      for (var i = 0; i < arr.length; i++) {
         if(arr[i].nodeType==1){
            newarr.push(arr[i])
         }
      }
           return newarr;
  }
  //获取一个元素第一个元素子节点
  function getFrist(obj){
    return getChildren(obj)[0]
  }
  //获取一个元素第二个元素子节点
  function getLast(obj){
    var arr=getChildren(obj)
    return arr[arr.length-1]
  }
  //获取一个元素所下一个兄弟元素节点
  function getNext(obj){
    if(document.getElementsByClassName){
       return obj.nextElementSibling
    }else{
       var next=obj.nextSibling;
       if(next==null){
         return null
       }
      while(next.nodeType!=1){
          next=next.nextSibling
          if(next==null){
            return null
          }
      }
         return next
    }
  }
  //获取一个元素上一个兄弟元素节点
  function getPro(obj){
    if(document.getElementsByClassName){
      return obj.previousElementSibling
    }else{
      var pro=obj.previousSibling
      if(pro==null){
        return null
      }
      while(pro.nodeType!=1){
         pro=pro.previousSibling 
        if(pro==null){
           null
        }
      }
         return pro
    }
  }
  function insertAter(newobj,obj){
    var parent=obj.parentNode;
    var next=getNext(obj)
    if(next==null){
      parent.appendChild(newobj)
    }else{
      parent.insertBefore(newobj,next)
    }
  }
//窗口高度 
 function offsetWindow(){
    var x=document.documentElement.clientWidth;
    var y=document.documentElement.clientHeight;
    return {width:x,height:y}
 }
 //输出scroll
 function getScroll(){
     obj=document.documentElement.scrollTop?document.documentElement:document.body
 }
 //获取某一个对象 的左右边距
 function getPosition(obj){
     var parent=obj.parentNode;
     var left=obj.offsetLeft;
     var top=obj.offsetTop;
     while(parent.nodeName!='BODY'){
           if(getStyle(parent,'position')=='absolute'||getStyle(parent,'position')=='relative'){
              left=left+parent.offsetLeft+parseInt(getStyle(parent,'borderLeftWidth'))
              top=top+parent.offsetTop+parseInt(getStyle(parent,'borderTopWidth'))
           }
         parent=parent.parentNode
     }
     return {x:left,y:top}
 }
  //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；

  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }


//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 
  function getEvent(e){
    return e||window.event;
  } 