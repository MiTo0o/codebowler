

// function test() {
//     let currentInput = document.getElementById('inputForm').value;
//     let inputLength = currentInput.length;
//     console.log(transcripts.shrek);
// }

function bowl() {
    let currentInput = document.getElementById('inputForm').value;
    let e = document.getElementById("transcriptDropdown").value;
    let fused = currentInput + fillers[e];
    let desiredLength = 1000;

    outputForm.value = fused.substring(0, desiredLength);
}