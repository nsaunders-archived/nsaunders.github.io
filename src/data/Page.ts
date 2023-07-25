import * as t from "io-ts";
import * as tPromise from "io-ts-promise";

export async function getByName(name: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/nsaunders/writing/master/pages/${name}/index.md`,
    { next: { revalidate: 60 } }
  );
  return {
    name,
    imagePath: `https://github.com/nsaunders/writing/raw/master/pages/${name}/`,
    content: await tPromise.decode(t.string, await res.text()),
  };
}
