/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Declaring Global Variables:
var requestURL = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000";

var data;      // array of object, each contains title & body & keywords & icon

//Instances of classes:
var item = new Item();            
var search = new Search();        
var favourites = new Favourites();

window.onload = getData();

//Onclick event on search button fires up the runSearch function
$("#searchBt").click(function(){runSearch();});

//Hitting enter in the search field also activate runSearch function
$("#searchField").keypress(function(event){
    if(event.charCode === 13)
    {
        runSearch();
    }
});

//Hitting backspace in the search field clears the search results
$("#searchField").keyup(function(event){
    if(event.keyCode === 8)
    {
       clearContainer(".results-wrapper");
       $(".results-wrapper").css("margin-bottom","250px");
    }
});

//Icon onclick adds a row-item to favourities
$("div").on("click","i.fa-star", function(event){
     
     updateFavourites(event);
});


function runSearch(){
    
    clearContainer(".results-wrapper");
    var searchValue = $("#searchField").val();
    var searchResults = search.searchByKeyword(searchValue,data);
    item.displayItems(searchResults,".results-wrapper");
}

function updateFavourites(event){
    var icon = $(event.target); 
    
    var titleDiv = icon.closest("div");
    var row = titleDiv.parent();
    
    //Find 'clicked' object by title and change favourite-state and icon-color
    var match = search.searchByTitle(titleDiv[0].innerText,data);
    item.toggleState(match);
    item.changeColor(match);
    //Reload list of favourites
    clearContainer(".favourites");
    favourites.updateList(row.clone());
    favourites.displayList();
}

function getData(){
    $.getJSON(
        requestURL,
        function(jsonData){data = filterDataInfo(jsonData);}
    );   
}

function filterDataInfo(arrObj){
    //method filters array of objects geeting from Json file 
    //to leave only key-value pairs needed (title & body & keywords)+ creats an icon for each object  
    var data = [];

    for(var i=0;i<arrObj.length; i++)
    {
        var item = new Item(arrObj[i].title,arrObj[i].body,arrObj[i].keywords);
        data.push(item);
    }
    return data;

}

function clearContainer(selector){
        var results = $(selector);
        results.empty();
    }

