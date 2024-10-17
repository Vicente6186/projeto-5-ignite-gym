import { Button, ButtonText } from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof Button> & {
    title: string
    selected: boolean
}

export default function FilterButton({title, selected, ...rest}: Props) {
    return (
        <Button
            bg="$gray400"
            borderColor={selected ? '$green700' : 'transparent'}
            borderWidth={1}
            {...rest}
        >
            <ButtonText color={selected ? '$green700' : '$gray100'} fontFamily={selected ? '$heading' : '$body'}>
                {title}
            </ButtonText>
        </Button>
    )
}