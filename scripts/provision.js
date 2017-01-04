module.exports = function(robot) {
  robot.respond("/provision/i", (message) => {
    message.send("You asked me to provision");
  });
};