import { product } from './product';

describe('product', () => {
    it('can be created', () => {
        const p = new product({
            id: 1,
            title: 'GEPA Chiapas with two lines',
            imageUrl: '/images/1.png',
            type: 'Arabic',
        });
        expect(p).toBeDefined();
    });

    it('has an ID', () => {
        const p = new product({
            id: 1,
            title: 'GEPA Chiapas with two lines',
            imageUrl: '/images/1.png',
            type: 'Arabic',
        });
        expect(p.id).toEqual(1);
    });

    it('has a title', () => {
        const p = new product({
            id: 1,
            title: 'GEPA Chiapas with two lines',
            imageUrl: '/images/1.png',
            type: 'Arabic',
        });
        expect(p.title).toEqual('GEPA Chiapas with two lines');
    });

    it('has an image URL', () => {
        const p = new product({
            id: 1,
            title: 'GEPA Chiapas with two lines',
            imageUrl: '/images/1.png',
            type: 'Arabic',
        });
        expect(p.imageUrl).toEqual('/images/1.png');
    });

    it('has a type', () => {
        const p = new product({
            id: 1,
            title: 'GEPA Chiapas with two lines',
            imageUrl: '/images/1.png',
            type: 'Arabic',
        });
        expect(p.type).toEqual('Arabic');
    });
});
