function about(){
    var about = document.getElementById("about");
    if (about.style.display === "none"){
        about.style.display = "block";
    } else{
        about.style = "none";
    }
    }
    
      
    $(function () {
        $("#profile").on("click",function () {
            $("#profile").addClass("bg2");
            console.log(click);
            $("container_profile").html("The link below is from my bootcamps 1st group project, where I handeled the API call for the New York Times and the quick seach buttons that populate the top 5 coins.");
            
        });
    });
    $(function () {
        $("#contact").on("click",function () {
            $("#contact").addClass("bg3");
            $(".container_contact  p").text("My linkedin and resume is listed below");
            $(".containter_contact").onclick.empty()
        });
    });