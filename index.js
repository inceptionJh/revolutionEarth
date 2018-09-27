window.onload = function() {
    function Planet(name, dist) {
        this.name = name;
        this.dist = dist;
        this.angle = 0;
    }
    Planet.prototype.move = function(ANGLE) {
        var x, y;
    
        this.angle = this.angle%360 + ANGLE;
        this.planet = document.getElementById(this.name);
    
        x = `${50 + this.dist*Math.cos(this.angle)}%`;
        y = `${50 - this.dist*Math.sin(this.angle)}%`;
        this.planet.style.left=x;
        this.planet.style.top=y;
        console.log(`x : ${x}\ny : ${y}`);
    }
    
    var Earth = new Planet('earth', 150);
    var Moon = new Planet('moon', 100);
    
    var planetArr = [Earth, Moon];
    setInterval(function() {
        for(let i=0; i<planetArr.length; i++) {
            let ANGLE = 0.05*(i+1);
            planetArr[i].move(ANGLE);
        }
    }, 1000/30);    
}

