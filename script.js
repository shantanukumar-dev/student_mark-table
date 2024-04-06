
function result() {
    var name = document.getElementById("name1").value;
    var roll = document.getElementById("Roll").value;
    var marks1 = parseFloat(document.getElementById("mark1").value);
    var marks2 = parseFloat(document.getElementById("mark2").value);
    var marks3 = parseFloat(document.getElementById("mark3").value);
    var marks4 = parseFloat(document.getElementById("mark4").value);
    var marks5 = parseFloat(document.getElementById("mark5").value);
    var marks6 = parseFloat(document.getElementById("mark6").value);

    // Check if any mark is outside the valid range
    if (marks1 < 0 || marks1 > 100 ||
        marks2 < 0 || marks2 > 100 ||
        marks3 < 0 || marks3 > 100 ||
        marks4 < 0 || marks4 > 100 ||
        marks5 < 0 || marks5 > 100 ||
        marks6 < 0 || marks6 > 100) {
        document.getElementById("result").innerHTML = "Please enter valid marks for all subjects (0-100).";
        return;
    }

    var total = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
    var percentage = (total / 600) * 100;

    var resultdiv = document.getElementById("result");
    resultdiv.innerHTML += "NAME OF THE STUDENT IS: " + name + "<br>";
    resultdiv.innerHTML += "ROLL_NUMBER OF THE STUDENT IS: " + roll + "<br>";
    resultdiv.innerHTML += "TOTAL MARK : " + total.toFixed(2) + "<br>";
    resultdiv.innerHTML += "PERCENTAGE: " + percentage.toFixed(2) + "%"+"<br>";
}

function resetForm() {
    // Clear input fields
    document.getElementById("name1").value = "";
    document.getElementById("Roll").value = "";
    document.getElementById("mark1").value = "";
    document.getElementById("mark2").value = "";
    document.getElementById("mark3").value = "";
    document.getElementById("mark4").value = "";
    document.getElementById("mark5").value = "";
    document.getElementById("mark6").value = "";

    // Clear result
    document.getElementById("result").innerHTML = "";
}
