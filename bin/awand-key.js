const program = require("commander");

program
	.command("set")
	.description("Set API Key -- get at https://nomics.com")
	.action(() => console.log("hello from set"));

program.parse(process.argv);
