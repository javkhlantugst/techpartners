//Menu-nii heseg deh profile deer darahad unaj ireh hesgiin js

function profiledrop()
{

    var mydrop = document.getElementById("profile-drop");
    var myDropDisp = mydrop.style.display;

    var btn = document.getElementById("profile-btn");
    
    if(myDropDisp == 'none')
    {
        document.getElementById("profile-drop").style.display = "block";
    }
    else
    {
        document.getElementById("profile-drop").style.display = "none";
    }
}