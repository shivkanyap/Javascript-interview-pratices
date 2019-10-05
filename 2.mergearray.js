var a=[1,2,3]
var b=[1,2,30]

// function mergeArray(a,b)
// {
//     //let new=[]
//     var output=a.concat(b)
//     let a_name=  []
//     console.log(output)//[1,1,2,3,30,2]
//     for(var i=0;i<output.length;i++)
//     {
//         // var new=[]
//          if(a_name.indexOf(output[i])==-1){
//             a_name.push(output[i])
//          }
//          return a_name
        
//     }
// }
// console.log(mergeArray(a,b))
// function array(a,b)
// {
//     var output=a.concat (b)
//     let a1=[]
//     console.log(output)
//     status=0
//     a1.forEach(function(ele){
//         if(ele==1)
//     })
//     // $.each(output,function(i,el){
//         // if($.inArray(el,a1)===-1)a1.push(el)
//     // })
// }
// console.log(array(a,b))
var a = [1, 2, 3], b = [101, 2, 1, 10];
function mergeArray(a,b)
{
// var a = [1, 2, 3], b = [101, 2, 1, 10];
var c = a.concat(b.filter(function (item) {
    return a.indexOf(item) < 0;
    console.log(a.indexOf(item))
}))
return c
}
console.log(mergeArray(a,b))
