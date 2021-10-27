

// function test() {
//     let currentInput = document.getElementById('inputForm').value;
//     let inputLength = currentInput.length;
//     console.log(transcripts.shrek);
// }

function bowl() {
    let currentInput = document.getElementById('inputForm').value;
    let transcriptElement = document.getElementById("transcriptDropdown").value;
    let languageElement = document.getElementById("programmingLanguage").value;
    console.log(languageElement);
    let fused = currentInput + "\n" + syntax[languageElement][0] + fillers[transcriptElement];
    let desiredLength = 1000;

    outputForm.value = fused.substring(0, desiredLength) + "\n" + syntax[languageElement][1];
}