module.exports = function reverse (num) {
    num = Math.abs(num);
        num = String(num);
    
       num = num.split("").reverse().join("");
    return num = Number(num);
    }
