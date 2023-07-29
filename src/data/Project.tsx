export async function getSummary(name: string, owner: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/nsaunders/writing/master/projects/${owner}/${name}.md`
  );
  if (!res.ok) {
    throw new Error(`Unexpected response ${res.status} (${res.statusText})`);
  }
  return await res.text();
}
