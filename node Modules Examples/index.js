const rectangle = require('./rectangle');
var rect = require('./rectangle')

var solveRect = (l,b) =>{
    console.log("The solving rectange length is " + l +" and breadth is "+ b);
    rect(l,b,(err,rectangle) => {
        if(err){
            console.log(err.message)
        }
        else{
            console.log("The area of the rectangle with length= " +l +" and breadth= "
                     +b +" is: " +rectangle.area() )
            console.log("The perimeter of the rectangle with length= " +l +" and breadth= "
                     +b +" is: " +rectangle.perimeter() )
        }
    })
}


solveRect(3,4)
solveRect(5,6)
solveRect(0,4)
solveRect(-1,4)