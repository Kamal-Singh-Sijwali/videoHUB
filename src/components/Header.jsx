import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'

import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {/* Drawer button */}
            <Button zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme={'purple'} p={'0'} h={'10'} w={'10'} borderRadius={'full'}>
                <BiMenuAltLeft size={'20'} onClick={onOpen} />
            </Button>

            {/* Drawer slid */}
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button variant={'ghost'} colorScheme={'purple'}  onClick={onClose}>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                                <Link to={'/videos?category=free'}>Free videos</Link>
                            </Button>
                            <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                                <Link to={'/upload'}>Upload video</Link>
                            </Button>
                        </VStack>

                        <HStack pos={'absolute'} bottom={'10'} left={'0'}  w={'full'} justifyContent={'space-evenly'}>
                            <Button colorScheme='purple' onClick={onClose}>
                                <Link to={'/login'}>Log In</Link>
                            </Button>
                            <Button colorScheme='purple' variant={'outline'} onClick={onClose}>
                                <Link to={'/signup'}>Sign Up</Link>
                            </Button>

                        </HStack>

                    </DrawerBody>
                </DrawerContent>

            </Drawer>



        </>
    )
}

export default Header