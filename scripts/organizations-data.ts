import { IOrganizationInfo } from './generate-projects/interfaces/IOrganizationInfo';

export const ORGANIZATIONS: Array<Omit<IOrganizationInfo, 'projects'>> = [
    // TODO: List theese organizations dynamically
    // https://github.com/settings/organizations

    // TODO: !!! Make cathegory/organization for libraries + hackathon projects (with GH tag) (and maybe some more)

    //{ organizationName: 'AllForJan', organizationTitle: 'AllForJan' },
    { organizationName: 'birdlife-cz', organizationTitle: '🐦 Česká společnost ornitologická' },
    { organizationName: 'collboard', organizationTitle: '🖋 Collboard.com' },
    // {organizationName: 'Hackathon-Vzdelavani', organizationTitle: 'AllForJan'},
    // {organizationName: 'jumpingcoders', organizationTitle: 'AllForJan'},
    // {organizationName: 'KodujProCesko2018', organizationTitle: 'AllForJan'},
    // {organizationName: 'Learn-by-doing', organizationTitle: 'AllForJan'},
    { organizationName: 'sigmastamp', organizationTitle: '📜 SigmaStamp' },
    // { organizationName: 'SmartCityHackathon', organizationTitle: 'AllForJan' },
    // { organizationName: 'student-dreamers', organizationTitle: 'AllForJan' },
    // { organizationName: 'teamhackback', organizationTitle: 'AllForJan' },
    // { organizationName: 'techheavencz', organizationTitle: 'AllForJan' },
    // {organizationName: 'thefindersteam', organizationTitle: 'AllForJan'},
    { organizationName: 'toilet-pay', organizationTitle: '🧻 Toilet Pay' },
    { organizationName: 'townsgame', organizationTitle: '🌆 Towns' },
    { organizationName: 'vrpaint', organizationTitle: '🖌 VR paint' },
    { organizationName: 'webappgames', organizationTitle: '🎮 WebAppGames' },
];

// TODO: List all organizations for user dynamically in findProjectsOnGithub
/*const { data: organizationsPage } = await githubOctokit.rest.orgs.listForUser({
    username: GITHUB_USERNAME,
    page: 2,
    per_page: 100, // TODO: pagination
});
*/
