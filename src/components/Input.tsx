import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, Input, InputField } from '@gluestack-ui/themed';
import { AlertCircleIcon } from 'lucide-react-native';
import { ComponentProps } from 'react';

type Props = {
    placeholder: string
    variant?: 'DEFAULT' | 'LIGHT'
    invalidErrorMessage?: string
    containerProps?: ComponentProps<typeof FormControl>
    inputProps?: ComponentProps<typeof InputField>
}

export default function FormInput({ placeholder, variant = 'DEFAULT', invalidErrorMessage, containerProps, inputProps }: Props) {
    return (
        <FormControl w={'$full'} isInvalid={invalidErrorMessage ? true : false} {...containerProps}> 
            <Input
                bg={variant === 'LIGHT' ? '$gray600' : '$gray700'}
                h='$14'
                borderColor={invalidErrorMessage ? '$red700' : 'transparent'}
                $focus={{ borderColor: invalidErrorMessage ? 'inherit' : '$green500' }}
                >
                <InputField placeholder={placeholder} color='$white' {...inputProps} />
            </Input>

            <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>{invalidErrorMessage}</FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}