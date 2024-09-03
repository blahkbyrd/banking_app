import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';


const Home = () => {
    const loggedIn = {
        firstname: "Julie"
    }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstname || "Guest"}
                        subtext="Accéder et administrer votre compte en toute simplicité"
                    />
                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1500.32}
                    />
                </header>


            </div>
        </section>);
}

export default Home;