// Mixed messages
// Predicciones cortas y absurdas con un objeto conteniendo 3 variables (array)

function generatePrediction() {
    
    // Objeto con 3 array
    const data = {
        object: [
            "A scientist", "A robot", "An eccentric millionaire", "A hacker", "A time traveler",
            "An alien", "A cat with artificial intelligence", "A mysterious asteroid",
            "A failed experiment", "A supercomputer"
        ],
        action: [
            "discovers a secret formula", "activates an interdimensional portal", "loses control of an artificial intelligence",
            "merges with a machine", "sends a signal to space", "finds a hidden civilization",
            "invents a new energy source", "unlocks the code of reality", "predicts the end of the world",
            "hacks the human mind"
        ],
        and: [
            "and accidentally resets Earth from scratch.",
            "and causes humans to speak in binary.",
            "and discovers that we are part of a simulation.",
            "and makes cats rule the world.",
            "and creates a black hole in their laboratory.",
            "and ends up trapped in the year 3025.",
            "and turns fish into intelligent beings.",
            "and causes objects to come to life.",
            "and sparks a revolution of toasters.",
            "and awakens an ancient creature."
        ]
    };

    // Aleatoriedad de cada elemento del objeto 
    const object = data.object[Math.floor(Math.random() * data.object.length)];
    const action = data.action[Math.floor(Math.random() * data.action.length)];
    const and = data.and[Math.floor(Math.random() * data.and.length)];
    
    // Frase generada usando los 3 array del objeto
    return `${object} ${action} ${and}`;
}

// Ejecutar función que contiene el objeto, a su vez 3 array, y 3 aleatoriedades en cada iteración
console.log(generatePrediction());
