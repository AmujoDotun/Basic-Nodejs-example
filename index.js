var react= require('./reactangle');
// const reactangle = require('./reactangle');

function solvedReactangle(l,b)
{




    console.log("This is calculation of area and perimenter of a reactangle with the value"+ l +"and " + b);
    
    react(l,b,(err, reactangle) =>{
        if(err)
        {
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("The area of rectangle = " + reactangle.area(l,b));
            console.log("The perimeter of a rectangle = " + reactangle.perimeter(l,b));
        }
    });
    console.log("this statement is before the output of the result");
}

solvedReactangle(3,5);
solvedReactangle(5,10);
solvedReactangle(0,2);
solvedReactangle(-5, 0);