$(document).ready(function(){

var url = "https://randomuser.me/api/";
var p ="";
radioValue = $("input[name='gender']:checked").val();
radioAmount = $("input[name='amount']:checked").val();
selectedNationality = $('#nationality :selected').text();
    
var loadMore;

//Run automatically upon load
fetch(url)
        .then((response) => response.json())
        .then(function(data){
           url = "https://randomuser.me/api/?results="+radioAmount+"&nat="+selectedNationality+"&gender="+radioValue;
           fetchInformation(url);
})

});



$("input[type='radio']").click(function(){
        radioValue = $("input[name='gender']:checked").val();
        radioAmount = $("input[name='amount']:checked").val();
        selectedNationality = $('#nationality :selected').text();
        $("#result").empty();
        url = "https://randomuser.me/api/?results="+radioAmount+"&gender="+radioValue+"&nat=" + selectedNationality;
        if(radioValue){
            fetchInformation(url);
        }
    });


$('#nationality').on('change', function() {
        var p = "";
        $("#result").empty();
        selectedNationality = $('#nationality :selected').text();
        url = "https://randomuser.me/api/?results="+radioAmount+"&gender="+radioValue+"&nat=" + selectedNationality;
        fetchInformation(url);
    });


$('#amount').on('change', function() {
        var p = "";
        $("#result").empty();
        selectedAmount = $('#amount :selected').text();
        url = "https://randomuser.me/api/?results="+radioValueAmount+"&gender="+radioValue+"&nat=" + selectedNationality;
        fetchInformation(url);
    });




function fetchInformation(url){
        fetch(url)
        .then((response) => response.json())
        .then(function(data){


           $(".container").empty();

           data.results.forEach(person => {

               p = `<div class="well">
               <img src="${person.picture.medium}" class="img-rounded" alt="Cinque Terre">
               <span style="margin-left:25px;">${person.name.title}  ${person.name.first} ${person.name.last}</span>
               <span>(${person.nat})</span>
               <span style="margin-left:350px;">Email: ${person.email}</span>
               </div>`;
               console.log(p);
               $(".container").append(p);
               
           }); 

          loadMore = '<button id="loadmore" class="btn btn-primary">Load More</button>';

          $("#result").append(loadMore);

          $('#loadmore').on('click', function() {
            fetchInformation(url);
            $(this).remove();
          });
        
           
        })
    }
