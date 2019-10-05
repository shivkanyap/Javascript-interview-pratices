var array=[1,2,2,3,4,5,1,0]
// let output=[]

function duplicate(array)
{
    let output=[]
    //let o=[]
    for(let i=0;i<array.length;i++)
    {
        if(output(array[i])==undefined)
        {
            output(array[i])=1
        }
        else{
            output(array[i])+=1
        }
    }
    return output
}
console.log(duplicate(array))