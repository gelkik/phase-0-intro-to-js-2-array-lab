// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const cat = [...cats,name];
    return cat;
}

function prependCat(name){
    const cat = [name,...cats];
    return cat;
}

function removeLastCat(){
    const cat = cats.slice(0,-1);
    return cat
}

function removeFirstCat(){
    const cat = cats.slice(1);
    return cat
}




