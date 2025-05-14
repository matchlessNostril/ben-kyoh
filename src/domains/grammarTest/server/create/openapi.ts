import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { resourceResponseSchema } from '@/server/base/schemas/resource';
import { createGrammarTestRequestSchema } from './schema';

export const registerGrammarTestSchemas = (registry: OpenAPIRegistry) => {
  registry.register('CreateGrammarTestRequest', createGrammarTestRequestSchema);

  registry.registerPath({
    method: 'post',
    path: '/api/grammar-test/create',
    tags: ['GrammarTest'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: createGrammarTestRequestSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: 'complete to create grammar test',
        content: {
          'application/json': {
            schema: resourceResponseSchema,
          },
        },
      },
      400: {
        description: 'invalid request body',
      },
      401: {
        description: 'failed to authenticate',
      },
    },
  });
};
