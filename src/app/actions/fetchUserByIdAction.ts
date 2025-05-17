'use server';

import { z } from 'zod';

import { FetchUserByIdDTO } from '@domain/dtos';
import { makeFetchUserByIdUseCase } from '@factories/useCases';

const schema = z.object({
  id: z.string(),
});

export default async function fetchUserByIdAction(params: FetchUserByIdDTO) {
  try {
    const dto = schema.parse(params);
    const user = await makeFetchUserByIdUseCase().execute(dto);

    if (!user) return { user: null };
    return { user: user.toJson() };
  } catch (error) {
    return { user: null };
  }
}
