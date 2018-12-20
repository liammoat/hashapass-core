import { b64_hmac_sha1 } from './sha1';

export interface IOption {
    len?: number
}

export function generate (parameter: string, master: string, opts: IOption): string {
    opts = opts || {};
    return b64_hmac_sha1(master, parameter).substr(0, opts.len || 8);
};