import { GitHubActivity } from '../data/github-activity'

export const GitHubActivityFeed = () => {
  GitHubActivity.feed({ username: 'web3slinger', limit: 10, selector: '#gh-feed' })

  return <div id="gh-feed" />
}
