#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import spaceTrim from 'spacetrim';
import { commit } from '../0-utils/commit';
import { findProjectsOnGithub } from './findProjectsOnGithub';

main();

async function main() {
    console.info(chalk.bgBlue(`🏭 Generate projects`));

    const program = new commander.Command();
    program.option('--commit', `Commit after generate`, false);

    program.parse(process.argv);
    const { commit: isCommit } = program.opts();

    const projects = await findProjectsOnGithub();

    const projectsContent = spaceTrim(
        (block) => `
        # 👨‍🏭 Projets

        All projects I have worked on:

        ${block(
            projects
                .map(({ name, url, organization }) =>
                    spaceTrim(`
                        - [${name}](${url})
                    `),
                )
                .join('\n'),
        )}
    
    `,
    );

    await writeFile(join(process.cwd(), 'documents/projects.en.md'), projectsContent, 'utf8');

    if (isCommit) {
        await commit({ projectPath: process.cwd(), message: `🏭 Generate projects` });
    }

    process.exit(0);
}
