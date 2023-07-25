// source https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924#issuecomment-1563621855
import {
  type FormData as FormDataType,
  type Headers as HeadersType,
  type Request as RequestType,
  type Response as ResponseType,
} from "undici";
import { fetch as fetchImpl } from "undici";

declare global {
  export const {
    FormData,
    Headers,
    Request,
    Response,
  }: typeof import("undici");

  export const fetch: (
    input: Parameters<typeof fetchImpl>[0],
    init?: Exclude<Parameters<typeof fetchImpl>[1], undefined> & {
      next?: NextFetchRequestConfig;
    }
  ) => ReturnType<typeof fetchImpl>;

  type FormData = FormDataType;
  type Headers = HeadersType;
  type Request = RequestType;
  type Response = ResponseType;
}
