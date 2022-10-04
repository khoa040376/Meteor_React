import {
  Box,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Divider,
  Image,
  useColorModeValue,


  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  HStack, Square, Circle, PhoneIcon, Center, Buttonimport,

  AspectRatio
} from '@chakra-ui/react';
import React from 'react';
import { BsFacebook } from "react-icons/bs";
export const Footer = () => (




  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >


    <Stack>



      <Divider my="5" borderColor={useColorModeValue('gray.400', 'gray.400')} />

      <Image boxSize='200px' src='
      https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/307852454_560403599217902_3731584879879163666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=axg3i35MXkwAX_j-9rj&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_GAWflgN24CfW6o6A0szEzMEPV_XnS2NBlR5JihkX2SQ&oe=633ABBBC
' alt='Khoa' />
      <Stack direction="row" spacing="2" align="center" justify="space-between">
        <ButtonGroup variant="ghost" color="gray.600">
          <HStack>
            <a href="https://www.facebook.com/KhoaPY">
              <Button colorScheme='facebook' leftIcon={<BsFacebook />}>
                Facebook
              </Button></a>
          </HStack>

        </ButtonGroup>

      </Stack>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' />
      </FormControl>
      
      <Text
        fontSize="xs"
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      >
        &copy; {new Date().getFullYear()} Theplayer (IT{' '}
        <a href="http://theplayer.school/" target="_blank">
          Team
        </a>
        )
      </Text>
      
    </Stack>
    <AspectRatio ratio={16 / 9}>
    {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.5208730542463!2d106.7052229512222!3d10.799253417141044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298d46971375%3A0x5fc5f92800419c94!2zVMOyYSBuaMOgIERyZWFtcGxleCAxOTUgxJBp4buHbiBCacOqbiBQaOG7pywgQsOsbmggVGjhuqFuaCwgSENN!5e0!3m2!1svi!2s!4v1664767157540!5m2!1svi!2s" 
    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450" 
    />
</AspectRatio>
  </Box>

);
