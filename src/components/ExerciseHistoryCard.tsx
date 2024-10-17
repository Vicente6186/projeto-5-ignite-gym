import { Text } from "@gluestack-ui/themed";
import { Heading, HStack, Icon, Image, VStack } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { ImageSourcePropType, TouchableOpacity } from "react-native";

type Props = {
    name: string;
    details: string;
}

export default function ExerciseHistoryCard({ name, details}: Props) {
    return (
        <HStack px={'$5'} py={'$4'} alignItems="center" gap={'$4'} rounded={'$lg'} bg="$gray500">
        <VStack flex={1} gap={'$1'}>
            <Heading color="$white">{name}</Heading>
            <Text color="$gray200" fontSize="$sm">{details}</Text>
        </VStack>
        <Text color="$gray300">12:00</Text>
    </HStack>
    );
}