import { GitHubActivity } from '../data/activity'

export const Activity = () => {
  GitHubActivity.feed({ username: 'web3slinger', limit: 10, selector: '#gh-feed' })

  return (
    <div className="grid">
      <div id="gh-feed" />
    </div>
  )
}
