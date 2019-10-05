var a=[2,5,9,6]
function  sub(a,b)
{
    var d=a.indexOf(b)
    if(d>-1)
    {
        a.splice(d,1)
    }
    return a
    
     
}
console.log(sub(a,5))