  const date =
   document.getElementById('date')
  date.innerHTML = new Date().toDateString ()

  date.style.color ='grey'

  function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}