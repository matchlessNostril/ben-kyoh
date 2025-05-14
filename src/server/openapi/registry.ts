import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

import { resourceRequestSchema, resourceResponseSchema } from '../schemas/createResource';
import { folderSchema } from '../schemas/folder';
import { fileSchema } from '../schemas/file';

import { registerCreateFolderSchemas } from '@/domains/folder/server/create/openapi';
import { registerCreateVocaSchemas } from '@/domains/voca/server/create/openapi';
import { registerCreateVocaTestSchemas } from '@/domains/vocaTest/server/create/openapi';
import { registerCreateGrammarSchemas } from '@/domains/grammar/server/create/openapi';
import { registerCreateGrammarTestSchemas } from '@/domains/grammarTest/server/create/openapi';
import { registerGetFolderResourcesSchemas } from '@/domains/folder/server/get/openapi';

export const registry = new OpenAPIRegistry();

// 共通スキーマ
registry.register('ResourceRequestSchema', resourceRequestSchema);
registry.register('ResourceResponseSchema', resourceResponseSchema);
registry.register('FolderSchema', folderSchema);
registry.register('FileSchema', fileSchema);

// API別
registerCreateFolderSchemas(registry);
registerCreateVocaSchemas(registry);
registerCreateVocaTestSchemas(registry);
registerCreateGrammarSchemas(registry);
registerCreateGrammarTestSchemas(registry);
registerGetFolderResourcesSchemas(registry);
