function getInputValueById(id){
    const el = document.getElementById(id);
    const valueString = el.value;
    const inputValue = parseFloat(valueString);
    return inputValue;
}

function setValueById(id, value){
    const el = document.getElementById(id);
    el.innerText = value;
}

function triangleArea(base, height){
    const b = base;
    const h = height;
    const area = 0.5 * b * h;
    const Area = area.toFixed(2);
    return Area;
}

function rectangleArea(width, length){
    const w = width;
    const l = length;
    const area = w * l;
    const Area = area.toFixed(2);
    return Area;
}

function parallelogramArea(base, height){
    const b = base;
    const h = height;
    const area = b * h;
    const Area = area.toFixed(2);
    return Area;
}

function rhombusArea(diagonal1, diagonal2){
    const d1 = diagonal1;
    const d2 = diagonal2;
    const area = 0.5 * d1 * d2;
    const Area = area.toFixed(2);
    return Area;
}

function pentagonArea(perimeter, apothem){
    const p = perimeter;
    const a = apothem;
    const area = 0.5 * p * a;
    const Area = area.toFixed(2);
    return Area;
}

function ellipseArea(majorAxis, minorAxis){
    const a = majorAxis;
    const b = minorAxis;
    const pi = Math.PI;
    const area = pi * a * b;
    const Area = area.toFixed(2);
    return Area;
}