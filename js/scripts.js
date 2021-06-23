//Custom object to repesent my API

var apis = [ 
    { 
      appID: '02300XSS000ASss',
      userName : 'App',
    },
    { 
      appID: 'zz300XSS000ASss',
      userName : 'SHACK15 App',
    },
  ];  




// event handler to dynamically add new containers
document.querySelector('#insert').addEventListener('click', function(){
    
        $( "ul#list" ).append('<li class="col-md-6 mb-2" id="element2"><div class="card p-4"><h4>SHACK15 App</h4><p>App id: zz300XSS000ASss</p><a href="dashboard.html"><button type="button" class="btn btn-dark butt mt-4">Open</button></a></div></li>');
 
});