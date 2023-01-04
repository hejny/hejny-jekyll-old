import { IProjectInfo } from './interfaces/IProjectInfo';

export function projectToMardown(project: IProjectInfo): string {
    const { title, projectUrl, repositoryUrl, priority } = project;

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

    return projectMardown;
}
