function readFileA () {
  //GET SELECTED FILE
  let selected = document.getElementById("inputFile").files[0];
 
  //READ SELECTED FILE
  let reader = new FileReader();
  reader.addEventListener("loadend", () => {
    let content = reader.result;
    const lines = content.split('\n');

    const capitalizedContent = lines.map(line => {
      if (line.length > 0) {
        return line.charAt(0).toUpperCase() + line.slice(1);
      } else {
      return line;
      }
    });
    const result = capitalizedContent.join('<br>');

    document.getElementById("output").innerHTML = result;
  });
  reader.readAsText(selected);
}

document.getElementById("downloadButton").addEventListener("click", function() {
  var content = document.getElementById("content").innerText;
  var blob = new Blob([content], {type: "text/plain"});
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "div_content.txt";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
});
