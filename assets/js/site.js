const root = location.pathname.includes("/pages/") ? "../" : "";

document.getElementById("site-header").innerHTML = `
    <header class="site-header">
        <div class="header-inner">
            <a class="brand" href="${root}index.html">
                <span class="mark">MT</span>
                <span>Mohamed Tarek</span>
            </a>
            <nav class="nav">
                <a href="${root}index.html">Home</a>
                <a href="${root}pages/about.html">About</a>
                <a href="${root}pages/ai.html">AI</a>
                <a href="${root}pages/programming.html">Programming</a>
                <a href="${root}pages/projects.html">Projects</a>
                <a href="${root}pages/blog.html">Blog</a>
                <a href="${root}pages/tools.html">Tools</a>
            </nav>
            <button class="menu" id="menuBtn">☰</button>
        </div>
    </header>
`;

document.getElementById("site-footer").innerHTML = `
    <footer class="footer">
        <span>© ${new Date().getFullYear()} <b>Mohamed Tarek</b></span>
        <span>AI · Software · Technology</span>
        <span>Mohamed Tarek</span>
    </footer>
`;

document.getElementById("menuBtn").onclick = () => {
    const navigation = document.querySelector(".nav");

    navigation.style.display = navigation.style.display === "flex" ? "" : "flex";
    navigation.style.position = "absolute";
    navigation.style.top = "68px";
    navigation.style.right = "18px";
    navigation.style.flexDirection = "column";
    navigation.style.padding = "14px";
    navigation.style.background = "rgba(7,11,22,.97)";
    navigation.style.border = "1px solid var(--line)";
    navigation.style.borderRadius = "14px";
};
