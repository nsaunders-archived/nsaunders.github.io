import { format } from "date-fns";

export type Props = {
  children: Date;
};

export default function FormatDate({ children }: Props) {
  return <>{format(children, "MMM d, yyyy")}</>;
}
