import { Box, Center, HStack, Image, ScrollView, Text, View, VStack } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Brand from '@assets/logo.svg'
import FormInput from "@components/Input";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";



const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(4, 'Mínimo de 4 caracteres'),
  confirmPassword: yup.string().required('Confirme sua senha corretamente').oneOf([yup.ref('password'), ''], 'As senhas devem ser iguais')
}).required()

type FormDataType = yup.InferType<typeof schema>

export default function SignUp() {
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataType>({
    resolver: yupResolver(schema)
  })

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
          name="name"
          render={({ field: { onChange } }) => (
            <FormInput placeholder={'Nome'} inputProps={{ onChangeText: onChange }} invalidErrorMessage={errors.name?.message} />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <FormInput 
            placeholder={'E-mail'} 
            containerProps={{my: '$4'}} 
            inputProps={{keyboardType: 'email-address', autoCapitalize: 'none', onChangeText: onChange}}
            invalidErrorMessage={errors.email?.message}
            />
          )}
        />
        
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <FormInput placeholder={'Senha'} containerProps={{mb: '$4'}} inputProps={{ onChangeText: onChange }} invalidErrorMessage={errors.password?.message}/>
          )}
        />
        
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange } }) => (
            <FormInput placeholder={'Confirmar senha'} containerProps={{mb: '$4'}} inputProps={{ onChangeText: onChange }} 
            invalidErrorMessage={errors.confirmPassword?.message}/>
          )}
        
        />
                
        <Button title={'Entrar'} onPress={handleSubmit((data) => console.log(data))}/>


      </Center>

      <Center px={'$10'} py={'$10'}>
        <Button title={'Voltar para login'} variant={'outline'} onPress={() => navigation.goBack()}/>
      </Center>


    </VStack>
    </ScrollView>
  );
}