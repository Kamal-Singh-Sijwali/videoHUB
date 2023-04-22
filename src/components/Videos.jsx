import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import one from '../assets/videos/one.mp4'
import two from '../assets/videos/two.mp4'
import three from '../assets/videos/three.mp4'
import four from '../assets/videos/four.mp4'

const Videos = () => {


    const videosArr = [one, two, three, four]


    const [videoSrc, setVideoSrc] = useState(videosArr[0]);


    return (
        <Stack direction={['column', 'row']} h={'100vh'}>


            <VStack w={'full'} h={'full'}>
                <video controls
                    controlsList='nodownload'
                    src={videoSrc}
                    style={{ width: '100%' }}>

                </video>
                <VStack alignItems={'flex-start'} w={'full'}  p={'4'} /*overflowY={'auto'}*/>
                    <Heading>Sample Video </Heading>
                    <Text >This is a sample video for testing and demo, This is called description.
                        {/* This is a sample video for testing and demo, This is called description
                        This is a sample video for testing and demo, This is called description
                        This is a sample video for testing and demo, This is called description  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,
                        ple video for testing and demo, This is called description  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,
                        ple video for testing and demo, This is called description  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,
                        ple video for testing and demo, This is called description  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo,  sample video for testing and demo, This is called description
                        This is a sample video for testing and demo, */}

                    </Text>
                </VStack>
            </VStack>

            <VStack width={['full', 'xl']}
                alignItems={'stretch'}
                p={'8'}
                spacing={'8'}
                overflow={'auto'}
                
            >
                {
                    videosArr.map((item,index) =>
                        <Button variant={'ghost'} colorScheme='purple' onClick={()=> setVideoSrc(item)}>
                            Lecture {index +1}
                        </Button>
                        )
                }

            </VStack>



        </Stack>
    )
}

export default Videos