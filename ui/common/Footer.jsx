import {
  Box,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Divider,
  Image,
  useColorModeValue,

  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  HStack, Square, Circle, PhoneIcon, Center
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
      <a href="https://www.facebook.com/KITS.TPHCM">
      <Image boxSize='200px' src='
      https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/307852454_560403599217902_3731584879879163666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=axg3i35MXkwAX_j-9rj&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_GAWflgN24CfW6o6A0szEzMEPV_XnS2NBlR5JihkX2SQ&oe=633ABBBC
' alt='Khoa' /></a>
      <Stack direction="row" spacing="2" align="center" justify="space-between">
      
        <ButtonGroup variant="ghost" color="gray.600">
        
          
          <IconButton
            as="a"
            target="_blank"
            href="https://www.facebook.com/KhoaPY"
            aria-label="Facebook"
            icon={<BsFacebook fontSize="30px" />}
            
          />
        
          
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
    
  </Box>
  
);
