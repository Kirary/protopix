vkBridge.send("VKWebAppInit");

const button = document.getElementById("yellow-btn");

const sound = new Howl({
  src: [require("../sounds/pew.mp3")],
});
sound.stereo(Math.random() * 2 - 1);

button.onclick = () => {
  button.classList.add("px-8");
  button.classList.add("py-12");
  button.classList.add("text-2xl");

  sound.stereo(Math.random() * 2 - 1);

  sound.play();

  setTimeout(() => {
    button.classList.remove("px-8");
    button.classList.remove("py-12");
    button.classList.remove("text-2xl");
  }, 200);
};

setInterval(() => {
  console.log(sound.state());
}, 100);
