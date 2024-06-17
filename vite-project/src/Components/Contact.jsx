import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

export function Contact() {
  return (
    // <h1>Contato</h1>

    // <h1>{props.nomePagina}</h1>

    <Box>
       <Center >
      Formulário de Contato
      </Center>
     
      <Flex>
        <Center
          w="100%"
          bg="black"
          top={90}
          borderRadius={60}
          p="2"
          boxShadow={"0 1px 2px #ccc"}
          
        >
          <FormControl display='flex' flexDir='column' gap='4' mt={5}>

            <HStack spacing='5'>
              <Box w='100%'>
                <FormLabel>Nome Completo</FormLabel>
                <Input id='nome' placeholder='Nome Completo' />
              </Box>
              <Box w='100%'>
                <FormLabel>E-mail</FormLabel>
                <Input id='email' placeholder='E-mail' />  
              </Box>            
            </HStack>

            <HStack spacing='5'>
              <Box w='100%'>
                <FormLabel>Data Nascimento</FormLabel>
                <Input id='nasc' placeholder='Data de Nascimento' />
              </Box>
              <Box w='100%'>
                <FormLabel>Naturalidade</FormLabel>
                <Input id='natural' placeholder='Naturalidade' />
              </Box>
            </HStack>

            <HStack spacing='5'>
              <Box w='100%'>
                <FormLabel>Celular</FormLabel>
                <Input id='cel' type="number" placeholder='Celular' />
              </Box>
              <Box w='100%'>
                <FormLabel>Telefone</FormLabel>
                <Input id='tel' type="number" placeholder='Telefone' />
              </Box>
            </HStack>

            <HStack spacing='5'>
              <Box w='100%'>
                <FormLabel>Endereço</FormLabel>
                <Input id='endereco' placeholder='Endereço' />
              </Box>
              <Box w='100%'>
                <FormLabel>Cidade</FormLabel>
                <Input id='cidade' placeholder='Cidade' />
              </Box>
            </HStack>

            <HStack spacing='5'>
              <Box w='100%'>
                <FormLabel>Sexo</FormLabel>
                <RadioGroup>
                <HStack  >
                  <Radio value="Masculino">Masculino</Radio>
                  <Radio value="Feminino">Feminino</Radio>
                  </HStack>
                  
                </RadioGroup>
              </Box>
              <Box w='100%'>
                <FormLabel>Cep</FormLabel>
                <Input id='cep' placeholder='Cep' />
              </Box>
            </HStack>

            
            <HStack justify='center' >
              <Button 
              w={250}
              fontWeight={900}
              type='submit'
              bg='gray'
              fontSize=''
              mt={5}>
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
  </Box>
  );
}