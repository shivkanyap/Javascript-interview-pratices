//str='make in india
//output='#MakeInIndia

function hashTagGenerator(str){
    const words=str.split(' ')
   // console.log(words)
    let output='#'
    for(let i=0;i<words.length;i++){
        output=output +words[i].charAt(0).toUpperCase()+words[i].slice(1)
        //console.log(words[i])
    }
    return output
}
console.log(hashTagGenerator('make in india'))
