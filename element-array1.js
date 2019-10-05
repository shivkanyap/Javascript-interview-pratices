var a=[19,5,6,8]
function removeElement(a,b)
{
    const output=a.filter(function(element){
        return element!=b
    })
    
    return output
}
 console.log(removeElement(a,5))

// //.log(a.indexOf(6))

//onsole.log(a.splice(1,1))