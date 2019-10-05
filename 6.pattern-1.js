function pattern(a)
{
    var str=''
    for(let i=1;i<=a;i++)
    {
        //str=""
        for(let j=1;j<=a-i;j++)
        {
            str+='\t'
        }
            for(let k=1;k<=i;k++)
            {
                str+=("*\t")
            }
            console.log(str)
            str=" "
            
        }
    
    return str
}
console.log(pattern(5))