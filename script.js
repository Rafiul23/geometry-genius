document.getElementById('btn-triangle').addEventListener('click', function(){
    const b = getInputValueById('base');
    const h = getInputValueById('height');
    const area = triangleArea(b, h);
    setValueById('result-triangle', area);
})

document.getElementById('btn-rectangle').addEventListener('click', function(){
    const w = getInputValueById('width');
    const l = getInputValueById('length');
    const area = rectangleArea(w, l);
    setValueById('result-rectangle', area);
})

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const b = getInputValueById('p-base');
    const h = getInputValueById('p-height');
    const area = parallelogramArea(b, h);
    setValueById('result-parallelogram', area);
})