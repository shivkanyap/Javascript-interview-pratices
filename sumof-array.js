array1 = [1,0,2,3,4]
array2 = [3,5,6,7,8,13]

function sumTwoArrayIndexes(a,b)
{
    let output = []
    let d
    let c;
    if (a.length > b.length)
    {
        c=a.length
    }
    else {
        c=b.length
    }
    for (let i = 0; i < c.length; i++)
    {
        if (a[i] == undefined)
        {
            a[i]=0
        }
        else if (b[i] == undefined)
        {
            b[i]=0
        }
        d=output.push(a[i]+b[i])
    }
    console.log(d)
}
sumTwoArrayIndexes(array1,array2)

//     array1 = [1,0,2,3,4]
// array2 = [3,5,6,7,8,13]