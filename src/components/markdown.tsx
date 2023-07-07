import { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkRemoveComments from "remark-remove-comments";
import { Code, Heading as HeadingImpl, Paragraph, Wrapper } from "./prose";

const Heading: Exclude<
  ComponentProps<typeof ReactMarkdown>["components"],
  undefined
>["h1"] = function Heading({ children, level, node, ...restProps }) {
  if (
    level === 1 ||
    level === 2 ||
    level === 3 ||
    level === 4 ||
    level === 5 ||
    level === 6
  ) {
    return (
      <HeadingImpl level={level} {...restProps}>
        {children}
      </HeadingImpl>
    );
  }
  return <>{children}</>;
};

const defaultComponents: ComponentProps<typeof ReactMarkdown>["components"] = {
  code: ({ children, inline, node, ...restProps }) => (
    <Code {...restProps}>{children}</Code>
  ),
  h1: Heading,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  h5: Heading,
  h6: Heading,
  p: ({ children, node, ...restProps }) => (
    <Paragraph {...restProps}>{children}</Paragraph>
  ),
};

const Markdown: typeof ReactMarkdown = function Markdown({
  components,
  remarkPlugins,
  ...restProps
}) {
  return (
    <Wrapper>
      <ReactMarkdown
        components={{ ...defaultComponents, ...components }}
        remarkPlugins={[remarkRemoveComments, ...(remarkPlugins || [])]}
        {...restProps}
      />
    </Wrapper>
  );
};
Markdown.propTypes = ReactMarkdown.propTypes;

export default Markdown;
