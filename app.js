
let colours =  ["pink" , "red" , "green" , "yellow" , "orange" , "brown" , "darkblue" , "purple" , "lightblue" , "grey"]


function changingBackgroungColour (){
    var anyNumber =  Math.floor(Math.random() * colours.length)
    document.body.style.backgroundColor = colours[anyNumber]

    document.getElementsByTagName("span")[0].innerText = colours[anyNumber]
}

