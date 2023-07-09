import Heading from "@/components/Heading";
import { PageBlock } from "@/components/PageBlock";
import { ifExhausted } from "@/utils/ifExhausted";
import { ReactNode } from "react";

export type Props = {
  intro: ReactNode;
  children: ReactNode;
};

export default function Article({ intro, children }: Props) {
  return (
    <>
      <div style={{ background: "var(--gray-800)", marginBottom: 16 }}>
        <Heading level={1}>
          {({ style, ...restProps }) =>
            ifExhausted(
              restProps,
              <PageBlock
                style={{
                  ...style,
                  marginBlockStart: 0,
                  marginBlockEnd: 0,
                  padding: "2em 0",
                  position: "relative",
                }}
              >
                {intro}
              </PageBlock>
            )
          }
        </Heading>
      </div>
      <PageBlock>{children}</PageBlock>
    </>
  );
}
