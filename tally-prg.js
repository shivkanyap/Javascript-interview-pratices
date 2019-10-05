// var a='aaaAbbBb'
// function Tally(a)
// {
//     count=0
//     for(let i=0;i<a.length;i++)
//     {
//         console.log(a[i])
//         if(a[i]==a[i].toLowerCase())
//         {
//             count++
//         }
//     }
//     return count
// }
// Tally(a)

// 

// arr1=[10,20,10,30,40]
// function remove(a)
// {
//     let out=[]
//     for(let i=0;i<a.length;i++)
//     {
//         if(a.includes(a[i])==-1)
//         {
//             out.push(a[i])
//         }
//     }
//     return out
// }
// remove(arr1)
// let a=[10,20,30,40,10,20]

let arr=([1, 2, 3])
    let brr= ([2, 30, 1])
  let  a=arr.concat(brr)
    // console.log(a)

function remove(a)
{
result = []
    for (let i = 0; i < a.length; i++)
    {
        if (result.includes(a[i]) == false)
        {
            result.push(a[i])
            // console.log('aannd')
        }
    }
    return result

    
}
console.log(remove(a))
