import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Attach to window so the HTML buttons can "see" them
window.login = () => {
    const p = document.getElementById('passkey').value;
    if(p === "25062RN2DY") {
        document.getElementById('auth-gate').style.display = 'none';
        document.getElementById('main-deck').style.display = 'flex';
    }
};

window.runSpire = async () => {
    // Your Gemini logic here...
};

// Do this for every function (nuke, tab, rotate, etc.)

