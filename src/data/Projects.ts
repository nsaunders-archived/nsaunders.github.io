import * as cheerio from "cheerio";

const username = "nsaunders";

export async function list() {
  const res = await fetch(`https://github.com/${username}`);
  if (!res.ok) {
    throw new Error(`Unexpected ${res.status} response: ${res.statusText}`);
  }
  const html = await res.text();
  const $ = cheerio.load(html);
  return $(".pinned-item-list-item-content")
    .map(function () {
      const owner: string = $(this).find("a .owner").text().trim() || username;
      const name: string = $(this).find("a .repo").text().trim();
      const description: string = $(this)
        .find(".pinned-item-desc")
        .text()
        .trim();
      const languageColor =
        $(this).find(".repo-language-color").css("background-color") ||
        "var(--black)";
      const languageName = $(this)
        .find("[itemProp='programmingLanguage']")
        .text()
        .trim();
      const stars =
        parseInt($(this).find("a[href$='stargazers']").text().trim()) || 0;
      const forks =
        parseInt($(this).find("a[href$='forks']").text().trim()) || 0;
      return {
        url: `https://github.com/${owner}/${name}`,
        owner,
        name,
        description,
        language: { name: languageName, color: languageColor },
        stars,
        forks,
      };
    })
    .toArray();
}

export async function getFeatured() {
  const [featured] = await list();
  return featured;
}
