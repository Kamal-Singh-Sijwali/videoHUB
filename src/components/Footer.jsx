import { Box, Button, HStack, Heading, Input, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>

                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                    Subscribe for updates
                </Heading>

                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter email here...'
                            border={'none'}
                            borderRadius={'none'}
                            outline={'none'} />

                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                        
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack >

            <VStack w={'full'} 
                    borderLeft={['none','1px solid white']}
                    borderRight={['none','1px solid white']}
                    >
                        <Heading textTransform={'uppercase'} textAlign={'center'}>
                            video hub 
                        </Heading>
                        <Text>@all rights reserved</Text>
                        <Text  textAlign={'center'}>2023</Text>

            </VStack>
            
            <VStack w={'full'} >
                <Heading textTransform={'uppercase'} textAlign={'center'}>social media</Heading>
                <Button tar variant={'link'} colorScheme={'white'}>
                    <a target={'blank'} href='https://youtube.com/hightechu'>Youtube</a>
                </Button>
                <Button tar variant={'link'} colorScheme={'white'}>
                    <a target={'blank'} href='https://instagram.com/i_am_sizz'>Instagram</a>
                </Button>
                <Button tar variant={'link'} colorScheme={'white'}>
                    <a target={'blank'} href='https://linkedin.com/in/kamal-singh-sijwali'>LinkedIn</a>
                </Button>

            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer