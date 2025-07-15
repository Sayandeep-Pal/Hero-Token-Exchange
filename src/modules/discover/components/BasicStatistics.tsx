import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC, useMemo } from "react";


interface StatsCardProps {
  title: string
  stat: string
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

interface BasicStatisticsProps {}
const BasicStatistics: FC<BasicStatisticsProps> = (props) => {
  const {} = props;
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
      Hero Token Exchanger at a Glance
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Total Supply'} stat={'1,000,000,000 HERO'} /> {/* Changed text */}
        <StatsCard title={'Total Transactions'} stat={'100,000+'} /> {/* Changed text */}
        <StatsCard title={'Community Members'} stat={'5,000+'} /> {/* Changed text */}
      </SimpleGrid>
    </Box>
  );
};

export default BasicStatistics;