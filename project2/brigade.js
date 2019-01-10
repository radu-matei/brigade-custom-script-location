const { events, Job } = require("brigadier")

events.on("exec", () => {
  var sh = new Job("this-is-project2", "ubuntu:latest")


  sh.tasks = ["echo project2"];
  sh.run()
});