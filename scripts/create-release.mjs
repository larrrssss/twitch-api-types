import { readFile } from 'node:fs/promises';
import { Octokit } from '@octokit/action';

const octokit = new Octokit();
const packageJson = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url), { encoding: 'utf8' }),
);
const [OWNER, REPOSITORY] = process.env.GITHUB_REPOSITORY.split('/');

const { data: releaseChangelog } = await octokit.repos.generateReleaseNotes({
  owner: OWNER,
  repo: REPOSITORY,
  tag_name: packageJson.version,
});

console.log(`🎉 Creating new release for twitch-api-types ${packageJson.version}`);

const release = await octokit.repos.createRelease({
  owner: OWNER,
  repo: REPOSITORY,
  tag_name: packageJson.version,
  name: packageJson.version,
  body: releaseChangelog,
});

console.log(`✅ Done! Release created at ${release.data.html_url}`);
