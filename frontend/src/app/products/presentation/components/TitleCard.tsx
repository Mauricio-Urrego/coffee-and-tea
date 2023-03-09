import React from 'react';

type Props = {
    type: string;
}

export const TitleCard: React.FC<Props> = ({ type }) => {
    const titleCard = {
        'CoffeePageHeader':'Our beloved Coffee',
        'CoffeePageBlurb':'Hand-picked, made with love, curated, call it what you want. But we promise you, this will be the best coffee of your life.',
        'TeaPageHeader':'Just you, hot water and our tea',
        'TeaPageBlurb':'No pesticides or artificial flavours. We promise!'
    };
    return (
        <div>
                <h1 className="font-montserrat text-4xl">{type === 'coffees' ? titleCard.CoffeePageHeader : titleCard.TeaPageHeader}</h1>
                <p className="font-montserrat text-lg mt-4">{type === 'coffees' ? titleCard.CoffeePageBlurb : titleCard.TeaPageBlurb}</p>
        </div>
    );
}
