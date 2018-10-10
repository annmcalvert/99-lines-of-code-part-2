//adds button
let btn = document.createElement('button');
let btnText = document.createTextNode('Sing!');
btn.appendChild(btnText);
document.body.appendChild(btn);

//button event listener
btn.addEventListener('click', function () {
    let friends = ["Dennis", "Steve", "Anna", "Ashley", "Melissa"];
    let total = friends.length;

    //creates divs for each friend with header
    for (let i = 0; i < total; ++i) {
        let div = document.createElement('div');
        div.setAttribute('class', 'friend');
        let nameHeader = document.createElement('h3');
        let nameHeaderText = document.createTextNode(friends[i]);
        nameHeader.appendChild(nameHeaderText);
        div.appendChild(nameHeader);
        document.body.appendChild(div);

        //loop that does lines 99-3 
        for (let c = 99; c > 2; --c) {
            let songLyrics = document.createElement('p');
            let songLyricsText = document.createTextNode(c + "\xa0" + "lines of code in the file, " + c + "\xa0" + "lines of code; " + (friends[i]) + " strikes one out, clears it all out, " + (c - 1) + " lines of code in the file.");
            songLyrics.appendChild(songLyricsText);
            div.appendChild(songLyrics);
        };

        //second to last line
        let lastLines1 = document.createElement('p');
        let lastLines1Text = document.createTextNode("2 lines of code in the file, 2 lines of code; " + (friends[i]) + " strikes one out, clears it all out, 1 line of code in the file.");
        lastLines1.appendChild(lastLines1Text);
        div.appendChild(lastLines1);

        //last line
        let lastLines2 = document.createElement('p');
        let lastLines2Text = document.createTextNode("1 line of code in the file, 1 line of code; " + (friends[i]) + " strikes one out, clears it all out, no more lines of code in the file.");
        lastLines2.appendChild(lastLines2Text);
        div.appendChild(lastLines2);
    }
});

