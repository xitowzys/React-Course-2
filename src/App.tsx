import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/pages/Menu/Menu';
import { Cart } from './components/pages/Cart/Cart';
import { Error } from './components/pages/Error/Error';

function App() {

    const [counter, setCounter] = useState<number>(0);

    const addCounter = (e: MouseEvent) => {

    };

    return (
        <>
            <Button onClick={addCounter}>Кнопка</Button>
            <Button appearence='big' onClick={addCounter}>Кнопка</Button>
            <Input placeholder='Email' />



            <Routes>
                <Route path='/' element={<Menu />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='*' element={<Error />}/>
            </Routes>
        </>
    );
}

export default App;
