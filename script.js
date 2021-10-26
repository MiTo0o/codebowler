

// function test() {
//     let currentInput = document.getElementById('inputForm').value;
//     let inputLength = currentInput.length;
//     console.log(transcripts.shrek);
// }

function bowl() {
    let currentInput = document.getElementById('inputForm').value;
    let fused = currentInput + transcripts.shrek;
    let desiredLength = 1000;

    outputForm.value = fused.substring(0, desiredLength);
}