import { toast as sonnerToast } from 'sonner';

import { XCircle } from 'lucide-react';

export default function useToast() {
  const success = (message: string) => {
    sonnerToast(message, {
      position: 'bottom-right',
      dismissible: true,
      duration: 5,
      // icon: <XCircle />,
      closeButton: true,
      action: <p>rtestre</p>,
      cancel: <p>rtestre</p>,
      description: 'fhdbfhjsdbfhjds',
      invert: true,
      richColors: true,
      style: {
        border: 1,
        borderColor: 'red',
        backgroundColor: 'red',
      },
    });
  };

  const error = (message: string) => {
    sonnerToast(message, {
      position: 'bottom-right',
    });
  };

  return {
    toast: {
      success: success,
      error: error,
    },
  };
}
