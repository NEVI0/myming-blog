'use server';

import { makeDeleteAccountUseCase } from '@factories/useCases';

export default async function deleteAccountAction() {
  try {
    await makeDeleteAccountUseCase().execute();
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
