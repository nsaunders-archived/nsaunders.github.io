import { ComponentProps, isValidElement, ReactNode } from "react";
import cx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkRemoveComments from "remark-remove-comments";
import Prism from "prismjs";
import slug from "slug";
import Anchor from "./Anchor";
import Code from "./Code";
import HeadingImpl from "./Heading";
import Paragraph from "./Paragraph";
import ProseWrapper from "./ProseWrapper";

import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import Surface from "./Surface";
import exhausted from "@/utils/exhausted";
import LinkIcon from "./LinkIcon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isIterable(x: any): x is Iterable<unknown> {
  return Symbol.iterator in x;
}

function getStrings(children: ReactNode | ReactNode[]): string[] {
  if (!children) {
    return [];
  }
  if (isValidElement(children)) {
    return getStrings(children.props.children);
  }
  if (typeof children === "string") {
    return [children];
  }
  if (isIterable(children)) {
    return Array.from(children).flatMap(getStrings);
  }
  return [];
}

const Heading: Exclude<
  ComponentProps<typeof ReactMarkdown>["components"],
  undefined
>["h1"] = function Heading({
  children,
  className = "",
  level,
  node: _node,
  ...restProps
}) {
  if (
    level === 1 ||
    level === 2 ||
    level === 3 ||
    level === 4 ||
    level === 5 ||
    level === 6
  ) {
    const headingText = getStrings(children).join(" ");
    return (
      <HeadingImpl
        id={slug(headingText)}
        level={level}
        className={`${className} md-heading`}
        {...restProps}
      >
        <a href={`#${slug(headingText)}`} className="md-heading__anchor">
          <div className="md-heading__anchor-icon">
            <LinkIcon size={20} />
          </div>
        </a>
        {children}
      </HeadingImpl>
    );
  }
  return <>{children}</>;
};

const defaultComponents: ComponentProps<typeof ReactMarkdown>["components"] = {
  a: ({ node: _node, ...restProps }) => <Anchor {...restProps} />,
  blockquote: ({ node: _node, style: blockquoteStyle, ...blockquoteRest }) => (
    <Surface theme="black">
      {({ style: surfaceStyle, ...surfaceRest }) =>
        exhausted(surfaceRest) && (
          <blockquote
            style={{
              ...blockquoteStyle,
              ...surfaceStyle,
              marginRight: 0,
              marginLeft: 0,
              padding: "0.02px 1em 0.02px 2em",
              boxShadow: "inset 8px 0 0 0 var(--gold-500)",
            }}
            {...blockquoteRest}
          />
        )
      }
    </Surface>
  ),
  code: ({ children, className, inline, node: _node, ...restProps }) => {
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
  p: ({ children, node: _node, ...restProps }) => (
    <Paragraph {...restProps}>{children}</Paragraph>
  ),
};

const Markdown: typeof ReactMarkdown = function Markdown({
  components,
  remarkPlugins,
  ...restProps
}) {
  return (
    <ProseWrapper>
      <ReactMarkdown
        components={{ ...defaultComponents, ...components }}
        remarkPlugins={[remarkRemoveComments, ...(remarkPlugins || [])]}
        {...restProps}
      />
    </ProseWrapper>
  );
};
Markdown.propTypes = ReactMarkdown.propTypes;

export default Markdown;
