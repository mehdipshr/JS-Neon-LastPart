const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw(){
        console.log(`Circle with radius : ` + _radius.get(this));
    }
}

// module.exports = Circle; /* inro vase nod js estefade mikonim vali inja ham eshkali nadare */