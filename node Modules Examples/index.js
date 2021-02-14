var rect = {
    perimiter: (x,y) => (2*(x+y)),
    area:  (x,y) => (x*y)
};

var solveRect = (l,b) =>{
    console.log("The solving rectange length is " + l +" and breadth is "+ b);
    if(l<=0 || b<=0)
        console.log("Length and Breadth of the rectangle should be greater than 0: l= " +l+ " b="+b)
    else{
        console.log("Area of the rectange is: "+ rect.area(l,b))
        console.log("Peimiter of the rectangle is: " + rect.perimiter(l,b))
    }
}


solveRect(3,4)
solveRect(5,6)
solveRect(0,4)
solveRect(-1,4)