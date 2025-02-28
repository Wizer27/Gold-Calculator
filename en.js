function calculateGold() {
    
    const colInput = document.getElementById("col");
    const col = parseInt(colInput.value) || 0;

   
    const weightsInput = document.getElementById("weights");
    const weights = weightsInput.value.split(',').map(w => parseFloat(w.trim()) || 0);

  
    if (weights.length !== col) {
        alert("Количество введенных весов должно совпадать с количеством микросхем.");
        return;
    }


    let totalGold = 0;
    weights.forEach(weight => {
        totalGold += weight * 0.03 / 100; 
    });

    const resultElement = document.getElementById("result");
    resultElement.innerText = totalGold.toFixed(4);
}
