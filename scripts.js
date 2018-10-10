//adds button
let btn = document.createElement('button');
let btnText = document.createTextNode('Sing!');
btn.appendChild(btnText);
document.body.appendChild(btn);


//button event listener
btn.addEventListener('click', function () {
    let friends = ["Dennis", "Steve", "Anna", "Ashley", "Melissa"];
    let total = friends.length;
     for (let i = 0; i < total; ++i) {
        for (let c = 99; c > 2; --c) {
            console.log(c + "\xa0" + "lines of code in the file, " + c + "\xa0" + "lines of code; " + (friends[i]) + " strikes one out, clears it all out, " + (c - 1) + " lines of code in the file.");
        };
        console.log("2 lines of code in the file, 2 lines of code; " + (friends[i]) + " strikes one out, clears it all out, 1 line of code in the file.");
        console.log("1 line of code in the file, 1 line of code; " + (friends[i]) + " strikes one out, clears it all out, no more lines of code in the file.");
    }
});




