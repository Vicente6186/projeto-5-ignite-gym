import ExerciseHistoryCard from "@components/ExerciseHistoryCard";
import { Box } from "@gluestack-ui/themed";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList, SectionList } from "react-native";

export default function History() {

    const [exercises, setExercises] = useState([
        {
            title: '26.08.22',
            data: [
                { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
                { name: 'Remada unilateral', details: '3 séries x 12 repetições' },
                { name: 'Remada latera', details: '3 séries x 12 repetições' },
                { name: 'Remada unilateral', details: '3 séries x 12 repetições' },
            ]
        },
        {
            title: '25.08.22',
            data: [
                { name: 'Puxada frontal', details: '3 séries x 12 repetições' },
                { name: 'Remada unilateral', details: '3 séries x 12 repetições' },
                { name: 'Remada latera', details: '3 séries x 12 repetições' },
                { name: 'Remada unilateral', details: '3 séries x 12 repetições' },
            ]
        }
    ]);

    return (
        <VStack flex={1}>
            <Center pt={'$16'} pb={'$4'} bg="$gray500">
                <Heading fontSize={'$xl'} color="$gray100">Histórico de Exercícios</Heading>
            </Center>
            <Box flex={1} mt={'$10'} px={'$8'}>
                <SectionList
                    sections={exercises}
                    contentContainerStyle={{ gap: 12 }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    renderSectionHeader={({ section: { title } }) => <Heading color="$gray200" fontSize="$md">{title}</Heading>}
                    renderItem={({ item }) => <ExerciseHistoryCard name={item.name} details={item.details} />}
                />
            </Box>
        </VStack>

    );
}