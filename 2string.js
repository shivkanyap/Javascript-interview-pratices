// name='kanya'
// console.log("my name is ${name}")


function iq(num)
{
   let ab= num.split(' ')
   let out
//    console.log(ab)
   for(let i=0;i<ab.length;i++)
   {
    //    console.log(typeof(ab[i]))
    // const number = Number 
    if((Number(ab[i])%2) != 0)
       {
           out=ab[i]
       }
   }
   return out
   
}
// console.log(iq(num))
var a=('2 3 4 6')
console.log(iq(a))

// name='kanya'
// console.log("my name is ${name}")