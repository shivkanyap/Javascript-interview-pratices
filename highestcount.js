// var a={
//     x:2,
//     b:2,
//     c:4,
//     d:1
// }
// // let arr=Object.values(a)
// // console.log(arr)
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i])
// }
const users=[
    {id:1,name:'kanya'},
    {id:2,name:'pooja'},
    {id:3,name:'kavya'}
]

function name(users){
  let  id=2
for(let i=0;i<users.length;i++)
{
    if(users[i].id==id)
    {
        users[i].name="abc"
    }
    // return users
}
return users
}
console.log(name(users))