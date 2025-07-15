import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import React, { FC, useMemo } from "react";
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  emojiIcon?: string // Changed from ReactElement to string for direct emoji character
}

const Feature = ({ text, emojiIcon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={10} h={10} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {/* Render emojiIcon directly as text */}
        <Text fontSize="xl">{emojiIcon}</Text> 
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

interface FeaturesWImageProps {}
const FeaturesWImage: FC<FeaturesWImageProps> = (props) => {
    const {} = props;
    return (
        <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
            <Text
                textTransform={'uppercase'}
                color={'purple.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('purple.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Key Benefits
            </Text>
            <Heading>Unlock the Potential of Hero Tokens</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
                <chakra.span fontWeight="bold" textDecoration="underline">Hero Token Exchanger</chakra.span> is designed to provide a secure, efficient, and user-friendly platform for all your token exchange needs.
            </Text>
            <Stack
                spacing={4}
                divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <Feature
                emojiIcon={'🔒'} // Changed emoji
                iconBg={useColorModeValue('blue.100', 'yellow.900')}
                text={'Secure & Reliable Transactions'}
                />
                <Feature
                emojiIcon={'✨'} // Changed emoji
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Intuitive User Interface'}
                />
                <Feature
                emojiIcon={'⚡'} // Changed emoji
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Fast & Efficient Exchanges'}
                />
            </Stack>
            </Stack>
            <Flex>
            <Image
                rounded={'md'}
                alt={'feature image'}
                aspectRatio={4 / 4}
                src={
                    'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-f170-622f-abeb-fad1f1e368f6/raw?se=2025-07-15T16%3A55%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=a2df66d5-519b-52c3-b977-af8ba5d0ae53&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-15T05%3A48%3A44Z&ske=2025-07-16T05%3A48%3A44Z&sks=b&skv=2024-08-04&sig=7k1tTLkcz1QrI4UI8TPwTg5sQkw2c5eEnnAbPt2dOug%3D'
                    }
                objectFit={'cover'}
            />
            </Flex>
        </SimpleGrid>
        </Container>
    );
    };

export default FeaturesWImage;