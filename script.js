
function test_prime(n){
    for(let i = 2; i < n; i++){
        if (n % i === 0){
            // console.log('непростое число');
            return false
        }else{
            // console.log('простое число');
            return true
        }
    
    }
    return n > 1
}

console.log(test_prime(53))
