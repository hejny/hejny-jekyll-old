import { IProjectInfo } from './interfaces/IProjectInfo';
import { removeMarkdownFormatting } from './removeMarkdownFormatting';

export function projectToMardown(project: IProjectInfo): string {
    const { title, projectUrl, repositoryUrl, tags } = project;

    /*/
    // Note: Keeping for debugging purposes
    if (name === 'glTF-Sample-Models') {
        console.log({ project });
    }
    /**/

    let projectMardown = `[${title}](${repositoryUrl || '#'})`;

    if (projectUrl) {
        projectMardown += ` *[🔗](${projectUrl})[👨‍💻](${repositoryUrl})*`;
    }

    if (tags.has('draft')) {
        projectMardown = `*(draft) ${removeMarkdownFormatting(projectMardown)}*`;
    }

    return projectMardown;
}
