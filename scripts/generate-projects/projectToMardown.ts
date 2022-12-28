import { IProjectInfo } from './interfaces/IProjectInfo';

export function projectToMardown(project: IProjectInfo): string {
    const { title, projectUrl, repositoryUrl, priority } = project;


    /*/
    // Note: for debugging purposes
    if (name === 'glTF-Sample-Models') {
        console.log({ project });
    }
    /**/
    return `-   [${title}](${projectUrl || repositoryUrl || '#'})`;
}
