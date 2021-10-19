document.addEventListener(
    "DOMContentLoaded",
    function () {
        var b = document.querySelector("button");
        var q1 = false;
        var q2 = false;
        var q3 = false;
        
        function verifquestionnaire() {
            if (q1 === true && q2 === true && q3 === true) {
                b.disabled = false;  
            }
        }
        var reponsesq1 = document.querySelectorAll('input[name="rep1"]');
        reponsesq1.forEach((e) => {
            e.addEventListener("click", function () {
                q1 = true;
                verifquestionnaire();
            });
        });        
        var reponsesq2 = document.querySelectorAll('input[name="rep2"]');
        reponsesq2.forEach((e) => {
            e.addEventListener("click", function () {
                q2 = true;
                verifquestionnaire();
            });
        });
        var reponsesq3 = document.querySelectorAll('input[name="rep3"]');
        reponsesq3.forEach((e) => {
            e.addEventListener("click", function () {
                q3 = true;
                verifquestionnaire();
            });
        });
        b.addEventListener("click", function () {
            b.disabled = true;
            let note = 0;
            let vraireponse1 = 1;
            let vraireponse2 = 2;
            let vraireponse3 = 3;
            var valeurreponse1 = document.querySelector('input[name="rep1"]:checked');
            var valeurreponse2 = document.querySelector('input[name="rep2"]:checked');
            var valeurreponse3 = document.querySelector('input[name="rep3"]:checked');
            let madiv = document.getElementById("maDIV");
            let madiv1 = document.getElementById("maDIV1");
            let madiv2 = document.getElementById("maDIV2");
            let madiv3 = document.getElementById("maDIV3");
            let madiv4 = document.getElementById("maDIV4");
            let madiv5 = document.getElementById("maDIV5");
            
            if (valeurreponse1.value == vraireponse1) {
                document.querySelector('input[name="rep1"]:checked').classList.add("juste");
                madiv1.style.display = "block";
                note++;
            } else {
                document.querySelector('input[name="rep1"]:checked').classList.add("faux");
                madiv.style.display = "block";
            }
            if (valeurreponse2.value == vraireponse2) {
                document.querySelector('input[name="rep2"]:checked').classList.add("juste");
                madiv2.style.display = "block";
                note++;
            } else {
                document.querySelector('input[name="rep2"]:checked').classList.add("faux");
                madiv4.style.display = "block";
            }
            if (valeurreponse3.value == vraireponse3) {
                document.querySelector('input[name="rep3"]:checked').classList.add("juste");
                madiv3.style.display = "block";
                note++;
            } else {
                document.querySelector('input[name="rep3"]:checked').classList.add("faux");
                madiv5.style.display = "block";
            }   
            alert("note finale : " + note + "/3");         
        });
    },
    false
);