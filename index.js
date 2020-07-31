var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};
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
solveRect(3,4);
solveRect(0,1);
solveRect(-2.-3);
