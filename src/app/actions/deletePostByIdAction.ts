'use server';

import { z } from 'zod';

import { DeletePostByIdDTO } from '@domain/dtos';
import { makeDeletePostByIdUseCase } from '@factories/useCases';

const schema = z.object({
  id: z.string(),
});

export default async function deletePostByIdAction(params: DeletePostByIdDTO) {
  try {
    const dto = schema.parse(params);
    await makeDeletePostByIdUseCase().execute(dto);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
