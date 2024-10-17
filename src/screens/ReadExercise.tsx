import Button from "@components/Button";
import ExerciseHistoryCard from "@components/ExerciseHistoryCard";
import FormInput from "@components/Input";
import ProfileImage from "@components/ProfileImage";
import { Box, HStack, Icon, Image, ScrollView } from "@gluestack-ui/themed";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList, SectionList, TouchableOpacity } from "react-native";
import BodySVG from '@assets/body.svg';
import { ArrowLeft } from "lucide-react-native";
import SeriesSVG from '@assets/series.svg';
import RepetitionsSVG from '@assets/repetitions.svg';
import { useNavigation } from "@react-navigation/native";

export default function ReadExercise() {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <VStack flex={1}>

                <VStack pt={'$12'} pb={'$8'} px={'$8'} gap={'$4'} bg="$gray500">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon as={ArrowLeft} color="$green500" size="xl" />
                    </TouchableOpacity>
                    <HStack justifyContent="space-between" alignItems="center">
                        <Heading fontSize={'$xl'} color="$gray100">Puxada frontal</Heading>
                        <HStack alignItems="center" gap={'$2'}>
                            <BodySVG />
                            <Text color="$gray200">Costas</Text>
                        </HStack>
                    </HStack>
                </VStack>

                <VStack px={'$8'} my={'$8'} gap={'$4'}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s' }}
                        alt="Imagem sobre o exercício" w={'$full'} h={364} rounded={'$lg'} />

                    <VStack p={'$4'} gap={'$8'} bg="$gray500" rounded={'$lg'}>
                        <HStack justifyContent="space-between" alignItems="center">
                            <HStack alignItems="center" gap={'$2'}>
                                <SeriesSVG />
                                <Text color="$gray200">3 séries</Text>
                            </HStack>
                            <HStack alignItems="center" gap={'$2'}>
                                <RepetitionsSVG />
                                <Text color="$gray200">12 repetições</Text>
                            </HStack>
                        </HStack>
                        <Button title="Marcar como realizado" />
                    </VStack>

                </VStack>

            </VStack>
        </ScrollView>

    );
}