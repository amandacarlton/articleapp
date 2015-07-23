module.exports={


    validations:function(title, url, excerpt, main){
      var output=[];
      if(title.trim().length === 0){
        output.push("Title cannot be blank");
      }

      if(title.trim().length<2){
        output.push("Title must be at least 3 characters");
      }

      if(url.trim().length===0){
        output.push("Url cannot be blank");
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
