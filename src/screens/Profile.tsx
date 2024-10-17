import Button from "@components/Button";
import ExerciseHistoryCard from "@components/ExerciseHistoryCard";
import FormInput from "@components/Input";
import ProfileImage from "@components/ProfileImage";
import { Box, ScrollView, useToast } from "@gluestack-ui/themed";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { Alert, FlatList, SectionList, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Toast from "@components/Toast";

export default function History() {

    const [imageUri, setImageUri] = useState('none')
    const toastManager = useToast()

    async function handleSelectProfileImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
        })


        const profileImage = result.assets?.[0]
        if(!profileImage) return

        if(profileImage.fileSize && profileImage.fileSize > 10_000) {
            return toastManager.show({
                render: () => <Toast nativeId="1" title="Foto muito grande" description="A foto deve ter no máximo 1MB" action="error" />,
                duration: 5000,
                placement: 'top',
            })
        }

        setImageUri(profileImage.uri)
    }


    return (
        <ScrollView>
            <VStack flex={1}>
                <Center pt={'$16'} pb={'$4'} bg="$gray500">
                    <Heading fontSize={'$xl'} color="$gray100">Perfil</Heading>
                </Center>

                <Center my={'$8'}>
                    <ProfileImage source={{ uri: imageUri }} size="xl" mb={'$1'}  />
                    <TouchableOpacity onPress={handleSelectProfileImage}>
                        <Heading fontSize={'$sm'} color="$green500">Alterar foto</Heading>
                    </TouchableOpacity>
                </Center>

                <VStack px={'$8'}>
                    <FormInput placeholder="Nome" variant="LIGHT" />
                    <FormInput placeholder="E-mail" variant="LIGHT" containerProps={{ mt: '$4', mb: '$12', isDisabled: true }} />

                    <Heading fontSize={'$md'} color="$gray100">Alterar senha</Heading>
                    <FormInput placeholder="Senha antiga" variant="LIGHT" containerProps={{ mt: '$2', mb: '$4' }} />
                    <FormInput placeholder="Nova senha" variant="LIGHT" />

                    <Button title="Atualizar" mt={'$8'} />
                </VStack>
            </VStack>
        </ScrollView>

    );
}