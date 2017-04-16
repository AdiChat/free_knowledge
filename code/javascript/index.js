window.onload = function() 
{
    fill_supported_languages();
};

// Load the available languages in the dropdown menu
function fill_supported_languages() 
{
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
}

function find_free_content()
{
    GetFreeContent(document.getElementById("search-title").value, document.getElementById('language').value);
    GetSuggestedTopics(document.getElementById("search-title").value, document.getElementById('language').value);
}

function GetSuggestedTopics(query, lang) 
{
    url = "https://api.duckduckgo.com/?q="+query+"&format=json"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () 
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            var result = JSON.parse(xmlHttp.responseText);
            result = result.RelatedTopics;
            console.log(result[0]);
            var arrayLength = result.length;
            var datarelated = '<h2> Related Topics for further knowledge </h2><br><ul>';
            for (var i = 0; i < arrayLength; i++) 
            {
                datarelated = datarelated + '<li>'+result[i].Result +'</li>'+ '<br>';
            }
            datarelated = datarelated + '</ul>';
            if (1==1) 
            {
                document.getElementById('recommended_links').innerHTML = datarelated;
            }
            else 
            {
                document.getElementById('recommended_links').innerHTML = "We could not find any free information. 😢";
            }
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function GetFreeContent(query, lang) 
{
    // Convert titles not available for all languages
    url = "https://" + lang + ".wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=" + query;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () 
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            var result = JSON.parse(xmlHttp.responseText);
            result = result.query.pages;
            var pageid = Object.keys(result)[0];
            console.log(result[pageid]);
            if (pageid != -1) 
            {
                document.getElementById('content').innerHTML = '<h2><u>' + result[pageid].title + '</u></h2>' + result[pageid].extract;
            }
            else 
            {
                document.getElementById('content').innerHTML = "We could not find any free information. 😢";
            }
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

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