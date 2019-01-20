/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Search{
    searchByKeyword(key, arrObj){
    
        var matchingItems = [];
    
        if(key !== "")
        {
            for(var i=0;i<arrObj.length; i++)
            {
                if(arrObj[i].keywords.indexOf(key) !== -1)
                {
                    matchingItems.push(arrObj[i]);
                }
            }
        }
        return matchingItems;
    }

    searchByTitle(key, arrObj){
    
        var matchingItem;

        for(var i=0;i<arrObj.length; i++)
        {
            if(arrObj[i].title.indexOf(key) !== -1)
            {
                matchingItem = (arrObj[i]);
                break;
            }
        }
        return matchingItem;
    }

}
