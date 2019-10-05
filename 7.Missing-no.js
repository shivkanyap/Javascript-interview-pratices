
function MissingNo(a)
{
    let sum=0
    for(let i=0;i<a.length;i++)
    {
        sum+=a[i]
    }
     
    MaxNo=(Math.max.apply(null,a))
    MinNo=(Math.min.apply(null,a))-1
    // console.log(MinNo)
    let MaxSum=MaxNo*((MaxNo+1)/2)
    let MinSum=MinNo*((MinNo+1)/2)

    MissingNumber=MaxSum-MinSum-sum
    console.log(MissingNumber)

}
MissingNo([15,17,18,19])
MissingNo([1,2,3,5])
