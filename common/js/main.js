function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

$(document).ready(function(){
    $(window).keyup(function(e){
      if(e.keyCode == 44){
        copyToClipboard('test');        
        $("body").hide();
        
        // Show the body again after 10 seconds (10000 milliseconds)
        setTimeout(function() {
          $("body").show();
        }, 10000);
      };
    });
});