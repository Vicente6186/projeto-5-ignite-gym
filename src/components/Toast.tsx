import { Toast as GlueStackToast, ToastDescription, ToastTitle, VStack } from "@gluestack-ui/themed";

type Props = {
    nativeId: string;
    title: string;
    description: string;
    action?: "attention" | "success" | "error" | "warning" | "info"
}

export default function Toast({nativeId, title, description, action = "attention" }: Props) {
    return (
        <GlueStackToast nativeID={`toast-${nativeId}`} action={action}>
            <VStack gap={'$2'} w={'$full'}>
                <ToastTitle fontFamily="$heading">{title}</ToastTitle>
                <ToastDescription>{description}</ToastDescription>
            </VStack>
        </GlueStackToast>
    )
}