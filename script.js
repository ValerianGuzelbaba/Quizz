document.addEventListener(
    "DOMContentLoaded",
    function () {
        var b = document.querySelector("button");
        var q1 = false;
        var q2 = false;
        var q3 = false;
        var q4 = false;

        function verifquestionnaire() {
            if (q1 === true && q2 === true && q3 === true && q4 === true) {
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

        var reponsesq4 = document.querySelectorAll('input[name="rep4"]');
        reponsesq4.forEach((e) => {
            e.addEventListener("click", function () {
                q4 = true;
                verifquestionnaire();
            });
        });

        b.addEventListener("click", function () {
            b.disabled = true;
            let note = 0;
            let vraireponse1 = 1;
            let vraireponse2 = 2;
            let vraireponse3 = 3;
            let vraireponse4 = 2;

            var valeurreponse1 = document.querySelector('input[name="rep1"]:checked');
            var valeurreponse2 = document.querySelector('input[name="rep2"]:checked');
            var valeurreponse3 = document.querySelector('input[name="rep3"]:checked');
            var valeurreponse4 = document.querySelector('input[name="rep4"]:checked');
            console.log("reponse1 : " + valeurreponse1.value);
            console.log("reponse2 : " + valeurreponse2.value);
            console.log("reponse3 : " + valeurreponse3.value);
            console.log("reponse4 : " + valeurreponse4.value);

            if (valeurreponse1.value == vraireponse1) {
                console.log("la réponse 1 est bonne");
                document.querySelector('input[name="rep1"]:checked').classList.add("juste");
                note++;
            } else {
                console.log("la réponse 1 est fausse");
                document.querySelector('input[name="rep1"]:checked').classList.add("faux");
            }
            if (valeurreponse2.value == vraireponse2) {
                console.log("la réponse 2 est bonne");
                document.querySelector('input[name="rep2"]:checked').classList.add("juste");
                note++;
            } else {
                console.log("la reponse 2 est fausse");
                document.querySelector('input[name="rep2"]:checked').classList.add("faux");
            }
            if (valeurreponse3.value == vraireponse3) {
                console.log("la réponse 3 est bonne");
                document.querySelector('input[name="rep3"]:checked').classList.add("juste");
                note++;
            } else {
                console.log("la reponse 3 est fausse");
                document.querySelector('input[name="rep3"]:checked').classList.add("faux");
            }
            if (valeurreponse4.value == vraireponse4) {
                console.log("la réponse 4 est bonne");
                document.querySelector('input[name="rep4"]:checked').classList.add("juste");
                note++;
            } else {
                console.log("la reponse 4 est fausse");
                document.querySelector('input[name="rep4"]:checked').classList.add("faux");
            }

            console.log("note finale : " + note + "/2");
        });
    },
    false
);