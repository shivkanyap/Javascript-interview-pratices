var str = 'aaaaAbbB'
var str1=''
let word=str.split("")
function frequency(word)
{
    var output={}
    for(let i=0;i<word.length;i++)
    {
        if(word[i]==word[i].toLowerCase() ||(word[i]==word[i].toUpperCase()))
        {
        if(output[word[i]]==undefined)
        {
         output[word[i]]=1
        }
        // else{
        //     output[word[i]]=output[word[i]]+1
        // }
        else (output[word[i]]==word[i].toUpperCase())
        {
            output[word[i]]=output[word[i]]-1
        }
        
    }
}
    return output
}
console.log(frequency(str))