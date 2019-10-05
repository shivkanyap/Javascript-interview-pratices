function numberPattern(n)
{
    for(let i=1;i<=n;i++)
    {
        let str=''
        for(let j=1;j<=i;j++)
        {
            str+=i+1
        }
        console.log(str)
    }
}
 numberPattern(5)

// function number(n)
// {
//     for(let i=5;i>=1;i--)
//     {
//         let str=" "
//         for(let j=1;j<=i;j++)
//         {
//             str+=i
//         }
//         console.log(str)
//     }
// }
// number(5)

// function number(n)
// {
//     for(let i=1;i<=n;i++)
//     {
//         let str=' '
//         for(let j=5;j>=i;j--)
//         {
//             console.log(" ")
//         }
//         for(let k=1;k<=i;k++)
//         {
//             str+=i
//         }
//         console.log(str)
//     }
// }
// number(5)