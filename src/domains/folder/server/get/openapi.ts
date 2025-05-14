import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { getFolderResourcesRequestSchema, getFolderResourcesResponseSchema } from './schema';

export const registerGetFolderResourcesSchemas = (registry: OpenAPIRegistry) => {
  registry.register('GetFolderResourcesRequest', getFolderResourcesRequestSchema);
  registry.register('GetFolderResourcesResponse', getFolderResourcesResponseSchema);

  registry.registerPath({
    method: 'get',
    path: '/api/folder/resources',
    tags: ['Folder'],
    request: {
      query: getFolderResourcesRequestSchema,
    },
    responses: {
      200: {
        description: 'successfully retrieved folder resources',
        content: {
          'application/json': {
            schema: getFolderResourcesResponseSchema,
          },
        },
      },
      400: {
        description: 'invalid query parameters',
      },
      401: {
        description: 'failed to authenticate',
      },
    },
  });
};
