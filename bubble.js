var b=['nan',0,false,undefined,-22,1,null,60,""]//[-22,1,60]

function number(a){
 let output=b.filter(function(element){
    
       // (element==0)||(element==null|(element==undefined||element=='nan')
          return ((element!==0)&&(element!==false)&&(element!==undefined)&&(element!==null)&&(element!="")&&(element!=='nan'))
     })
     return output

    }
console.log(number(b))
    