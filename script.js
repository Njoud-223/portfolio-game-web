// Cursor glow
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);
document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Start button
const btn = document.getElementById("magicBtn");
if(btn){
    btn.addEventListener("click", startGame);
}

function startGame(){
    document.body.innerHTML = `
        <div class="game-screen">
            <h2 style="color:white;">Click the neon box to explore sections!</h2>
            <div class="game-box"></div>
            <div class="content-display" style="color:white;"></div>
        </div>
    `;
    document.body.appendChild(cursor);
    initGame();
}

function initGame(){
    const box = document.querySelector(".game-box");
    const content = document.querySelector(".content-display");

    const sections = ["about", "projects", "contact", "goodbye"];
    let currentIndex = 0;

    function moveBoxRandom(){
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        box.style.left = x + "px";
        box.style.top = y + "px";
        box.style.position = "absolute";
    }

    function showSection(index){
        const section = sections[index];
        if(section === "about"){
            content.innerHTML = `
                <h3>About Me</h3>
                <p>Computer Science student at Saudi Electronic University and an active member of the University AI Club, seeking a cooperative training opportunity to develop practical skills in programming, web and mobile development, and networking, while contributing to innovative technology projects.</p>
            `;
        }
        else if(section === "projects"){
            content.innerHTML = `
                <h3>Projects</h3>
                <ul>
                    <li><strong>MintBooks Library Website</strong> | HTML, CSS, JS, PHP, MySQL</li>
                    <li><strong>Cartly – Shopping List Android App</strong> | Java, XML, Android Studio</li>
                    <li><strong>LifecycleDisplay – Android App</strong> | Java, XML, Android Studio</li>
                    <li><strong>React Personal Info & New Year App</strong> | React.js, JavaScript, CSS, HTML</li>
                    <li><strong>Local Area Network Design</strong> | Cisco Packet Tracer, Cisco IOS Commands</li>
                </ul>
            `;
        }
        else if(section === "contact"){
            content.innerHTML = `
                <h3>Contact</h3>
                <p><strong>Email:</strong> <a href="mailto:njoud.k.alali1@gmail.com" style="color:white;">njoud.k.alali1@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+966504550658" style="color:white;">+966 50 455 0658</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/njoud-alali-8b0493205" target="_blank" style="color:white;">www.linkedin.com/in/njoud-alali-8b0493205</a></p>
            `;
        }
        else if(section === "goodbye"){
            content.innerHTML = `<h2>Goodbye!</h2><p>Thanks for exploring my portfolio! Click the box to restart the game.</p>`;
        }
    }

    moveBoxRandom();
    showSection(currentIndex);

    box.addEventListener("click", () => {
        currentIndex++;
        if(currentIndex >= sections.length) currentIndex = 0; // Restart after Goodbye
        showSection(currentIndex);
        moveBoxRandom();
    });
}