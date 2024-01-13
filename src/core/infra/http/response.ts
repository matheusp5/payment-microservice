
export class HttpResponse<T> {
    public _code: number
    public _content: T | null
    constructor(code: number, content: T | null) {
        this._code = code;
        this._content = content
    }
}