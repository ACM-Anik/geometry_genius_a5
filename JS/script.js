// Another Page(blogs):
document.getElementById('blogs').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

let serial = 0;
// Triangle Card:
document.getElementById('btn-triangle').addEventListener('click', function(){
    // const triangleBString = document.getElementById('').value;
    // const triangleB = parseFloat(triangleBString);
    // const triangleHString = document.getElementById('triangle-h').value;
    // const triangleH = parseFloat(triangleHString);

    const triangleB = getElementValueById('triangle-b');
    const triangleH = getElementValueById('triangle-h');

    const triangleMultiply = 0.5 * triangleB * triangleH;
    serial += 1;
    console.log(triangleMultiply);
    displayData(triangleMultiply);

});

// Rectangle Card:
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    const rectangleW = getElementValueById('rectangle-w');
    const rectangleI = getElementValueById('rectangle-i');
    
    rectangleMultiply = rectangleW * rectangleI;
    displayData(rectangleMultiply);
});

// Parallelogram Card:
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramB = getElementValueById('parallelogram-b');
    const parallelogramH = getElementValueById('parallelogram-h');
    
    serial += 1;
    parallelogramMultiply = parallelogramB * parallelogramH;
    displayData(parallelogramMultiply);
});


// Rhombus card:
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusD1 = getElementValueById('rhombus-d1');
    const rhombusD2 = getElementValueById('rhombus-d2');
    
    serial += 1;
    rhombusMultiply = 0.5 * rhombusD1 * rhombusD2;
    displayData(rhombusMultiply);
});


// Pentagon card:
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonP = getElementValueById('pentagon-p');
    const pentagonB = getElementValueById('pentagon-b');
    
    serial += 1;
    pentagonMultiply = 0.5 * pentagonP * pentagonB;
    displayData(pentagonMultiply);
});


// Ellipse card:
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseW = getElementValueById('ellipse-w');
    const ellipseI = getElementValueById('ellipse-i');
    
    serial += 1;
    ellipseMultiply = (3.14 * ellipseW * ellipseI).toFixed(2);
    displayData(ellipseMultiply);
});


// Common Function:
function getElementValueById(elementId){
    const elementString = document.getElementById(elementId).value;
    const elementValue = parseFloat(elementString);
    return elementValue;
}


// To create a dynamic table to display data:
function displayData(triangleMultiply){
    const dataContainer = document.getElementById('data-area');
    const tr = document.createElement('tr');
    tr.innerHTML=`
        <th class="py-0 my-2">${serial}</th>
        <td class="py-0 my-2">${2}</td>
        <td class="py-0 my-2">${triangleMultiply}</td>
        <button class="text-white bg-sky-500 hover:bg-sky-600 px-4 py-1 font-semibold rounded border border-0 my-2">Covert to m<sup>2</sup></button>
    `;
    dataContainer.appendChild(tr);
}

// function displayResult(result){
//     const textAreaString = document.getElementById('text-area').value ;
//     const textArea = parseFloat(textAreaString);
//     textArea.value = result;
// }
