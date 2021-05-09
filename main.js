const prompt = require('prompt-sync')();

function view(counter){
    return counter
}

function update(msg,counter){
    if (msg ==="+")
        counter = counter +1;
    if (msg ==="-")
        counter = counter -1
    return counter
}
    
function app(counter){
    console.clear()
    console.log("counter:",view(counter));
    console.log("(+)   (-)");
    console.log("(q) for quit");
    let action = prompt('What would you do?: ');
    if (action ==="q")
        console.log();
    else{
        counter = update(action,counter);
        app(counter);
    }

}


app(0)