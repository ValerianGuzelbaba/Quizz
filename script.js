document.addEventListener(
    "DOMContentLoaded",
    function () {
        var b = document.querySelector("button");
        var q1 = false;
        var q2 = false;

        function verifquestionnaire() {
            if (q1 === true && q2 === true) {
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

        b.addEventListener("click", function () {
            b.disabled = true;
            let note = 0;
            let vraireponse1 = 1;
            let vraireponse2 = 2;

            var valeurreponse1 = document.querySelector('input[name="rep1"]:checked');
            var valeurreponse2 = document.querySelector('input[name="rep2"]:checked');
            console.log("reponse1 : " + valeurreponse1.value);
            console.log("reponse2 : " + valeurreponse2.value);

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
            
            console.log("note finale : " + note + "/2");
        });
    },
    false
);