import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';


const Home = () => {

    const loggedIn = {
        firstName: "Julie",
        lastName: "Trinchero",
        address1: "",
        city: "",
        state: "France",
        postalCode: "",
        dateOfBirth: "",
        email: "user@mail.fr",
        ssn: "",
        $id: "01",
        userId: "01",
        dwollaCustomerUrl: "",
        dwollaCustomerId: ""
    };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Accéder et administrer votre compte en toute simplicité"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1500.32}
                    />
                </header>
                RECENT TRANSACTION
            </div>
            <RightSidebar user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 521.32 }]}

            />
        </section>);
}

export default Home;