export interface IOrganizationInfo {
    organizationName: string;
    organizationTitle: string;
    projects: IProjectInfo[];
}

export interface IProjectInfo {
    name: string;
    title: string;
    url: URL;
    organizationName: string;
}
