var checkBox = document.querySelector(".toggle-btn");

checkBox.addEventListener('click', function(event) {

  var annualyPrice = document.querySelectorAll(".Annualy");
  // var monthlyPrice = document.querySelectorAll(".monthly");


  for( var i=0; i<3; i++){

      if(event.target.checked){
      // monthlyPrice[i].style.display = "block";
      annualyPrice[0]. innerHTML= "&dollar;19.99";
      annualyPrice[1]. innerHTML= "&dollar;24.99";
      annualyPrice[2]. innerHTML= "&dollar;39.99";
    }

    else{
      annualyPrice[0]. innerHTML= "&dollar;199.99";
      annualyPrice[1]. innerHTML= "&dollar;249.99";
      annualyPrice[2]. innerHTML= "&dollar;399.99";
    }
  }
});
