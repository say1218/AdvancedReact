import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for fields/inputs
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e) => {
    const { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      alert('hellooo');
      // console.log(e.target.files);
      [value] = e.target.files;
    }

    setInputs({ ...inputs, [name]: value });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const newObjStructure = Object.entries(inputs).map(([key, value]) => [
      key,
      '',
    ]);
    const blankState = Object.fromEntries(newObjStructure);
    setInputs(blankState);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
