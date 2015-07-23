module.exports={


    validations:function(title, excerpt, main){
      var output=[];
      if(title.trim().length === 0){
        output.push("Title cannot be blank");
      }

      if(title.trim().length<2){
        output.push("Title must be at least 3 characters");
      }


      if(excerpt.trim().length === 0){
        output.push("Excerpt cannot be blank");
      }

      if(main.trim().length===0){
        output.push("Body cannot be blank");
      }


      return output;
    }
  }
