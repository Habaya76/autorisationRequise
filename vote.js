function check(){
            var nbr;
             nbr = Number(document.getElementById("annee").value);
             if(nbr < 18)
             {
               alert("Vous ne pouvez pas votez");
             }
             else
             {
                alert("Vous pouvez votez");
                document.getElementById("form2").style.display = "block";
             }
         }

