const program = require("commander");
const {
  current,
  forcast
} = require("./commands");

program.version("0.0.1").description("A command line weather application");

program
  .command("current <city>")
  .alias("c")
  .description("Get current weather for specified city")
  .action((city) => current(city));

program
  .command("forecast <city>")
  .alias("f")
  .description("Get weather forcast for specified city")
  .action((city) => forcast(city));

program.parse(process.argv)