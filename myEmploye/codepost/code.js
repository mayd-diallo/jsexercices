const search = document.querySelector("#search");
const suggestions = document.querySelector("#suggestions");
const result = document.querySelector("#result");
const form = document.querySelector("#searchForm");

let zipcodes = [];

/* Chargement du JSON */
fetch("https://arfp.github.io/tp/web/javascript/02-zipcodes/zipcodes.json")
    .then(response => response.json())
    .then(data => {
        zipcodes = data;
    })
    .catch(error => {
        console.error(error);
    });

/* Suggestions */
search.addEventListener("input", () => {

    const value = search.value.trim();

    suggestions.innerHTML = "";

    if (value.length < 2) return;

    const villes = zipcodes.filter(city =>
        city.zip_code.includes(value)
    );

    villes.forEach(city => {

        const option = document.createElement("option");

        option.value =
            `${city.zip_code} - ${city.name}`;

        suggestions.appendChild(option);

    });
});

/* Validation */
form.addEventListener("submit", event => {

    event.preventDefault();

    const recherche = search.value;

    const ville = zipcodes.find(city =>
        `${city.zip_code} - ${city.name}` === recherche
    );

    if (!ville) {

        result.innerHTML = `
            <p>Ville introuvable</p>
        `;

        return;
    }

    result.innerHTML = `
        <h2>${ville.name}</h2>

        <p>
            <strong>Code postal :</strong>
            ${ville.zip_code}
        </p>

        <p>
            <strong>Département :</strong>
            ${ville.department_name}
        </p>

        <p>
            <strong>Région :</strong>
            ${ville.region_name}
        </p>
    `;
});