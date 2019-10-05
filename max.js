// svar a=[12,34,56,1]
var b=[-12,-34,0,-36,-1]
let key=0;
let prop
function max(a)
{
    // let max=0
    for(let i=0;i<a.length-1;i++)
    {
        if((a[i]>key)||(a[i]>=0))
        {
            key=a[i]
            prop=key
        }
    }
    return prop
}
// console.log(max(a))
console.log(max(b))