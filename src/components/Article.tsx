import Heading from "@/components/Heading";
import { PageBlock } from "@/components/PageBlock";
import ifExhausted from "@/utils/ifExhausted";
import { ReactNode } from "react";
import Surface from "./Surface";

export type Props = {
  intro: ReactNode;
  children: ReactNode;
};

export default function Article({ intro, children }: Props) {
  return (
    <>
      <Surface
        color="dark-gray"
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
