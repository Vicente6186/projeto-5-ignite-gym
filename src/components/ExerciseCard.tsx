import { Text } from "@gluestack-ui/themed";
import { Heading, HStack, Icon, Image, VStack } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    name: string;
    details: string;
    source: ImageSourcePropType
}

export default function ExerciseCard({ name, details, source, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack p={'$2'} alignItems="center" gap={'$4'} rounded={'$lg'} bg="$gray500">
                <Image source={source} alt={name} size="sm" rounded={'$lg'} />
                <VStack flex={1} gap={'$1'}>
                    <Heading color="$white">{name}</Heading>
                    <Text color="$gray200" fontSize="$sm">{details}</Text>
                </VStack>
                <Icon as={ChevronRight} color="$gray300" size="xl"/>
            </HStack>
        </TouchableOpacity>
    );
}