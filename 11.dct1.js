const Person={
    name:'kanya',
    age:22,
    scores:[10,20,30],
    total()
    {
        let sum=0
        this.scores.forEach(function(score){
            console.log(`${this.name} scrores ${score}`)
        }.bind(this))
        
    }
    

}
console.log(Person.total())


