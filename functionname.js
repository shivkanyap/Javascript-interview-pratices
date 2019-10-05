// v

// var obj = { a: 1, b: 2, c: 3 }

// function values(a){
//     let val=[]
//     for (let key in a)
//     {
//          val.push(a[key])
//     }
//     return val
   
// }
// console.log(values(obj))
var obj={'name':'soma',
'whoAmi':function(){return this.name}
}

function values(a)
{
    // let out=[]
    // for(let key in a)
    // {
    //     var arr=(a[key])
    //     // console.log(typeof(a[key]))
    //     console.log(arr[0])
    // }
    console.log(Object.keys(a))
    console.log(a[0])
}
console.log(values(obj))
