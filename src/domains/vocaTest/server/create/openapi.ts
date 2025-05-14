import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { resourceResponseSchema } from '@/server/base/schemas/resource';
import { createVocaTestRequestSchema } from './schema';

export const registerVocaTestSchemas = (registry: OpenAPIRegistry) => {
  registry.register('CreateVocaTestRequest', createVocaTestRequestSchema);

  registry.registerPath({
    method: 'post',
    path: '/api/voca-test/create',
    tags: ['VocaTest'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: createVocaTestRequestSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: 'complete to create voca test',
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
