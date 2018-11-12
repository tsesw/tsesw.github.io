
    function age_cal()
        {
          alert("Check out how old is your dog!")
          var dog_age;
          dog_age=Number(document.dcal.txtdog_age.value);
          res=dog_age*7;
          document.dcal.txthuman_age.value=res;

        }

    function show_topic()
        {
            var x = document.getElementById("demo");
            var dog_name = prompt("Enter your dog's name")
            x.style.fontSize = "25px";
            x.style.color = "#B3DA8C";
            document.getElementById("demo").innerHTML = "Woof! My name is " + dog_name;
          }
