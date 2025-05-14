import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z, ZodType } from 'zod';

export default async function checkRequestQuery<TSchema extends ZodType>(
  req: NextRequest,
  schema: TSchema,
): Promise<
  { success: true; data: z.output<TSchema> } | { success: false; response: NextResponse }
> {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const parsed = schema.safeParse(query);
    if (!parsed.success) {
      return {
        success: false,
        response: NextResponse.json({ error: parsed.error.flatten() }, { status: 400 }),
      };
    }

    return {
      success: true,
      data: parsed.data,
    };
  } catch {
    return {
      success: false,
      response: NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 }),
    };
  }
}
