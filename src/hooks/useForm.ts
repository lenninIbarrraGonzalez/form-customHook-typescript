import { useState } from 'react';
import { DataForm } from '../interfaces/interface';

const INITIAL_STATE = {
  userName: '',
  email: '',
};

export const useForm = () => {
  const [formState, setFormState] = useState<DataForm>(INITIAL_STATE);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    if (name in formState) {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleReset = () => {
    setFormState(INITIAL_STATE);
  };

  return {
    ...formState,
    formState,
    handleChange,
    handleReset,
  };
};
