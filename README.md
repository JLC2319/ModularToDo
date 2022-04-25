# ModularToDo
ToDo Tracking tool/engine which can be implemented across numerous interfaces. 

The formatting methodology is a comination of video game quest management and decision tree outcomes 



To Do Item Object example: 

    * indicates it is a tag that can be 'remembered' for default reccomendations 


  {
      
      subject*: 'Project A' | 'Biology 101' | 'Taxes' | 'Work' | 'Bills' | 'Bank' ... 
      type*: 'chores' | 'reading' | 'research' | 'coding' | 'comms' | 'errand' ...
      
      description: 
          'I am a semi-specifc, but not too specific desciption'
      
      attachments: 
          [ lnk1, lnk2, lnk3, ... ]
      collaborators*:
          [contact1, contact2, contact3, ... ]
      
      dependentOf: 
          [ToDoObj1, ToDoObj2, ToDoObj3, ... ]
      requiredFor: 
          [ToDoObj1, ToDoObj2, ToDoObj3, ... ]
      
      dueDateTime: dateTimeObject
      timeLeft: this.dueDatetime - Today
      
      late: this.timeleft > 0  
  
  }
