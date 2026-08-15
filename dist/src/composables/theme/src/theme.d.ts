export declare function useThemeTransition(initialDark?: boolean): {
    isDark: import('vue').Ref<boolean, boolean>;
    toggleTheme: () => Promise<void>;
};
