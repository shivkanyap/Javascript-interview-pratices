var a=[1,2,3,5,4,6,7,8]

function lastElement(a,b)
{
  return  a.slice(a.length-b,a.length)
}
console.log(lastElement(a,3))