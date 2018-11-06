function Function() {
    alert("Esto es javascript!");
}





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function tetxfunction(){texfield.secureTextEntry = true;}


function showfunction(x) {
    
    x.style.visibility = "hidden";
}
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}
          
    var hiddenThingie; 
  
function focusFunction(x) {
    hiddenThingie.style.visibility="visible";
}
function blurFunction(x) {

    hiddenThingie.style.visibility="hidden";
}
  
window.onload = function() {
    hiddenThingie = document.getElementById("myUL");
    hiddenThingie.style.visibility="hidden";
}