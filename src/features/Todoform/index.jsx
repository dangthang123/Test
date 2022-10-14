import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/From-Controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object({
    title: yup.string()
      .required('please enter@')
      .max(100, 'long title0')
    // .min(10, 'small title'),


  }).required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema)
  });
  const handleSubmit = (values) => {
    // console.log('todo form:', values)
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  }
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name='title' label='Todotitle' form={form} />
    </form>
  )
}

export default TodoForm;
