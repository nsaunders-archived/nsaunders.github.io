import { ComponentProps } from "react";
import cx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkRemoveComments from "remark-remove-comments";
import {
  Anchor,
  Code,
  Heading as HeadingImpl,
  Paragraph,
  Wrapper,
} from "./html";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

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
  a: (props) => <Anchor {...props} />,
  code: ({ children, className, inline, node, ...restProps }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (inline || !match || match.length < 2) {
      return <Code {...restProps}>{children}</Code>;
    }
    return (
      <Code>
        {({ className: codeClassName, ...restProps }) => (
          <div
            {...restProps}
            className={cx(className, codeClassName)}
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                String(children),
                Prism.languages[match[1]],
                match[1]
              ),
            }}
          />
        )}
      </Code>
    );
  },
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
