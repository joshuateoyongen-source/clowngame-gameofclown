const fs = require("fs");
const path = require("path");

// ==========================================
// FILENAME PREFIX → SPECIES NAME
// ==========================================

//FOLLOW THESE INSTRUCTIONS TO UPDATE THE CLOWN IMAGE ALBUM DATABASE

//Press the three dots (...) in the top left bar (to the right of "run")
//Select "terminal"
//Select "new terminal"
//INSERT COPYPASTA TO GENERATE NEW SPECIES NAME into the new terminal
//"node C:\Users\GAdmin\Desktop\Clown Game - Game of Clown\generate-fish.js" (with the quotation marks also)


const speciesMap = {
    akallopisos: "Akallopisos",
    akindynos: "Akindynos",
    allardi: "Allardi",
    barberi: "Barberi",
    bicinctus: "Bicinctus",

    // Special filename
    maroon: "Biaculeatus",

    chagosensis: "Chagosensis",
    arg: "Chrysargyrus",
    chrysogaster: "Chrysogaster",
    chrysopterus: "Chrysopterus",
    clarkii: "Clarkii",

    // Special filename
    ef: "Ephippium",

    frenatus: "Frenatus",

    // Special filename
    fusco: "Fuscocaudatus",
    japon: "Japonicus",

    // Special filename
    late: "Latezonatus",

    // Special filename
    lat: "Latifaciatus",

    leucokranos: "Leucokranos",
    maohiensis: "Maohiensis",
    mccullochi: "Mccullochi",
    milii: "Milii",

    // Special filename
    melan: "Melanopus",

    nigripes: "Nigripes",

    cg: "a Fake",
    // Special filename
    oman: "Omanensis",

    pacificus: "Pacificus",
    percula: "Percula",
    perideraion: "Perideraion",
    polymnus: "Polymnus",

    // Special filename
    rubro: "Rubrocinctus",

    sandarancinos: "Sandarancinos",
    sebae: "Sebae",
    snyderi: "Snyderi",

    // Special filename
    thi: "Thiellei",

    tricinctus: "Tricinctus",

    ocellaris: "Ocellaris"
};


// ==========================================
// SETTINGS
// ==========================================

const imagesFolder = path.join(__dirname, "images");
const scriptFile = path.join(__dirname, "script.js");


// ==========================================
// SUPPORTED IMAGE TYPES
// ==========================================

const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp"
];


// ==========================================
// CHECK THAT IMAGES FOLDER EXISTS
// ==========================================

if (!fs.existsSync(imagesFolder)) {

    console.error("ERROR: The images folder could not be found.");

    process.exit(1);
}


// ==========================================
// GET ALL IMAGE FILES
// ==========================================

const files = fs.readdirSync(imagesFolder)
    .filter(file => {

        const extension =
            path.extname(file).toLowerCase();

        return imageExtensions.includes(extension);
    });


// ==========================================
// CONVERT EACH FILE INTO A FISH OBJECT
// ==========================================

const fish = [];

for (const file of files) {

    // Remove extension
    const filenameWithoutExtension =
        path.basename(
            file,
            path.extname(file)
        );

    // Find the number at the end
    const match =
        filenameWithoutExtension.match(/^(.+?)(\d+)$/);

    if (!match) {

        console.warn(
            `WARNING: Could not determine species from "${file}"`
        );

        continue;
    }

    // Example:
    // ocellaris1 → prefix = ocellaris
    // number = 1

    const prefix = match[1].toLowerCase();

    // Find species
    const species = speciesMap[prefix];

    if (!species) {

        console.warn(
            `WARNING: No species mapping found for "${file}"`
        );

        continue;
    }

    fish.push({
        image: `images/${file}`,
        species: species
    });
}


// ==========================================
// SORT SPECIES ALPHABETICALLY
// ==========================================

fish.sort((a, b) => {

    const speciesComparison =
        a.species.localeCompare(
            b.species
        );

    if (speciesComparison !== 0) {
        return speciesComparison;
    }

    // If same species, sort by filename
    return a.image.localeCompare(
        b.image,
        undefined,
        { numeric: true }
    );
});


// ==========================================
// GENERATE JAVASCRIPT
// ==========================================

let output = `const fish = [\n`;

fish.forEach((item, index) => {

    output += `    {\n`;
    output += `        image: "${item.image}",\n`;
    output += `        species: "${item.species}"\n`;
    output += `    }`;

    // Don't put a comma after the final object
    if (index < fish.length - 1) {
        output += ",";
    }

    output += "\n";
});

output += `];\n`;


// ==========================================
// UPDATE SCRIPT.JS
// ==========================================

const scriptContents =
    fs.readFileSync(
        scriptFile,
        "utf8"
    );


// Find the existing const fish = [...] section
const fishStart =
    scriptContents.indexOf("const fish = [");

if (fishStart === -1) {

    console.error(
        'ERROR: Could not find "const fish = [" in script.js'
    );

    process.exit(1);
}


// Find the closing ]; after const fish
const fishEnd =
    scriptContents.indexOf(
        "];",
        fishStart
    );

if (fishEnd === -1) {

    console.error(
        'ERROR: Could not find the end of the fish array in script.js'
    );

    process.exit(1);
}


// Keep everything before const fish
const before =
    scriptContents.substring(
        0,
        fishStart
    );


// Keep everything after the fish array
const after =
    scriptContents.substring(
        fishEnd + 2
    );


// Create the new script
const newScript =
    before +
    output +
    after;


// Write it back to script.js
fs.writeFileSync(
    scriptFile,
    newScript,
    "utf8"
);


// ==========================================
// FINISHED
// ==========================================

console.log("");
console.log("==========================================");
console.log("       FISH LIST GENERATED SUCCESSFULLY");
console.log("==========================================");
console.log("");

console.log(`Found ${fish.length} images.`);

const species = [
    ...new Set(
        fish.map(f => f.species)
    )
];

console.log(
    `Found ${species.length} species.`
);

console.log("");

console.log("Updated:");
console.log("script.js");

console.log("");