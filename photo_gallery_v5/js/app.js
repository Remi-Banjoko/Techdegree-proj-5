baguetteBox.run('.gallery');

 document.getElementById("search").addEventListener("keyup", myFunction);

function myFunction() {
  var user_input = toString(document.getElementById("search"));
  var filter =  user_input.toUpperCase();
  var gallery = document.getElementById("image_gallery");
  var gallery_entries= gallery.getElementsByTagName('li');
//   var gallery_captions = li.getAttribute("data-caption");



  for( let i = 0; i < gallery_entries.length; i++){

    var a = gallery_entries[i].getElementsByTagName("a")[0];
    console.log(a.getAttribute("data-caption"));
    var txtValue = a.getAttribute("data-caption");
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        gallery_entries[i].style.display = "initial";
    } else {
        gallery_entries[i].style.display = "none";
    }

    // let caption = image_cap`${i}`.getAttribute("data-caption");
    // console.log(caption);
    
    }
    

}

// let caption = image_cap.getAttribute("data-caption");

