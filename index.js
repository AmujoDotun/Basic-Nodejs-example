var react={
    perimeter: (x,y)=>(2*(x*y)),
    area: (x,y) => (x*y)
}

function solvedReactangle(l,b)
{
    console.log("This is calculation of area and perimenter of a reactangle with the value"+ l +"and " + b);
    
    // make sure the values are not less than zero
    if(l<=0 || b<=0)
    {
        console.log("Can't compute values less than zero");
    }
    else{
        console.log("The area of rectangle = " + react.area(l,b));
        console.log("The perimeter of a rectangle = " + react.perimeter(l,b));
    }
}

solvedReactangle(3,5);
solvedReactangle(5,10);
solvedReactangle(0,2);
solvedReactangle(-5, 0);