interface Props {
    mode?: 'vertical' | 'horizontal';
    defaultActive?: string;
    maxHeight?: string | number;
    maxWidth?: string | number;
}
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (index: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSelect?: ((index: string) => any) | undefined;
}>, {
    maxHeight: string | number;
    maxWidth: string | number;
    mode: "vertical" | "horizontal";
    defaultActive: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
