import { Button, ButtonText, HStack, Icon, Image, Text,  VStack, Heading, Center } from "@gluestack-ui/themed";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LogOut } from "lucide-react-native";
import { FlatList, ListRenderItem, ListRenderItemInfo, TouchableOpacity } from "react-native";
import ProfileImage from "@components/ProfileImage";
import { useState } from "react";
import FilterButton from "@components/FilterButton";
import ExerciseCard from "@components/ExerciseCard";
import { AppNavigationProp } from "src/routes/app.routes";
import { useNavigation } from "@react-navigation/native";


export default function Home() {

    const [categories, setCategories] = useState<string[]>(['Musculação', 'Cardio', 'Costas', 'Biceps', 'Perna', 'Peito', 'Triatlo']);
    const [categorySelected, setCategorySelected] = useState<string>('');
    const [exercises, setExercises] = useState([
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
        { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
    ]);

    const navigation = useNavigation<AppNavigationProp>();

    function handleNavigateToReadExercise() {
        navigation.navigate('ReadExercise');
    }

    return (
        <VStack flex={1}>

            <HStack py={'$16'} pb={'$5'} px={`$8`} alignItems="center" gap={'$4'} bg="$gray600">
                <ProfileImage source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s' }} size="sm" />

                <VStack flex={1}>
                    <Text color="$gray100">Olá,</Text>
                    <Heading fontSize="$md" fontFamily="$heading" color="$gray100">Vicente Chemin</Heading>
                </VStack>

                <TouchableOpacity>
                    <Icon as={LogOut} size={'xl'} color="$gray100" />
                </TouchableOpacity>
            </HStack>

            <Center my={'$10'}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 12, paddingHorizontal: 32 }}
                    data={categories}
                    horizontal
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => <FilterButton title={item} selected={item === categorySelected} onPress={() => setCategorySelected(item)} />}
                />
            </Center>

            <VStack px={'$8'} gap={'$3'} flex={1}>
                <HStack justifyContent="space-between" alignItems="center">
                    <Heading color="$gray100" fontSize={'$md'}>Exercícios</Heading>
                    <Text color="$gray100" fontSize={'$sm'}>{exercises.length}</Text>
                </HStack>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 12 }}
                    data={exercises}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => <ExerciseCard name={item.name} details={item.details} onPress={handleNavigateToReadExercise}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s' }} />}
                />
            </VStack>

        </VStack>
    );
}