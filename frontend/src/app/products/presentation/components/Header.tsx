import React from 'react';
import Link from 'next/link';

type Props = {
    type: string;
}

export const Header: React.FC<Props> = ({ type }) => {
    return (
        <>
            <div className="flex flex-col tablet:flex-row items-center text-center bg-green text-white w-screen h-32 tablet:h-14">
                <div className="logo-styling mt-6 tablet:mt-0 flex justify-center items-center text-center h-3/6 tablet:h-0 w-screen tablet:w-0">
                    <Link href="coffees"><a className="text-7xl font-limelight tablet:text-2xl tablet:absolute tablet:left-40">BREWED</a></Link>
                </div>
                <div className="link-styling flex flex-row justify-center items-center h-3/6 tablet:h-full w-screen text-lg tablet:mx-80 tablet:grow-0">
                    <Link href="coffees">
                        <a className={`detail-link-styling detail-link-styling-coffees font-montserrat ${type==='coffees' ? 'border-class-active' : ''} flex justify-center items-center h-full flex-grow tablet:max-w-28`}>Our Coffee</a>
                    </Link>
                    <Link href="teas">
                        <a className={`detail-link-styling detail-link-styling-teas font-montserrat ${type==='teas' ? 'border-class-active' : ''} flex justify-center items-center h-full flex-grow tablet:max-w-28`}>Our Tea</a>
                    </Link>
                </div>
            <style jsx>{`
                .border-class-active {
                    border-bottom: 10px solid #C69F66;
                }
                @media only screen and (min-width: 900px) {
                    .border-class-active {
                        padding-top: 10px;
                    }
                    .detail-link-styling {
                        flex-grow: 0;
                    }
                    .detail-link-styling-coffees {
                        margin-right: 23px;
                    }
                    .detail-link-styling-teas {
                        margin-left: 23px;
                    }
                }
            `}</style>
            </div>
        </>
    );
}

export default Header;
