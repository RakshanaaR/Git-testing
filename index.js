var rect = require('./rectangle');
function solveRect(l,b)
{
    console.log("solving for rectangle with l = "+l+"and b ="+b);
    if(l <= 0 || b <= 0)
    {
        console.log("Rect dimensions greater than zero");
    }
    else{
        console.log("Area = "+rect.area(l,b));
        console.log("Perimeter = "+rect.perimeter(l,b));
    }

}
solveRect(5,12);
solveRect(0,1);
solveRect(-2.-3);
