function makeCounter(n){
    let count = n;

    return{
        increase: function(){
            count += 1
        },
        decrease: function(){
            count -= 1
        },
        getCount: function(){
            return count
        }
    }
}

let counter = makeCounter(7)

console.log(`The count is:`, counter.getCount())
counter.increase()
console.log(`The count is:`, counter.getCount())
counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()
console.log(`The count is:`, counter.getCount())

counter.count = 3

console.log(`The count is:`, counter.getCount())