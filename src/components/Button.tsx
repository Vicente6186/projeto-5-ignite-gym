import { ButtonText, Button as GlueStackButton } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GlueStackButton> & {
    title: string
}

export default function Button({title, variant, ...rest}: Props) {
    return (
        <GlueStackButton w='$full' 
        h='$14'
        bg={variant === 'outline' ?  'transparent': '$green500'}  
        borderColor={variant === 'outline' ? '$green500': 'transparent'}
        borderWidth={variant === 'outline' ? '$1': '$0'}
        $active={{ bg: '$green700' }}
        
        {...rest}>
            <ButtonText fontFamily="$heading" color={variant === 'outline' ? '$green500': '$white'}>{title}</ButtonText>
        </GlueStackButton>
    )
}