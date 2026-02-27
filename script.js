async function analyze() {

    document.getElementById("result").innerText = "Analyzing...";

    const data = {
        mood: parseInt(document.getElementById("mood").value),
        sleep: parseInt(document.getElementById("sleep").value),
        stress: parseInt(document.getElementById("stress").value),
        study: parseInt(document.getElementById("study").value),
        screen: parseInt(document.getElementById("screen").value),
        appetite: parseInt(document.getElementById("appetite").value),
        social: parseInt(document.getElementById("social").value)
    };

    if (!data.mood || !data.sleep || !data.stress) {
        alert("Please fill all fields");
        return;
    }

    const response = await fetch("https://mindguardai-4dk3.onrender.com/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();   // 👈 THIS WAS MISSING

    let highConfidence = result.probabilities.high * 100;
    document.getElementById("confidenceFill").style.width = highConfidence + "%";

    let riskColor = "green";
    if (result.risk === "Moderate") riskColor = "orange";
    if (result.risk === "High") riskColor = "red";

    document.getElementById("result").innerHTML =
        `<b style="color:${riskColor}">Risk Level: ${result.risk}</b>
         <br>High Risk Confidence: ${result.probabilities.high}
         <br><br>${result.message}`;
}
