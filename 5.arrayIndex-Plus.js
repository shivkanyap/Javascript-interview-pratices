var a=[1,1,1,1,1]

var b=[0,1,2,3,4]
function addIndex(a,b)
{
    let output=[]
    output=a
    //for(let i=0;i<a.length-1;i++)
    for(let i=0;i<b.length;i++)
    {
        if(output[i]==undefined)
        {
            output[i]=0
        }
        output[i]+=b[i]
    }
    return output
}
console.log(addIndex(a,b))