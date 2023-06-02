import { useState, useRef } from 'react';
import Head from 'next/head';
import {Box, Input, InputLeftElement, InputGroup, Button, Checkbox} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useThemeSwitch } from '../lib/context';
import style from '../styles/Todo.module.css'; 

export default function TodoListApp() {
    const { darkMode } = useThemeSwitch();
    const [todos, setTodos] = useState([]);
    const todo = useRef();

    const handleSubmit = () => {
        const task = todo.current.value;
        setTodos(prev => (
            [...prev, {concept: task, finished: false}]
        ));
    };

    const handleChange = (task) => {
        setTodos(todos.filter(todo => todo.concept != task));
    };

    const cleanTodo = () => {
        todo.current.value = '';
    };

    return (
        <Box className={darkMode ? [style.wrapper_dark, style.wrapper].join(" ") 
         : [style.wrapper_light, style.wrapper].join(" ")}   
            >   
            <Head>
                <title>Todo List</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box className={darkMode ?  [style.main_dark, style.main].join(" ") 
                    :  [style.main_light, style.main].join(" ")}
                    width={['100vw', '100vw','75vw', '75vw']}

            >
                <InputGroup 
                    w={['60%', '50%', '50%', '50%']}
                    ml='20px'
                    mt='2px'>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EditIcon color={darkMode ? 'gray.300' : 'black'} />}
                    />
                    <Input 
                        placeholder='Write Todo' 
                        borderColor={darkMode ? '' : 'black'}
                        ref={todo}
                    />
                    <Button colorScheme='blue' ml='10px' onClick={handleSubmit}>OK</Button>
                    <Button colorScheme='blue' ml='10px' onClick={cleanTodo}>Clean</Button>
                </InputGroup>
                {todos && todos.map(todo => (
                    <Checkbox key={todo.concept} 
                              size='lg' 
                              colorScheme='orange'
                              onChange={handleChange(todo.concept)}>
                        {todo.concept}
                    </Checkbox>
                ))}
            </Box>
        </Box>
    );
};