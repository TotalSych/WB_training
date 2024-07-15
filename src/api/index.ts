export async function fetchRepos(userName: string) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/repos`
  );

  return response;
}

export function fetchRepoByName(userName: string, repoName: string) {
  return fetch(`https://api.github.com/repos/${userName}/${repoName}`);
}
