function readFileA () {
  //GET SELECTED FILE
  let selected = document.getElementById("inputFile").files[0];
 
  //READ SELECTED FILE
  let reader = new FileReader();
  reader.addEventListener("loadend", () => {
    document.getElementById("output").innerHTML = reader.result;
  });
  reader.readAsText(selected);
}

  function capitalizeFirstLetter(word) {
      if (typeof word !== 'string') {
          return word; //return the input as is if it's not a string
      }

      //use the charArt method to get the file letter and capitalize it
      return word.charAt(0).toUpperCase() + word.slice(1);
  }

