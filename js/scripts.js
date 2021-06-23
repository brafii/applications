
// event handler to dynamically add new containers
document.querySelector('#insert').addEventListener('click', function(){

    $( "ul#list" ).append( "<li class='col-md-6 mb-2' id='element2'><div class='card p-4'><h4>App</h4><p>App id: 1234567890</p><button type='button' class='btn btn-dark butt mt-4'>Open</button></div></li>" );
 
});