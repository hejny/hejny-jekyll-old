export interface IProjectInfo {
    organizationName: string;
    organizationTitle?: string;

    name: string;
    title: string;
    projectUrl?: URL;
    repositoryUrl?: URL;
    priority: number;

    tags: Set<string>;
}

/**
 * TODO: In tags constrain string to exact union of 'old'|'draft'|...
 */
