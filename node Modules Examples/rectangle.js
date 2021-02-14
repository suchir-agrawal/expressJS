module.exports = (x,y,callback) => {
    if(x<=0 || y<=0){

        setTimeout(() => {
                callback(new Error("ERROR: Enter valid dimensions which are greater than 0: l= " 
                +x + " b= "+y), null )
        }, 2000)
        
    }
    else{
        setTimeout(() => {
            callback(null,{
                area: () => x*y,
                perimeter: () => 2*(x+y)
            })
        },2000)
        
    }
}