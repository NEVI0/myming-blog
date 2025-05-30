export default function handleErrorMessage(
  error: any,
  defaultMessage?: string
) {
  if (error instanceof Error) {
    return error.message;
  }

  if ('message' in error) {
    return error.message;
  }

  return defaultMessage || 'Erro desconhecido...';
}
