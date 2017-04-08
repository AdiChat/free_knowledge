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