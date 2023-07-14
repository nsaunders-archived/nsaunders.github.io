import { ReadTimeResults } from "reading-time";

export type Props = {
  children: ReadTimeResults;
};

export default function FormatReadingTime({ children }: Props) {
  return <>{children.minutes.toFixed(0)} min read</>;
}
