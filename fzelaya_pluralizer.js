// •	 Write a function named pluralize that:
// ◦ takes 2 arguments, a noun and a number.
// ◦ returns the number and pluralized form, like "5 cats" or "1
// dog".
// 	 •	 Call that function for a few different scores and log the result to make
// sure it works.
// 	 •	 Bonus: Make it handle a few collective nouns like "sheep" and
// "geese".

function pluralize(noun, num) {
    if(num > 1 && !noun.includes('ee')){
        return `${num} ${noun}s`;
    }else{
        return `${num} ${noun}`;
    }
}

console.log(pluralize('cat',5));