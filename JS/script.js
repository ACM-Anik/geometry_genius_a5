console.log('everything ok');
document.getElementById('blogs').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleBString = document.getElementById('triangle-b').value;
    const triangleB = parseFloat(triangleBString);
    const triangleHString = document.getElementById('triangle-h').value;
    const triangleH = parseFloat(triangleHString);

    const multiply = triangleB * triangleH;
    const textAreaString = document.getElementById('text-area').value ;
    textAreaString.value = multiply;
    // displayResult(multiply);

})
document.getElementById('btn-triangle').addEventListener('click', function(){

})
document.getElementById('btn-triangle').addEventListener('click', function(){

})
document.getElementById('btn-triangle').addEventListener('click', function(){

})
document.getElementById('btn-triangle').addEventListener('click', function(){

})
document.getElementById('btn-triangle').addEventListener('click', function(){

})


// Common Function:

// function displayResult(result){
//     const textAreaString = document.getElementById('text-area').value ;
//     const textArea = parseFloat(textAreaString);
//     textArea.value = result;
// }
