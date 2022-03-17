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

let normalColor = () => {
    html.style.backgroundColor = "#50687C";
    javascript.style.backgroundColor = "#50687C";
    python.style.backgroundColor = "#50687C";
    git.style.backgroundColor = "#50687C";
    other.style.backgroundColor = "#50687C";
}
let getHtmlInfo = () => {
    details.innerHTML = `<h3>HTML & CSS</h3>
    <p>I am proficient in HTML & CSS and am confident in several advanced skills, for example:</p>
    <ul>
        <li>Media Queries</li>
        <li>Responsive Design</li>
        <li>CSS Animations</li>
        <li>CSS Flexbox & Grid</li>
    </ul>
    <p>Many of these skills can be seen in this website as well as in the example projects above.</p>
    <p>I also have knowledge of accessibility practices and design best practices.
    <p>Relevant Codecademy courses I have completed include:</p>
    <ul>
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn Intermediate CSS</li>
        <li>Learn Navigation Design</li>
        <li>Learn Responsive Design</li>
        <li>Build a Website with HTML, CSS, and Github Pages</li>
    </ul>
    <p>I am currently completeing the Front End Engineering Career Path as well</p>`;
    html.style.backgroundColor = "#9BAFBF";
}
let getJavascriptInfo = () => {
    details.innerHTML = `<h3>JavaScript</h3>
    <p>I have an understanding of JavaScript and many of its concepts, for example:</p>
    <div style="float: left; width: 45%;">
        <ul >
            <li>Variables</li>
            <li>Functions</li>
            <li>Arrays</li>
            <li>JavaScript & the DOM</li>
        </ul>
    </div>
    <div style="float: right; width: 45%;">
        <ul >
            <li>Loops</li>
            <li>Objects</li>
            <li>Scope</li>
            <li>The <code>script</code> element</li>
        </ul>
    </div> 
    <p style="clear: both;">I have learned to combine many of these concepts with my knowledge of HTML to create interactive websites like this one.</p>
    <p>Relevant Codecademy courses I have completed include:</p>
    <ul>
        <li>Learn JavaScript</li>
    </ul>
    <p>I am currently completeing the Front End Engineering Career Path as well as the Learn Node.js course.</p>`;
    javascript.style.backgroundColor = "#9BAFBF";
}
let getPythonInfo = () => {
    details.innerHTML = `<h3>Python</h3>
    <p>I have an understanding of Python and many of its concepts, for example:</p>
    <div style="float: left; width: 45%;">
        <ul >
            <li>Function</li>
            <li>Lists</li>
            <li>Loops</li>
            <li>Dictionaries</li>
        </ul>
    </div>
    <div style="float: right; width: 45%;">
        <ul >
            <li>Methods</li>
            <li>Modules</li>
            <li>Classes</li>
        </ul>
    </div>  
    <p style="clear: both">Many of these skills can be seen in the example Python project above.</p>
    <p>Relevant Codecademy courses I have completed include:</p>
    <ul>
        <li>Learn Python 3</li>
    </ul>
    <p>I am currently completeing the Computer Science Career Path as well.</p>`;
    python.style.backgroundColor = "#9BAFBF";
}
let getGitInfo = () => {
    details.innerHTML = `<h3>Git & GitHub</h3>
    <p>I have an understanding of Git and many of its concepts, for example:</p>
    <ul>
        <li>Command Line</li>
        <li>Basic Git Work FLow</li>
        <li>Backtracking</li>
        <li>Managing branches and GitHub flow.</li>
    </ul>
    <p>I used many of these skills while making this website as well as in the example projects above.</p>
    <p>Relevant Codecademy courses I have completed include:</p>
    <ul>
        <li>Build A Website With HTML, GitHub & GitHub Pages</li>
    </ul>
    <p>I am currently completeing the Front End Engineering Career Path as well as the Learn Git & GitHub course.</p>`;
    git.style.backgroundColor = "#9BAFBF";
}
let getOtherInfo = () => {
    details.innerHTML = `<h3>Other</h3>
    <p>I also have completed many other courses on Codecademy which have taught me many other important skills. These include:</p>
    <ul>
        <li>Introduction to Cybersecurity</li>
        <li>Learn Color Design</li>
    </ul>
    <p>I have also completed courses on other platforms, for example JavaScript, HTML&CSS and SQL courses on Khan Academy, which taught me many skills, including Object-Orientated Design.</p>
    <p>Other concepts and skills I am familiar with not mentioned above include: </p>
    <ul>
        <li>Wireframing</li>
        <li>Markdown</li>
        <li>Chrome DevTools</li>
        <li>Jupiter Notebooks</li>
        <li>Icons + Font Awesome</li>
    </ul>`
    other.style.backgroundColor = "#9BAFBF";
}

html.addEventListener("click", () => {
    normalColor();
    getHtmlInfo();
});
javascript.addEventListener("click", () => {
    normalColor();
    getJavascriptInfo();
});
python.addEventListener("click", () => {
    normalColor();
    getPythonInfo();
});
git.addEventListener("click", () => {
    normalColor();
    getGitInfo();
});
other.addEventListener("click", () => {
    normalColor();
    getOtherInfo();
});