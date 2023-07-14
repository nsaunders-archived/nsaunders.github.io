// source https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924#issuecomment-1563621855
import {
  type FormData as FormDataType,
  type Headers as HeadersType,
  type Request as RequestType,
  type Response as ResponseType,
} from "undici";

declare global {
  export const {
    FormData,
    Headers,
    Request,
    Response,
    fetch,
  }: typeof import("undici");

  type FormData = FormDataType;
  type Headers = HeadersType;
  type Request = RequestType;
  type Response = ResponseType;
}
