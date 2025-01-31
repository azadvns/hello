let txt = document.createElement("input");
txt.type = "text";
txt.id = "a1";

let tyt = document.createElement("input");
tyt.type = "text";
tyt.id = "a2";

let tzt = document.createElement("input");
tzt.type = "text";
tzt.id = "a3";
tzt.readOnly = true;

document.body.appendChild(txt);
document.body.appendChild(tyt);
document.body.appendChild(tzt);

let button = document.createElement("button");

button.style.padding = "10px";
button.style.cursor = "pointer";
button.style.border = "none";
document.body.appendChild(button);
button.textContent = "add";
button.addEventListener("click",
    function () {
        // alert("button")
        let a1 = Number(document.getElementById("a1").value);
        let a2 = Number(document.getElementById("a2").value);
        let a3 = document.getElementById("a3");
        console.log(a1 + a2);
        let result = "not given";
        result = a1 + a2;
        a3.value = result;
    }
);
