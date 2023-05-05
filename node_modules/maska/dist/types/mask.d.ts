import { MaskTokens } from './tokens';
export type MaskType = string | string[] | ((input: string) => string) | null;
export interface MaskOptions {
    mask?: MaskType;
    tokens?: MaskTokens;
    tokensReplace?: boolean;
    eager?: boolean;
    reversed?: boolean;
}
export declare class Mask {
    readonly opts: MaskOptions;
    private readonly memo;
    constructor(defaults?: MaskOptions);
    masked(value: string): string;
    unmasked(value: string): string;
    isEager(): boolean;
    isReversed(): boolean;
    completed(value: string): boolean;
    private findMask;
    private escapeMask;
    private process;
}
