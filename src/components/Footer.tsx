import exhausted from "@/utils/exhausted";
import Anchor from "./Anchor";
import Surface from "./Surface";

export default function Footer() {
  return (
    <Surface theme="black">
      {({ style, ...restProps }) =>
        exhausted(restProps) && (
          <footer style={{ ...style, marginTop: "4em", padding: "1em" }}>
            <div style={{ display: "flex", gap: 16 }}>
              <Anchor href="https://twitter.com/agilecoder">Twitter</Anchor>
              <Anchor href="https://github.com/nsaunders">GitHub</Anchor>
              <Anchor href="https://linkedin.com/in/nicksaunders">
                LinkedIn
              </Anchor>
              <div style={{ flex: 1 }} />
              <Anchor href="https://nsaunders.dev/rss.xml">RSS</Anchor>
            </div>
          </footer>
        )
      }
    </Surface>
  );
}
