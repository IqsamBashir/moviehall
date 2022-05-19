(function () {
    let movieContainer = document.querySelector('.movie1');
    


    
    // Create an XMLHttp Request Object
    let xhr = new XMLHttpRequest();


    // Create the Request
    xhr.open('GET', "http://api.themoviedb.org/3/movie/popular?api_key=90787843a200cfbfd55b14b39270f6a1", true);



    // Send the request

    xhr.send();


    

    //when data loads returns data in text
    xhr.addEventListener('load', function () {
       

        // console.log(typeof(xhr.responseText));

        //converting text into json object
        let data = JSON.parse(xhr.responseText);

        let html = '';
        console.log(data);

        // html += `<h1> page no: ${data['page']}</h1>`;
        //looping through json data


        for (var i = 0; i < data['results'].length; i++) {
            html += `
                <div class="card" >
                    <div style='width:100%'>
                    <div style='width:30%'>
                   
                        <img class="xyz" src="https://image.tmdb.org/t/p/w500/${data['results'][i]['poster_path']}" alt="Avatar" data-id='${data['results'][i]['id']}'>
                    </div>

                    <div class="container">
                            <table width='100%'>
                                 <tr>
                                    
                                    <td>${data['results'][i]['title']}</td>
                                 </tr>
                                
                              
                            
                                 <tr>
                                 
                                     <td>${data['results'][i]['vote_average']}</td>
                                 </tr>
                                 <tr>
                                    
                                     <td>${data['results'][i]['release_date']}</td>
                                 </tr>
                                 <tr>
                                   
                                     <td>${data['results'][i]['vote_count']}</td>
                                 </tr>
                             </table>
                         </div>


                    </div>
                </div>
    
         
                
                `;






            }
            
        
                

        movieContainer.insertAdjacentHTML('beforeend', html)

        console.log(data);
      
    });



    //adding click event listener for img to send it to the next page for trailers
    document.addEventListener('click',function(e){
        
        // the below line is a property and it says if it contains the class name then get the data id and move to the next page with that id
        if(e.target && e.target.classList.contains('xyz')){
              //do something
                
              let id = e.target.getAttribute('data-id');
              window.location.href = "nextpage.html?id="+id;
         }
     });

   //
   //




})();

