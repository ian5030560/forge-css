#!/usr/bin/env node
import { program } from "commander";
import process from "process";
import forgeCss from ".";

program
    .name("forge-css-cli")
    .description("CLI of forge-css")
    .version("0.0.0");

type ForgeOption = {
    config?: string;
    output: string;
}

/**
 * @description
 * run 'forge' command to build a css file with sass files prebuilt.
 * 
 * @augments
 * -c, --config: The location of the configuration file.
 * -o, --output: The location of the output file.
 */
program
    .command("forge")
    .description("Build a css file with sass files prebuilt in the module.")
    .option("-c, --config <string>", "The location of the configuration file")
    .requiredOption("-o, --output <string>", "The location of the output file.")
    .action((options: ForgeOption) => forgeCss(options.output, options.config));

program.parse(process.argv);