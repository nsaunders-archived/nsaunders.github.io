import ifExhausted from "@/utils/ifExhausted";
import Anchor from "./Anchor";
import Surface from "./Surface";

export default function Footer() {
  return (
    <Surface theme="black">
      {({ style, ...restProps }) =>
        ifExhausted(
          restProps,
          <footer style={{ ...style, marginTop: "2em", padding: "1em" }}>
            <div style={{ display: "flex", gap: 16 }}>
              <Anchor href="https://twitter.com/agilecoder">Twitter</Anchor>
              <Anchor href="https://github.com/nsaunders">GitHub</Anchor>
              <Anchor href="https://linkedin.com/in/nicksaunders">
                LinkedIn
              </Anchor>
            </div>
          </footer>
        )
      }
    </Surface>
  );
}
