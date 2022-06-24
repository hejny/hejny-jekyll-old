#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { commit } from '../0-utils/commit';
import { findAllProjectsRemote } from './findAllProjectsRemote';

main();

async function main() {

    console.info(chalk.bgBlue(`🏭 Generate projects`));

    const program = new commander.Command();
    program.option('--commit', `Commit after generate`,false);


    program.parse(process.argv);
    const { commit:isCommit } = program.opts();

    for (const [org, projectUrls] of Object.entries(await findAllProjectsRemote())) {
        console.info(chalk.bgYellowBright(org));
        for (const projectUrl of projectUrls) {
            console.info(chalk.bgGreen(projectUrl));
        }
    }

    if(isCommit){
        await commit({projectPath: process.cwd(), message: `🏭 Generate projects`});
    }
    

    process.exit(0);
}
