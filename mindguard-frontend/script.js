async function analyze() {

    const data = {
        mood: parseInt(document.getElementById("mood").value),
        sleep: parseInt(document.getElementById("sleep").value),
        stress: parseInt(document.getElementById("stress").value),
        study: parseInt(document.getElementById("study").value),
        screen: parseInt(document.getElementById("screen").value),
        appetite: parseInt(document.getElementById("appetite").value),
        social: parseInt(document.getElementById("social").value)
    };

    const response = await fetch("https://mindguardai-4dk3.onrender.com/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    document.getElementById("result").innerText =
        "Risk Level: " + result.risk +
        "\nHigh Risk Confidence: " + result.probabilities.high +
        "\n\n" + result.message;
}