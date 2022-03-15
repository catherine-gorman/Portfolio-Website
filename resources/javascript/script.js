/*******
1. Hover over projects and background becomes solid
2. Skills section tab between skills

********/
let html = document.getElementById("html");
let javascript = document.getElementById("javascript");
let python = document.getElementById("python");
let git = document.getElementById("git");
let other = document.getElementById("other");
let details = document.getElementById("skills-details");

let getHtmlInfo = () => {
    details.innerHTML = "Let me tell you about HTML";
}
let getJavascriptInfo = () => {
    details.innerHTML = "Let me tell you about JavaScript";
}
let getPythonInfo = () => {
    details.innerHTML = "Let me tell you about Python";
}
let getGitInfo = () => {
    details.innerHTML = "Let me tell you about Git";
}
let getOtherInfo = () => {
    details.innerHTML = "Let me tell you about other stuff";
}

html.addEventListener("click", getHtmlInfo);
javascript.addEventListener("click", getJavascriptInfo);
python.addEventListener("click", getPythonInfo);
git.addEventListener("click", getGitInfo);
other.addEventListener("click", getOtherInfo);