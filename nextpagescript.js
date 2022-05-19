
(function () {
    let trailerContainer = document.querySelector('#trailerContainer');
    
  
    

    
    // Create an XMLHttp Request Object
    let xhr = new XMLHttpRequest();

    // object parameter gets createdand ensures if the url contains the id or not
    let params = new URLSearchParams(location.search);
    let id  = params.get('id');
    if (!id)
    {
        window.location.href = "ajaxwithapi.html";
    }


    xhr.open('GET', "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=90787843a200cfbfd55b14b39270f6a1", true);



    // Send the request

    xhr.send();


    

    //when data loads returns data in text
    
    xhr.addEventListener('load', function () {
        let data = JSON.parse(xhr.responseText);
        // console.log("2nd data");
        // console.log(data);
        let html = '';
        for (var i = 0; i < data['results'].length; i++) {
            html += `
                <div class="card" >
                <iframe width="200PX"  height="145" src="https://www.youtube.com/embed/${data['results'][i]['key']}">
                </iframe>
                    
                </div>
    
         
                
                `;






            }
            
        
                

        trailerContainer.insertAdjacentHTML('beforeend', html)

        console.log(data);
      
      
    });
   

   


        
        
        
        
          
            
       
    

    

   






})();

