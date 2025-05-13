import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { createFolderRequestSchema, createFolderResponseSchema } from './schema';

export const registerFolderSchemas = (registry: OpenAPIRegistry) => {
  registry.register('CreateFolderRequest', createFolderRequestSchema);
  registry.register('CreateFolderResponse', createFolderResponseSchema);

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
        description: '폴더 생성 성공',
        content: {
          'application/json': {
            schema: createFolderResponseSchema,
          },
        },
      },
      400: {
        description: '요청 본문 유효성 오류',
      },
      401: {
        description: '인증 실패',
      },
    },
  });
};
