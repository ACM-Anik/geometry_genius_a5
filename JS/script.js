// Another Page(blogs):
document.getElementById('blogs').addEventListener('click', function(){
    window.location.href = 'blog.html';
})


let serial = 0;
// Triangle Card:
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleTitle = getNameOfElementById('triangle-title');
    const triangleB = getElementValueById('triangle-b');
    const triangleH = getElementValueById('triangle-h');
    const triangleMultiply = (0.5 * triangleB * triangleH).toFixed(2);

    if(isNaN(triangleB) || isNaN(triangleH)){
        alert('Please provide numbers only!');
        return;
    }
    else if(triangleB === "" || triangleH ==="" || triangleB < 0 || triangleH < 0){
        alert('Please enter any valid (positive) number.')
    }
    serial += 1;
    displayData(triangleTitle, triangleMultiply);

});


// Rectangle Card:
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleTitle = getNameOfElementById('rectangle-title');
    const rectangleW = getElementValueById('rectangle-w');
    const rectangleI = getElementValueById('rectangle-i');
    rectangleMultiply = rectangleW * rectangleI;

    if(isNaN(rectangleW) || isNaN(rectangleI)){
        alert('Please provide numbers only!');
        return;
    }
    else if(rectangleW === "" || rectangleI ==="" || rectangleW < 0 || rectangleI < 0){
        alert('Please enter any valid (positive) number.')
    }
    serial += 1;
    displayData(rectangleTitle, rectangleMultiply);
});


// Parallelogram Card:
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramTitle = getNameOfElementById('parallelogram-title');
    const parallelogramB = getElementValueById('parallelogram-b');
    const parallelogramH = getElementValueById('parallelogram-h');
    parallelogramMultiply = parallelogramB * parallelogramH;

    if(isNaN(parallelogramB) || isNaN(parallelogramH)){
        alert('Please provide numbers only!');
        return;
    }
    else if(parallelogramB === "" || parallelogramH ==="" || parallelogramB < 0 || parallelogramH < 0){
        alert('Please enter any valid (positive) number.')
    }
    serial += 1;
    displayData(parallelogramTitle, parallelogramMultiply);
});


// Rhombus card:
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusTitle = getNameOfElementById('rhombus-title');
    const rhombusD1 = getElementValueById('rhombus-d1');
    const rhombusD2 = getElementValueById('rhombus-d2');
    rhombusMultiply = (0.5 * rhombusD1 * rhombusD2).toFixed(2);

    if(isNaN(rhombusD1) || isNaN(rhombusD2)){
        alert('Please provide numbers only!');
        return;
    }
    else if(rhombusD1 === "" || rhombusD2 ==="" || rhombusD1 < 0 || rhombusD2 < 0){
        alert('Please enter any valid (positive) number.')
    }
    serial += 1;
    
    displayData(rhombusTitle, rhombusMultiply);
});


// Pentagon card:
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonTitle = getNameOfElementById('pentagon-title');
    const pentagonP = getElementValueById('pentagon-p');
    const pentagonB = getElementValueById('pentagon-b');
    pentagonMultiply = (0.5 * pentagonP * pentagonB).toFixed(2);

    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert('Please provide numbers only!');
        return;
    }
    else if(pentagonP === "" || pentagonB ==="" || pentagonP < 0 || pentagonB < 0){
        alert('Please enter any valid (positive) number.')
    }
    serial += 1; 
    displayData(pentagonTitle, pentagonMultiply);
});


// Ellipse card:
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseTitle = getNameOfElementById('ellipse-title');
    const ellipseW = getElementValueById('ellipse-w');
    const ellipseI = getElementValueById('ellipse-i');
    ellipseMultiply = (3.14 * ellipseW * ellipseI).toFixed(2);

    if(isNaN(ellipseW) || isNaN(ellipseI)){
        alert('Please provide numbers only!');
        return;
    }
    else if(ellipseW === "" || ellipseI ==="" || ellipseW < 0 || ellipseI < 0){
        alert('Please enter any valid (positive) number.')
    }
    serial += 1;
    displayData(ellipseTitle, ellipseMultiply);
});


// Common Function:--
// To find the elements by ID:
function getElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementString = elementField.value;
    const elementValue = parseFloat(elementString);
    elementField.value = "";
    return elementValue;
}

// To find the name:
function getNameOfElementById(nameId){
    const name = document.getElementById(nameId).innerText;
    return name; 
}


// To create a dynamic table to display data:
function displayData(title ,multiply){
    const dataContainer = document.getElementById('data-area');
    const tr = document.createElement('tr');
    tr.innerHTML=`
        <th class="p-0 my-2">${serial}. </th>
        <td class="p-0 my-2"> ${title}</td>
        <td class="p-0 my-2">${multiply}cm<sup>2</sup></td>
        <button class="text-white bg-sky-500 hover:bg-sky-600 px-1 py-1 font-semibold rounded border border-0 my-2">Covert to m<sup>2</sup></button>
        <button class="text-red-500 hover:bg-gray-100 font-bold px-3 py-1 my-2 ml-4 ">X</button>
    `;
    dataContainer.appendChild(tr);
}


