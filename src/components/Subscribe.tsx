import exhausted from "@/utils/exhausted";
import Highlight from "./Highlight";
import SubscribeForm from "./SubscribeForm";
import Surface from "./Surface";
import Typography from "./Typography";

export default function Subscribe() {
  return (
    <Surface theme="light-gray">
      {({ style, ...restProps }) =>
        exhausted(restProps) && (
          <section
            style={{
              ...style,
              gap: "1em",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 2fr))",
            }}
          >
            <Surface theme="light-gray" style={{ padding: "3em" }}>
              <Typography variant="bold2XL">
                {({ style, ...restProps }) =>
                  exhausted(restProps) && <h1 style={style}>Stay informed</h1>
                }
              </Typography>
              <Typography variant="regularXL" margins>
                {({ style, ...restProps }) =>
                  exhausted(restProps) && (
                    <p style={style}>
                      Subscribe to email updates and be the first to know when I
                      post new content.
                    </p>
                  )
                }
              </Typography>
              <Typography>
                {({ style, ...restProps }) =>
                  exhausted(restProps) && (
                    <p style={style}>
                      <Highlight as="muted">
                        I hate spam as much as you do.
                        <br />
                        Unsubscribe at any time{"—"}no hard feelings!
                      </Highlight>
                    </p>
                  )
                }
              </Typography>
            </Surface>
            <SubscribeForm />
          </section>
        )
      }
    </Surface>
  );
}
