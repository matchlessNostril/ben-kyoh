import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { registerFolderSchemas } from '@/domains/folder/server/create/openapi';

export const registry = new OpenAPIRegistry();

registerFolderSchemas(registry);
