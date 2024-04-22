import './Home.css';
import logo from '../../assets/logo.png'

function Home() {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-start items-center mb-auto" style={{ paddingTop: '70px' }}>

                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-9xl font-bold'>Seja bem vindo!</h2>
                    <img src={logo} alt="logo" /> 
                    <p className='text-4xl'>Sua saúde em primeiro lugar com soluções para todas as suas necessidades.</p>
                    <div className="flex justify-around gap-4">
                    </div>
                </div>
                <div className="flex justify-center">
                </div>
            </div>

        </>
    );
}

export default Home;