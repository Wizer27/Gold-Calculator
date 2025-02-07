function calculateGold() {
    const col = parseInt(document.getElementById("col").value) || 0;
    const weightsInput = document.getElementById("weights").value;
    const weights = weightsInput.split(',').map(w => parseFloat(w.trim()) || 0);

    if (weights.length !== col) {
        alert("Количество введенных весов должно совпадать с количеством микросхем.");
        return;
    }

    let totalGold = 0;
    weights.forEach(weight => {
        totalGold += weight * 0.03 / 100;
    });

    document.getElementById("result").innerText = totalGold.toFixed(4);
}