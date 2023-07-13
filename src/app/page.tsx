import Article from "@/components/Article";
import Highlight from "@/components/Highlight";
import Typography from "@/components/Typography";
import ifExhausted from "@/utils/ifExhausted";

export default function Home() {
  return (
    <Article
      intro={
        <>
          <Typography variant="regular3XL" margins>
            {({ style, ...restProps }) =>
              ifExhausted(
                restProps,
                <p style={style}>
                  <Highlight as="bright">Hi there, I&apos;m Nick.</Highlight>
                </p>
              )
            }
          </Typography>
          <Typography variant="regularXL" margins>
            {({ style, ...restProps }) =>
              ifExhausted(
                restProps,
                <p style={style}>
                  I&apos;m an experienced software engineer focused on React,
                  TypeScript, and Design Systems. I also dabble in functional
                  programming via PureScript.
                </p>
              )
            }
          </Typography>
        </>
      }
    >
      TODO
    </Article>
  );
}
