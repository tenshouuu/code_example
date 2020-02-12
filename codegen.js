const { generate } = require('@graphql-codegen/cli');

const { NODE_ENV } = process.env;
const dotenv = require('dotenv').config({
    path: `./.env.${NODE_ENV}`,
});

const { API_HOST } = dotenv.parsed;

function generateFragments() {
    const generatedFiles = generate(
        {
            schema: [
                API_HOST,
                './src/apollo/client-schema.graphql'
            ],
            documents: [
                './src/containers/**/*.graphql',
                './src/components/**/*.{ts,graphql}',
                './src/pages/**/*.{ts,graphql}',
                './src/ui/components/**/*.graphql',
                './src/apollo/fragments/**/*.{ts,tsx,graphql}',
            ],
            generates: {
                [`${process.cwd()}/src/apollo/schemaTypes.ts`]: {
                    plugins: [
                        'typescript',
                        'typescript-operations',
                        'fragment-matcher',
                    ],
                    config: {
                        avoidOptionals: false,
                    },
                },
                [`${process.cwd()}/schema.json`]: {
                    plugins: [
                        'introspection'
                    ]
                }
            },
        },
        true,
    );
}

// generateFragments()
