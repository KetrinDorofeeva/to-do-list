interface MaskToken {
    pattern: RegExp;
    multiple?: boolean;
    optional?: boolean;
    repeated?: boolean;
    transform?: (char: string) => string;
}
export type MaskTokens = Record<string, MaskToken>;
export declare const tokens: MaskTokens;
export {};
