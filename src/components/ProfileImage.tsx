import { Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Image>;

export default function ProfileImage(props: Props) {
    return (
        <Image
            alt="Imagem de perfil"
            rounded='$full'
            borderWidth={'$2'}
            borderColor="$gray400"
            
            backgroundColor="$gray500"
            {...props}
        />
    );
}