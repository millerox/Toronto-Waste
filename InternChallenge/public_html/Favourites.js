/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Favourites{
    constructor(){
        this.list = [];
    }
    
    updateList(tag)
    {
        var found = false;
        for(var i=0; i<this.list.length; i++)
        {
            // delete an item, if it already exists(sorting by title)
            if(this.list[i][0].innerText === tag[0].innerText) 
            {
                this.list.splice(i,1);
                found = true;
                break;
            }
        }
        if(found === false)                              // add a NEW item
        {
            this.list.push(tag);
        } 
    }
    
    displayList(){
        var fav = $(".favourites");
        for(var i=0; i<this.list.length; i++)
        {
            var row = this.list[i];
            fav.append(row);
        }
    }
}