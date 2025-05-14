import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { resourceResponseSchema } from '@/server/base/schemas/resource';
import { createGrammarRequestSchema } from './schema';

export const registerGrammarSchemas = (registry: OpenAPIRegistry) => {
  registry.register('CreateGrammarRequest', createGrammarRequestSchema);

  registry.registerPath({
    method: 'post',
    path: '/api/grammar/create',
    tags: ['Grammar'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: createGrammarRequestSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: 'complete to create grammar',
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
