const GITHUB_REPO_OWNER = "jharvision";
const GITHUB_REPO_NAME = "jharvision";

export const CONTRIBUTORS_REVALIDATE_SECONDS = 60 * 60;

type GitHubContributorResponse = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
};

export type Contributor = {
  id: number;
  username: string;
  avatarUrl: string;
  profileUrl: string;
  contributions: number;
};

export type ContributorsRepository = {
  owner: string;
  name: string;
  url: string;
  contributorsUrl: string;
};

export type ContributorsResult = {
  contributors: Contributor[];
  error: string | null;
  repository: ContributorsRepository;
};

const repository: ContributorsRepository = {
  owner: GITHUB_REPO_OWNER,
  name: GITHUB_REPO_NAME,
  url: `https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`,
  contributorsUrl: `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contributors`
};

function getGitHubErrorMessage(status: number) {
  if (status === 403) {
    return "GitHub API rate limits were hit. Please try again in a little while.";
  }

  if (status === 404) {
    return "The configured GitHub repository could not be found.";
  }

  return "GitHub did not return contributor data successfully.";
}

export async function getContributors(limit?: number): Promise<ContributorsResult> {
  try {
    const response = await fetch(repository.contributorsUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "JharVision"
      },
      next: {
        revalidate: CONTRIBUTORS_REVALIDATE_SECONDS
      }
    });

    if (!response.ok) {
      return {
        contributors: [],
        error: getGitHubErrorMessage(response.status),
        repository
      };
    }

    const payload = (await response.json()) as GitHubContributorResponse[];

    if (!Array.isArray(payload)) {
      return {
        contributors: [],
        error: "GitHub returned an unexpected contributor payload.",
        repository
      };
    }

    const contributors = payload
      .filter(
        (contributor) =>
          contributor.type !== "Bot" && !contributor.login.toLowerCase().endsWith("[bot]")
      )
      .map((contributor) => ({
        id: contributor.id,
        username: contributor.login,
        avatarUrl: contributor.avatar_url,
        profileUrl: contributor.html_url,
        contributions: contributor.contributions
      }))
      .sort((left, right) => right.contributions - left.contributions);

    return {
      contributors: typeof limit === "number" ? contributors.slice(0, limit) : contributors,
      error: null,
      repository
    };
  } catch {
    return {
      contributors: [],
      error: "GitHub is temporarily unreachable from the server.",
      repository
    };
  }
}
