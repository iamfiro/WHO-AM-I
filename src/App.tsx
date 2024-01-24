import Header from './components/header';
import TopText from './components/topText';
import Description from './components/description';
import Stack2 from './components/project';
import Stack from './components/stack';
import Footer from './components/footer';

function App() {
    return (
        <>
            <div style={{ 
                backgroundColor: 'var(--color-blue)', 
                width: '100%',
                height: '50px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
            }}>
                This website is under development. Some features may not work properly.
            </div>
            <Header />
            <TopText />
            <Description />
            <Stack2 />
            <Stack />
            <Footer />
        </>
    );
}

export default App;