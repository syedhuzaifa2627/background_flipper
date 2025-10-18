
let colours =  ["pink" , "red" , "darkgreen" , "yellow" , "orange" , "brown" , "darkblue" , "purple" , "lightblue" , "lightslategray" ,
    "darkslateblue" , "mediumblue" , "mediumturquoise" , "lightskyblue" , "darkred" , "coral" , "deeppink" , "maroon" , "aliceblue" , 
    "lavenderblush" , "darkseagreen" , "burlywood" , "mediumslateblue" , "lawngreen" , "aquamarine" , "darkvoilet" , "darkturquoise"
 
]


function changingBackgroungColour (){
    var anyNumber =  Math.floor(Math.random() * colours.length)
    document.body.style.backgroundColor = colours[anyNumber]

    document.getElementsByTagName("span")[0].innerText = colours[anyNumber]
}

