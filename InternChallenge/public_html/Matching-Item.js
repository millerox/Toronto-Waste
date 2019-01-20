/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Item {
    
    constructor(title,body,keywords){
        this.title = title;
        this.body = this.decodeHTML(body);
        this.keywords = keywords;
        this.favourite = false;
        this.icon = $("<i>").addClass("fas fa-star");
        this.icon.css("color","lightgrey");
        this.icon.hover(function(){
            $(this).css({"background-color":"#eafaea","cursor":"pointer"});
            }, function(){
            $(this).css({"background-color":"white","cursor":"default"});
          });
        }
    
    decodeHTML(strBody){
        var body = $('<textarea />').html(strBody).text();
        body = $.parseHTML(body);
        return body;
    }
    
    toggleState(obj){
        var newState;
        if(obj.favourite === false)
        {
            obj.favourite = true;
        }
        else
        {
            obj.favourite = false;
        }
        return newState;
    }
    
    changeColor(obj){
        if(obj.favourite === false)
        {
            obj.icon.css("color","lightgrey");
        }
        else
        {
            obj.icon.css("color","green");
        }
    }
    
    
    //first parameter is array of objects to display, the second one is where to display ($section-selector) 
    displayItems(array,selector){
    
        var results = $(selector);
        var amoutOfRows = 0;
        
        for(var i=0; i<array.length; i++)
        {
            var row = $("<div>").addClass("row");
            
            results.append(row);
            
            var title = $("<div>").addClass("col-md-3");
            row.append(title);
            
            var body = $("<div>").addClass("col-md-9");
            row.append(body);
            
            title.append(array[i].icon);
            title.append(array[i].title);
 
            body.append(array[i].body);
            amoutOfRows++;
        }
        
        //Styling:
        if(amoutOfRows < 2 )
        {
            $(selector).css("margin-bottom", "200px");
        }
        else if(amoutOfRows > 4)
        {
            $(selector).css("margin-bottom", "10px");
        }
        else
        {
            $(selector).css("margin-bottom", "70px");
        }     
    }
}
