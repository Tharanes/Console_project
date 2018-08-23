var email;
function jqueryfun(){

  var xmlhttp = new XMLHttpRequest();
         xmlhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                email = this.responseText;

             }
         };
         xmlhttp.open("GET",  "./php/profile.php", true);
         xmlhttp.send();

}


$(document).ready(function(){

  $.ajax({
    url:"php/log.json",
    dataType:"json",
    success:function(data)
    {
      $(data).each(function(index,value){
           var n =email.localeCompare(data[index].detail_email);
           console.log();
           console.log(email);
              console.log(email+" compare to "+ data[index].detail_email);
             console.log(n);
  				if(n==0)
          {
            var showEmail = document.getElementById("showEmail");
            showEmail.innerHTML = email;
            showEmail.style.cssFloat = "right";
            var tab = document.getElementById("profiletable");
            var del = document.getElementById("del");
            del.innerHTML=" ";
            var change = "<table><tr><td><p id=alter_table>Name</p></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id=alter_table>"+data[index].detail_name+"</td></tr><tr><td><p id='alter_table'>Age</p><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></td><td id=alter_table>"+data[index].detail_age+"</td></tr><tr><td><p id='alter_table'>E-mail</p></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id=alter_table>"+email+"</td></tr><tr><td><p id=alter_table>Phone</p></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td >"+data[index].detail_phone+"</td></tr><tr><td><p id=alter_table>City</p></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>"+data[index].detail_city+"</td></tr><tr><td><p id=alter_table>Department</p></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id=alter_table>"+data[index].detail_dept+"</td></tr><tr><td><p id=alter_table>Nationality</p></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td >"+data[index].detail_nationality+"</td></tr><tr><td>Gender</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>"+data[index].detail_gender+"</td></tr></table>";
            tab.innerHTML=change;
          tab.style.textAlign="left";
            tab.style.color="white";
            tab.style.paddingLeft="30%";
            tab.style.border="thick";

          }
  			});
    }
  });
});
