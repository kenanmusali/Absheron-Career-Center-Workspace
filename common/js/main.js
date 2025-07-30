document.addEventListener('keydown', (e) => {
    // Detect PrintScreen (44) or Mac screenshots (Shift+Cmd+3/4)
    if (e.key === 'PrintScreen' || e.keyCode === 44 || 
        (e.metaKey && e.shiftKey && [51, 52, 53].includes(e.keyCode))) {
        
        // Nuclear option: Replace entire page
        document.body.innerHTML = `
            <div style="
                position:fixed;
                top:0; left:0;
                width:100vw; height:100vh;
                background:black;
                color:red;
                font-size:2em;
                display:flex;
                justify-content:center;
                align-items:center;
                z-index:999999;
            ">
                SCREENSHOT BLOCKED
            </div>
        `;
        
        e.preventDefault();
    }
});