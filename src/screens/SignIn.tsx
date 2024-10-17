import { Box, Center, HStack, Image, ScrollView, Text, View, VStack } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Brand from '@assets/logo.svg'
import FormInput from "@components/Input";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "src/routes/auth.routes";
import { Controller, useForm } from "react-hook-form";

type FormDataType = {
  email: string
  password: string
}

export default function SignIn() {

  const navigation = useNavigation<AuthNavigationProp>()
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataType>()

  console.log(errors);
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1}>
        <Image defaultSource={BackgroundImg} source={BackgroundImg} alt="Pessoas correndo"
          w={"$full"} h={624} position="absolute" />

        <Center my="$24">
          <Brand />
          <Text color="$gray100" fontSize='$sm'>Treine sua mente e seu corpo</Text>
        </Center>

        <Center flex={1} px={'$10'}>
          <Text color="$gray100" fontFamily="$heading" fontSize="$xl" mb="$5">Acesse sua conta</Text>

          <Controller
            control={control}
            name="email"
            rules={{ required: {value: true, message: 'Campo obrigatório'}, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'E-mail inválido'} }}
            render={({ field: { onChange } }) => (
              <FormInput
                placeholder={'E-mail'}
                inputProps={{ keyboardType: 'email-address', autoCapitalize: 'none', onChangeText: onChange }}
                invalidErrorMessage={errors.email?.message}
              />
            )} />

          <Controller
            control={control}
            name="password"
            rules={{ required: true, minLength: 4,  }}
            render={({ field: { onChange } }) => (
              <FormInput
                placeholder={'Senha'}
                containerProps={{ mt: '$4', mb: '$8' }}
                inputProps={{ secureTextEntry: true, onChangeText: onChange }}
                invalidErrorMessage={errors.password ? 'Precisa conter no mínimo 5 caracteres' : ''}
              />
            )} />

          <Button title={'Entrar'} onPress={handleSubmit((data) => console.log(data))} />
        </Center>

        <Center px={'$10'} py={'$10'} >
          <Text color="$gray100" mb={'$3'}>Ainda não tem acesso?</Text>
          <Button title={'Criar conta'} variant={'outline'} onPress={() => navigation.navigate('SignUp')} />
        </Center>


      </VStack>
    </ScrollView>
  );
}