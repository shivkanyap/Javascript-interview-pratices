var a=[1,2,3]
var b=[100,2,1,10]
// function inter(a,b){
// for(let i=0;i<=a.length;i++)
// {
//     //slet a1=[]
//     const output=b.filter(function(array){
//         return (a[i]==b[i])
//     })
    
//     return output
// }
// }
// console.log(inter(a,b))


function findAll(a,b){
    let output=[]
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++)
        {
            if(a[i]==b[j])
            {
                output.push(a[i])
            }
        }
          
    }
    return output
}
console.log(findAll(a,b))
