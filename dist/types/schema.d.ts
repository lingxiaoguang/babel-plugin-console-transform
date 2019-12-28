declare const _default: {
    type: string;
    additionalProperties: boolean;
    properties: {
        env: {
            description: string;
            type: string;
        };
        removeMethods: {
            description: string;
            type: string;
            items: {
                description: string;
                oneOf: ({
                    type: string;
                    instanceof?: undefined;
                } | {
                    instanceof: string;
                    type?: undefined;
                })[];
            };
        };
        additionalStyleMethods: {
            description: string;
            type: string;
            additionalProperties: boolean;
        };
    };
    required: string[];
};
export default _default;
