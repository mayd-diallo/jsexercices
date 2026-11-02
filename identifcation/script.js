// Tableau d'objets JSON

const utilisateurs = [
    {
        id: 1,
        lastname: "Doe",
        firstname: "John",
        birthday: "1981-11-12",
        salary: 2250,
        password: "1234"
    },
    {
        id: 2,
        lastname: "Grande",
        firstname: "Léa",
        birthday: "2001-08-28",
        salary: 2165,
        password: "123456"
    },
    {
        id: 3,
        lastname: "Makenzie",
        firstname: "Roy",
        birthday: "1992-07-12",
        salary: 2090,
        password: "azerty"
    }
];

const formulaire = document.getElementById("formConnexion");
const message = document.getElementById("message");

formulaire.addEventListener("submit", function(event){

    event.preventDefault();

    const login = document.getElementById("login").value.toLowerCase();
    const password = document.getElementById("password").value;

    const utilisateurTrouve = utilisateurs.find(utilisateur => {

        const identifiant =
            utilisateur.firstname.toLowerCase() +
            "." +
            utilisateur.lastname.toLowerCase();

        return identifiant === login &&
               utilisateur.password === password;
    });

    if(utilisateurTrouve){

        message.textContent =
            "✅ Bienvenue " +
            utilisateurTrouve.firstname +
            " " +
            utilisateurTrouve.lastname;

        message.style.color = "green";
    }
   

else {
 let timer;
    erreur.textContent =
        "❌ Identifiant ou mot de passe incorrect";

    erreur.style.display = "block";

    clearTimeout(timer);

    timer = setTimeout(() => {
        erreur.style.display = "none";
    }, 5000);

}
const erreur = document.getElementById("erreur");
});
