$(document).ready(function(){
    $("form").submit(function(){
  var input1 = parseInt($("#num1").val());
  var input2 = parseInt($("#num2").val());
      
  if (input1 > input2) {
        alert("Error: Count to # must be greater than count by #!");
    event.preventDefault();
      }
      else {
      function countBy(maxNum,multiple) {    
      for (var i= multiple; i <= maxNum; i= i + multiple){
      $("#output").append(i + " ");
        
      } 
      }
      } 
      countBy(input2, input1);
      event.preventDefault();
    });
  });