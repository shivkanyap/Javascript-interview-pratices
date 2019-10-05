// function prime(n)
//  {
//     let temp=n
//     for(let i=2;i<n;i++){
//     if(temp%2==0){
//         return 'invalid'
//     }
//     else{
//         if((temp%n==0)&&(temp%1==0))
//         {
//             return true
//         }
//     }
// }
//  }
// console.log(prime(2))

function prime(n)
{
    if(n==1)
    {
        return 'not a prime no'
    }
    else if(n==2)
    {
        return 'prime no'
    }
    else{
        for(var i=2;i<n;i++){
            if(n%i==0)
            {
                return false
            }
        }
        return true
    }
}
console.log(prime(6))