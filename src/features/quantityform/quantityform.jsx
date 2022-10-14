import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../components/From-Controls/InputField';

Quantityform.propTypes = {
    onSubmit: PropTypes.func,
};
function Quantityform({ onSubmit = null }) {
    const schema = yup.object().shape({
        quantity: yup.number()
            .required('Please quantitty')
            .min(1, 'Min 1')
            .max(20, 'Max 20')
            .typeError('Please type a quantity'),
    });
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        // const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="quantity" label="Quantity" form={form} />
            <Button type="submit" variant="contained" color="primary" size="large">ADD TO CART</Button>

        </form>
    );
}

export default Quantityform;