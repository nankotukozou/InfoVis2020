// Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}


//Add method
Vec3.prototype.add =  function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

function compareFunc(a, b) {
    return a < b;
}


//Sum method
Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min =  function()
{
    var a =[x,y,z];
    a.sort(compareFunc);
    
    return a[2];
}

Vec3.prototype.mid =  function()
{
    var a =[x,y,z];
    a.sort(compareFunc);
    
    return a[1];
}

Vec3.prototype.max =  function()
{
    var a =[x,y,z];
    a.sort(compareFunc);
    
    return a[0];
}
