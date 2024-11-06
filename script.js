document.getElementById("deslizar").addEventListener("click", function(event) {
    event.preventDefault(); 

    document.getElementById("mais__infos").scrollIntoView({
      behavior: "smooth"
    });
  });
  