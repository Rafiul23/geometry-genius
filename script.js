document.getElementById('btn-triangle').addEventListener('click', function(){
    const b = getInputValueById('base');
    const h = getInputValueById('height');
    const area = triangleArea(b, h);
    setValueById('result-triangle', area);
    const box = document.getElementById('box');
    const li = document.createElement('li');
    li.innerHTML = 'Triangle Area: ' + area + ' cm' + `<sup>2</sup>`;
    box.appendChild(li);
})

document.getElementById('btn-rectangle').addEventListener('click', function(){
    const w = getInputValueById('width');
    const l = getInputValueById('length');
    const area = rectangleArea(w, l);
    setValueById('result-rectangle', area);
    const box = document.getElementById('box');
    const li = document.createElement('li');
    li.innerHTML = 'Recangle Area: ' + area + ' cm' + `<sup>2</sup>`;
    box.appendChild(li);
})

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const b = getInputValueById('p-base');
    const h = getInputValueById('p-height');
    const area = parallelogramArea(b, h);
    setValueById('result-parallelogram', area);
    const box = document.getElementById('box');
    const li = document.createElement('li');
    li.innerHTML = 'Parallelogram Area: ' + area + ' cm' + `<sup>2</sup>`;
    box.appendChild(li);
})

document.getElementById('btn-rhombus').addEventListener('click', function(){
    const d1 = getInputValueById('d1');
    const d2 = getInputValueById('d2');
    const area = rhombusArea(d1, d2);
    setValueById('result-rhombus', area);
    const box = document.getElementById('box');
    const li = document.createElement('li');
    li.innerHTML = 'Rhombus Area: ' + area + ' cm' + `<sup>2</sup>`;
    box.appendChild(li);
})

document.getElementById('btn-pentagon').addEventListener('click', function(){
    const p = getInputValueById('perimeter');
    const a = getInputValueById('apothem');
    const area = pentagonArea(p, a);
    setValueById('result-pentagon', area);
    const box = document.getElementById('box');
    const li = document.createElement('li');
    li.innerHTML = 'Pentagon Area: ' + area + ' cm' + `<sup>2</sup>`;
    box.appendChild(li);
})

document.getElementById('btn-ellipse').addEventListener('click', function(){
    const a = getInputValueById('major-axis');
    const b = getInputValueById('minor-axis');
    const area = ellipseArea(a, b);
    setValueById('result-ellipse', area);
    const box = document.getElementById('box');
    const li = document.createElement('li');
    li.innerHTML = 'Ellipse Area: ' + area + ' cm' + `<sup>2</sup>`;
    box.appendChild(li);
})

