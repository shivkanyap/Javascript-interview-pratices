// function missingElement(a) {
//     let sum=0,esum=0,missNumber,temp=[]
//     for (let i = 0; i < a.length; i++){
//         sum+=a[i]
//     }
//     min=a[0]
//     for (i = 1; i < a.length; i++){
//         if(a[i]<min) min=a[i]
//     }
//     esum = min
//     j=0
//     for (i = 1; i <= a.length + 1; i++){
//         temp[j] = esum
//         j++
//         esum += 1
        
//     }
//     esum=0
//     temp.forEach(function (ele) {
//         esum=esum+ele
//     })
//     missNumber=esum-sum

//     return missNumber

// }
// var  a=[1,2,3,4,5]

// var a=[5] count=5
var a="hoe r u"
console.log(a.substring(0,4))
console.log(a.slice(0,4))
console.log(a.substr(0,1))