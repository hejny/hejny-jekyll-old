import { IProjectInfo } from './generate-projects/interfaces/IProjectInfo';

/**
 *  Here are all non-github projects that I have worked on.
 */
export const PROJECTS: IProjectInfo[] = [
    {
        organizationName: 'birdlife-cz',
        name: `zastavky`,
        title: 'Zastávky',
        priority: 0,
        projectUrl: new URL(`https://zastavky.birdlife.cz/`),
    },
];
