interface Props {
    index: string;
    title: string;
    disabled?: boolean;
    icon?: string;
    showTooltip?: boolean;
}
declare var __VLS_24: {}, __VLS_39: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_24) => any;
} & {
    default?: (props: typeof __VLS_39) => any;
};
declare const __VLS_base: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    disabled: boolean;
    icon: string;
    showTooltip: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
