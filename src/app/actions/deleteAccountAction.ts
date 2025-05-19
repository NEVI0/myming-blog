'use server';

import { makeDeleteAccountUseCase } from '@factories/useCases';

export default async function deleteAccountAction() {
  try {
    await makeDeleteAccountUseCase().execute();
  } catch (error) {
    console.log({ error });
  }
}
