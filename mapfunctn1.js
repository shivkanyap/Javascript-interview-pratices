let arr=[10,20,30,40]

function check(arr1)
{
 const val=arr1.map((a)=>{
    return a+1
})
return val
}
console.log(check(arr))
console.log(arr)