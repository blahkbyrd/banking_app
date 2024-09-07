import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';


interface formFieldProps {
    control: Control<z.infer<typeof authFormSchema>>;
    name: FieldPath<z.infer<typeof authFormSchema>>;
    label: string;
    placeholder: string;
    type: string;
  }

const Field = ({control, name, label, placeholder, type="text"}: formFieldProps) => {
    return (
        <>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <div className='form-item'>
                        <FormLabel className='form-label'>{label}</FormLabel>
                        <div className="flex w-full flex-col">
                            <FormControl>
                                <Input placeholder={placeholder} className='input-class' {...field} type={type}/>
                            </FormControl>
                            <FormMessage className='form-message mt-2' />
                        </div>
                    </div>
                )}
            />
        </>
    )
}

export default Field
