import { Button, Center, Spinner, Text, Wrap, WrapItem} from "@chakra-ui/react"
import {Link, useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import {api} from "../api";

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string

}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            {
                userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) :
                    (
                        <Wrap width="50%">
                            <WrapItem width='100%'>
                                <Center fontSize='3xl' fontWeight='bold'>
                                    Informações da conta
                                </Center>
                            </WrapItem>
                            <WrapItem width='100%'>
                                <Link to='/conta/1'>
                                    <Text fontSize='xl'>
                                        Nome: {userData?.name}
                                    </Text>
                                    <Text fontSize='xl'>
                                        Email: {userData?.email}
                                    </Text>
                                </Link>
                            </WrapItem>
                            <WrapItem>
                                <Button colorScheme='teal' size='lg' onClick={() => {
                                    navigate('/conta/1')
                                }}>
                                    Conta
                                </Button>
                            </WrapItem>
                        </Wrap>
                    )
            }

        </Center>
    )
}

export default ContaInfo
