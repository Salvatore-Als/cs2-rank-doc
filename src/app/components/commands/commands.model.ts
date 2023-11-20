export type Command = {
    name: string;
    description: string;
    chat_triggers: string[],
    console_triggers: string[],
    arguments?: {
        name: string;
        type: string;
        required: boolean;
        description: string;
    }[];
}

export type Commands = Command[];