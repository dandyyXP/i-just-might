const lyrics = [
    "Hey, Mister DJ",
    "Play a song for this pretty little lady",
    "Cause if she dance as good as she look right now",
    "I just might, I just might make her my baby",
    "I just might make her my baby"
] ;

let index = 0;

const messagesDiv =
document.getElementById("messages");
const button =
document.getElementById("nextBtn");

button.addEventListener("click", () => {
    if (index < lyrics.length) {
        const msg =
document.createElement("div");
        msg.classList.add("message", "user");
        msg.textContent = lyrics[index];

        messagesDiv.appendChild(msg);
        messagesDiv.scrollTop =
messagesDiv.scrollHeight;
       index++;
    } else {
        button.textContent = "vai tomando";
        button.disabled = true;
    }
});