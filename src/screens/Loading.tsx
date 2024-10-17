import { Center, Spinner } from "@gluestack-ui/themed";

export default function Loading() {
    return (
        <Center flex={1} backgroundColor="$gray700">
            <Spinner size="large" color="$green500"/>
        </Center>
    )
}