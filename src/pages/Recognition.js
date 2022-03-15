import {
    Box,
    Heading,
    Container,
    Text,
    Image,
    Stack,
    SimpleGrid,
    Center,
    Button,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
//durga, siva, manoj, sandeep, remaining all frontend
export default function Recognition() {
const credits= [
    {
        name: "S. Durgaprasad ",
        role: "Full Stack Developer",
        registerNumber: "39110905",
        linkedin: "https://www.linkedin.com/in/sasubilli-durgaprasad-67181518a/",
        branch: "CSE",
        github: "https://github.com/sasubilli",
        image: "https://firebasestorage.googleapis.com/v0/b/web2all-allolab.appspot.com/o/Members%2FPrasad.jpeg?alt=media&token=920e5dee-19c6-4c52-ba16-629a38ba731a"
    },
    {
        name: "K. Siva SaiKumar reddy",
        role: "Full Stack Developer",
        registerNumber: "39110953",
        linkedin: "https://www.linkedin.com/in/siva-sai/",
        branch: "CSE",
        github: "https://github.com/sivasai2207",
        image: "https://avatars.githubusercontent.com/u/49616092?v=4"
    },
    {
        name: "Paramsetti Manoj",
        role: "Full Stack Developer",
        registerNumber: "40110901",
        linkedin: "https://www.linkedin.com/in/manoj-paramsetti/",
        branch: "CSE",
        github: "https://github.com/Manoj-Paramsetti/",
        image: "https://firebasestorage.googleapis.com/v0/b/web2all-allolab.appspot.com/o/Members%2FManoj.jpeg?alt=media&token=303790c1-6d17-4f42-9037-a3885741cba5"
    },
    {
        name: "Sandeep V",
        role: "Full Stack Developer",
        registerNumber: "39111055",
        linkedin: "https://www.linkedin.com/in/sandeep1404/",
        branch: "CSE",
        github: "https://github.com/sandeep-v1404/",
        image: "https://firebasestorage.googleapis.com/v0/b/web2all-allolab.appspot.com/o/Members%2FSandeep.jpeg?alt=media&token=69ab9200-658a-428f-ad21-ab3f090314e9"
    },
    {
        name: "Sai Pradeep",
        role: "Front End",
        registerNumber: "39110757",
        linkedin: "",
        branch: "CSE",
        github: "",
        image: "https://firebasestorage.googleapis.com/v0/b/web2all-allolab.appspot.com/o/Members%2FPradeep.jpeg?alt=media&token=eaa237e6-602b-4fdc-937f-04d683b510cd",
    },
    {
        name: "Rohith Kumar",
        role: "Front End",
        registerNumber: "40731081",
        linkedin: "https://www.linkedin.com/in/rohit-kumar-s-63991b20a/",
        branch: "CSE AI",
        github: "https://github.com/Rohitkumar2513",
        image: "https://firebasestorage.googleapis.com/v0/b/web2all-allolab.appspot.com/o/Members%2FRohit.jpeg?alt=media&token=5118b8b0-008a-467c-b21b-13974295712d",
    },
    {
        name: "E. Meghana",
        role: "Front End",
        registerNumber: "39110295",
        linkedin: "",
        branch: "CSE",
        github: "",
        image: "https://firebasestorage.googleapis.com/v0/b/web2all-allolab.appspot.com/o/Members%2FMeghana.jpeg?alt=media&token=6ac9506f-8d08-4859-8a61-8c37d64f0233",
    },
    {
        name: "K. Sindhu",
        role: "Front End",
        registerNumber: "39110428",
        linkedin: "",
        branch: "CSE",
        github: "",
        image: "https://firebasestorage.googleapis.com/v0/b/web2all-allolab.appspot.com/o/Members%2FSindhu.jpeg?alt=media&token=84fcd512-c54d-4a85-bacc-3fbcb80cf105",
    },
];


    return (
        <>
            <Container height={'auto'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 10, md: '60px' }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                        fontFamily={'Outfit'}
                        bg={'linear-gradient(70deg, #fc0352 0%, #fc03b6 30%, #6f03fc 100%)'}
                        bgClip={'text'}>
                        Recognition 
                    </Heading>
                </Stack>
            </Container >
            <SimpleGrid minChildWidth='320px' maxW={'auto'}>
                {
                    credits.map((info, i) => 
                    <Box p={'5px'} m ={'20px'}borderRadius={'5px'} boxShadow='2xl'>
                    <div style={{ width: "auto"}}>
                        <Center>
                            <Image src={info.image} width="200px" height={"200px"} objectFit='cover' alt="profile" borderRadius='50%' srcset="" />
                        </Center>
                        <Text textAlign={'center'} m={'20px'}>
                            <Heading as='h4' fontSize={'25px'}>{info.name}</Heading><br />
                            <Text textAlign={'start'} opacity="0.8">
                            <b>Role:</b> {info.role}<br />
                            <b>Register Number:</b> {info.registerNumber}<br />
                            <b>Branch:</b> {info.branch}<br />
                            </Text>
                        </Text>
                        <Center>
                        { 
                            info.github &&
                            <Button colorScheme='gray' my={2} onClick={()=> window.open(info.github, "_blank")}leftIcon={<FaGithub />}>
                                github
                            </Button>
                        } &nbsp;&nbsp;
                        {
                            info.linkedin &&
                            <Button colorScheme='linkedin' onClick={()=> window.open(info.linkedin, "_blank")} leftIcon={<FaLinkedin />}>
                                linkedin
                            </Button>
                        }
                        </Center>
                    </div>
                    </Box>
                    )
                }
            </SimpleGrid>
        </>
    );
}