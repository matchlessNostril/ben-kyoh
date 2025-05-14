import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { resourceResponseSchema } from '@/server/schemas/createResource';
import { createFolderRequestSchema } from './schema';

export const registerCreateFolderSchemas = (registry: OpenAPIRegistry) => {
  registry.register('CreateFolderRequest', createFolderRequestSchema);

  registry.registerPath({
    method: 'post',
    path: '/api/folder/create',
    tags: ['Folder'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: createFolderRequestSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: 'complete to create folder',
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
