// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = newCat => {
    cats.push(newCat);
}

const destructivelyPrependCat = newCat => {
    cats.unshift(newCat);
}

const destructivelyRemoveLastCat = newCat => {
    newCat = cats.pop();
}

const destructivelyRemoveFirstCat = newCat => {
    newCat = cats.shift();
}

const appendCat = name => {
    const newCats = [...cats,name];
    return newCats;
}

const prependCat = name => {
    const newCats = [name,...cats];
    return newCats;
}

const removeLastCat = () => {
    const newCats = [...cats.slice(0,-1)];
    return newCats;
}

const removeFirstCat = () => {
    const newCats = [...cats.slice(1)];
    return newCats
}

