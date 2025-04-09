declare module 'prompts' {
    interface PromptObject {
        type: string;
        name: string;
        message: string;
        initial?: any;
        choices?: Array<{ title: string; value: any }>;
        validate?: (value: any) => boolean | string | Promise<boolean | string>;
    }

    function prompts(
        questions: PromptObject | PromptObject[],
        options?: { onCancel?: () => void }
    ): Promise<Record<string, any>>;

    export = prompts;
} 