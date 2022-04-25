

const fs = require('fs')
{
    class ModularToDo{
        constructor(path = 'myToDoData/toDoList.json'){
            this.examples = {
                groceryTrip: {},
                sundayFunday: {},
            }//Todo: finish examples

            this.toDoList=JSON.parse(fs.readFileSync(path))
            //Todo: if no file, then make new folder&file
            //Todo: Separate JSON for completeds, only accesses recents to save memory usage
            
                
        }
        //Todo: make to do function


    }
}