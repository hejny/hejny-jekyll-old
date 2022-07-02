import fetch from 'cross-fetch';
import spaceTrim from 'spacetrim';
import { PackageJson } from 'type-fest';
import { getRawUrlOnGithub } from './getRawUrlOnGithub';

export async function findProjectTitle(projectUrl: URL): Promise<string | null> {
    // Option /1/ Read the project README on GitHub and extract the title from the first H1
    const readmeUrl = getRawUrlOnGithub(new URL(projectUrl.href + '/blob/master/README.md'));
    const readmeResponse = await fetch(readmeUrl.href);
    if (readmeResponse.ok) {
        const readmeText = await readmeResponse.text();
        const readmeTitles = readmeText.matchAll(/^#\s*(?<title>[^#\n]*)$/gm);
        for (const readmeTitle of Array.from(readmeTitles)) {
            if (!/This [a-zA-Z0-9\s]*(project|app)/i.test(readmeTitle.groups!.title)) {
                return spaceTrim(readmeTitle.groups!.title);
            }
        }
    }

    // Option /2/  Read the project package.json on GitHub and extract the name

    const packageJsonUrl = getRawUrlOnGithub(new URL(projectUrl.href + '/blob/master/package.json'));
    const packageJsonResponse = await fetch(packageJsonUrl.href);
    if (packageJsonResponse.ok) {
        const packageJson = (await packageJsonResponse.json()) as PackageJson;
        if (packageJson.name) {
            return packageJson.name;
        }
    }

    return null;
}

/**
 * !!! Every project should have icon
 */
