function show_topic()
    {
        var x = document.getElementById("demo");
        var dog_name = prompt("Enter your dog's name")
        x.style.fontSize = "25px";
        x.style.color = "#B3DA8C";
        document.getElementById("demo").innerHTML = "Woof! My name is " + dog_name;
      }
