import Header from './components/header';
import TopText from './components/topText';
import Slider from './components/slider';
import Description from './components/description';
import Stack2 from './components/stack2';
import Stack from './components/stack';

function App() {
    return (
        <>
            <Header />
            <TopText />
            <Description />
            <Stack2 />
            <div style={{ height: '200vh' }}/>
        </>
    );
}

export default App;