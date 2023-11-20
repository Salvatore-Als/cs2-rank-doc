export interface ConfigVariable<T> {
    description: string;
    required: boolean;
    type: string;
    default_value: T;
}

export interface Config {
    file_path: string;
    description: string;
    variables: {
        [key: string]: ConfigVariable<any>;
    };
}

export type Configs = Config[];