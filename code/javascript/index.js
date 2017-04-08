// Handle display of sidebar on small screen
document.getElementById("header").addEventListener("click", function() 
{
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display == "none") 
    {
        sidebar.style.display = "block" // Display sidebar on click
    }
    else 
    {
        sidebar.style.display = "none" // Hide sidebar on click
    }
});

window.onload = function() 
{
    // Load the available languages in the dropdown menu
    var obj = supported_language;
    var select = document.getElementById("language");

    for (var i=0; i < obj.lang.length; i++)
    {
      var option = document.createElement("option");
      option.id = obj.lang[i].code;
      option.value = obj.lang[i].code;
      option.innerHTML = obj.lang[i].language;
      select.appendChild(option);
    }
};