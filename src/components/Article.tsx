import Heading from "@/components/Heading";
import { PageBlock } from "@/components/PageBlock";
import ifExhausted from "@/utils/ifExhausted";
import { ReactNode } from "react";

export type Props = {
  intro: ReactNode;
  children: ReactNode;
};

export default function Article({ intro, children }: Props) {
  return (
    <>
      <div
        style={{
          "--bg": "var(--gray-800)",
          "--fg-muted": "var(--gray-300)",
          background: "var(--bg)",
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
      </div>
      <PageBlock>{children}</PageBlock>
    </>
  );
}
