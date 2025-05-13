import { openApiDocument } from '@/server/openapi/document';

export async function GET() {
  return new Response(JSON.stringify(openApiDocument), {
    headers: { 'Content-Type': 'application/json' },
  });
}
