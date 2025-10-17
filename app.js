
let colours =  ["pink" , "red" , "green" , "yellow" , "orange" , "brown" , "darkblue"]


function changingBackgroungColour (){
    var anyNumber =  Math.floor(Math.random() * colours.length)
    document.body.style.backgroundColor = colours[anyNumber]

    document.getElementsByTagName("span")[0].innerText = colours[anyNumber]
}

var design = document.getElementsByTagName("button")[0]
design.style.backgroundColor = "black"
design.style.color = "white"