const { events, Job } = require("brigadier")

events.on("exec", () => {
  var sh = new Job("this-is-project1", "ubuntu:latest")


  sh.tasks = ["echo project1"];
  sh.run()
});