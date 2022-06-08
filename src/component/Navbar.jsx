import { useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Switch,
} from '@chakra-ui/react';
import { Figmacontext } from '../context/Figmacontext';
import {dark,light,navbarflex} from "./styles";


export default function Navbar() {
    const { Toggletheme, islight } = useContext(Figmacontext);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} style={ islight ? dark : light }>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <div style={navbarflex}>
        <Box>Home</Box>
        <Box>About</Box>
        <Box>Gallery</Box>
        <Box>Service</Box>
        <Box>Contact</Box>
        </div>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Switch onChange={Toggletheme} size={'sm'} m={'20px'}/>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}