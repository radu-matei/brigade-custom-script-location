const { events, Job } = require("brigadier")

events.on("exec", () => {
  var sh = new Job("this-is-root", "ubuntu:latest")


  sh.tasks = ["echo root"];
  sh.run()
});