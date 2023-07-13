import type { ReactNode } from "react";
import { PageBlock } from "@/components/PageBlock";
import Surface from "./Surface";

export type Props = {
  intro: ReactNode;
  children: ReactNode;
};

export default function Article({ intro, children }: Props) {
  return (
    <>
      <Surface
        theme="dark-gray"
        style={{
          marginBottom: 16,
        }}
      >
        <PageBlock
          style={{
            padding: "4em 0",
            position: "relative",
          }}
        >
          {intro}
        </PageBlock>
      </Surface>
      <PageBlock>{children}</PageBlock>
    </>
  );
}
