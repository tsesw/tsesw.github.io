
    function age_cal()
        {
          var dog_age;
          dog_age=Number(document.dcal.txtdog_age.value);
          res=dog_age*7;
          document.dcal.txthuman_age.value=res;

        }

    function show_topic()
        {
            var x = document.getElementById("demo");
            var my_name = prompt("Enter your your name")
            x.style.fontSize = "25px";
            x.style.color = "red";
            document.getElementById("demo").innerHTML = "My name is " + my_name;
          }
