interface QueryOption {
    query: string;
    type: string;
    description: string;
    required: boolean;
}

interface Data {
    structure: any;
    array: boolean;
}

export interface Route {
    method: "GET" | "DELETE" | "POST" | "PATH";
    route: string;
    description: string;
    query_options?: QueryOption[];
    data: Data;
}

export type Routes = Route[];