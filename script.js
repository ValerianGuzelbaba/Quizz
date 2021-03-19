document.addEventListener(
    "DomContentLoaded",
    function () {
        var b = document.querySelector("button");
        var q1 = false;
        var q2 = false;
        function verifquestionnaire() {
            if (q1 === true && q2 === true) {
                b.disbled = false;
            }
        }
        var reponseq1 = document.querySelectorAll('input[name="rep1"]');
        reponseq1.forEach((e) => {
            e.addEventListener("click", function () {
                q1 = true;
                verifquestionnaire ();
            });
        });
    }
)