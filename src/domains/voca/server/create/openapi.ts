import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { resourceResponseSchema } from '@/server/schemas/createResource';
import { createVocaRequestSchema } from './schema';

export const registerCreateVocaSchemas = (registry: OpenAPIRegistry) => {
  registry.register('CreateVocaRequest', createVocaRequestSchema);

  registry.registerPath({
    method: 'post',
    path: '/api/voca/create',
    tags: ['Voca'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: createVocaRequestSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: 'complete to create voca',
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
