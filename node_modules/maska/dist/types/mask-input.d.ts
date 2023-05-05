import { Mask, MaskOptions } from './mask';
type OnMaskaType = (detail: MaskaDetail) => void;
export interface MaskInputOptions extends MaskOptions {
    onMaska?: OnMaskaType | OnMaskaType[];
    preProcess?: (value: string) => string;
    postProcess?: (value: string) => string;
}
export interface MaskaDetail {
    masked: string;
    unmasked: string;
    completed: boolean;
}
export declare class MaskInput {
    readonly options: MaskInputOptions;
    readonly items: Map<HTMLInputElement, Mask>;
    constructor(target: string | NodeListOf<HTMLInputElement> | HTMLInputElement, options?: MaskInputOptions);
    destroy(): void;
    needUpdateOptions(input: HTMLInputElement, opts: MaskInputOptions): boolean;
    needUpdateValue(input: HTMLInputElement): boolean;
    private getMaskOpts;
    private init;
    private readonly beforeinputEvent;
    private readonly inputEvent;
    private setMaskedValue;
}
export {};
