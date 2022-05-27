src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"

function search(){
    $.ajax({
        method: "GET",
        key : "7651897dc91d7f83f045b88ea6040767",
        url: `http://openapi.11st.co.kr/openapi/OpenApiService.tmall?key=${key}&apiCode= ProductSearch&keyword =[keyword]`,
        data: { zipcode: 97201} 
    })
        .done(function( result ) {
          $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
        });
}

  