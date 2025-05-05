import { useState } from "react";

type FormState<T> = {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValues: React.Dispatch<React.SetStateAction<T>>;
};

export function useFormState<T extends Record<string, any>>(initialValues: T): FormState<T> {
  const [values, setValues] = useState(initialValues);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  return { values, handleChange, setValues };
}
