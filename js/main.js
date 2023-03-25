import bridge from "@vkontakte/vk-bridge";

console.log("start");
bridge
  .send("VKWebAppInit", {})
  .then((res) => {
    console.log("VKWebAppInit:", res);
  })
  .catch((reason) => {
    console.log("VKWebAppInitCatch", reason);
  });
console.log("after bridge");