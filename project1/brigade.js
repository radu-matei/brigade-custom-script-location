const { events, Job } = require("brigadier");
const circle = require("./project1-module");

events.on("exec", () => {
  console.log("area of a circle with radius 3 " + circle.area(3));
});
