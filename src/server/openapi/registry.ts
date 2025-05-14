import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

import { resourceRequestSchema, resourceResponseSchema } from '../base/schemas/resource';

import { registerFolderSchemas } from '@/domains/folder/server/create/openapi';
import { registerVocaSchemas } from '@/domains/voca/server/create/openapi';
import { registerVocaTestSchemas } from '@/domains/vocaTest/server/create/openapi';
import { registerGrammarSchemas } from '@/domains/grammar/server/create/openapi';
import { registerGrammarTestSchemas } from '@/domains/grammarTest/server/create/openapi';

export const registry = new OpenAPIRegistry();

// 共通スキマ
registry.register('ResourceRequestSchema', resourceRequestSchema);
registry.register('ResourceResponseSchema', resourceResponseSchema);

// API別
registerFolderSchemas(registry);
registerVocaSchemas(registry);
registerVocaTestSchemas(registry);
registerGrammarSchemas(registry);
registerGrammarTestSchemas(registry);
